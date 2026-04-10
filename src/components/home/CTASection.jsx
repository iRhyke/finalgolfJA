import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const ctaContent = /** @type {Record<string, {title: string, description: string} | undefined>} */ ({
  // homeページ
  default: {
    title: "まずは体験からはじめてみませんか？",
    description: "初めての方でも安心。スタッフが丁寧にサポートします。\n最高の環境で、ゴルフの新しい楽しみを見つけてください。",
  },
  // 施設紹介ページ
  facility: {
    title: "体験してみませんか？",
    description: "初めての方でも安心。お気軽にお問い合わせください。",
  },
  // シミュレーターページ
  simulator: {
    title: "最高級シミュレーターを体験しよう",
    description: "VISION Plusの圧倒的なクオリティを、ぜひ実際に体感してください。",
  },
  // 料金ページ
  pricing: {
    title: "まずは体験から始めましょう",
    description: "実際の施設を見て、シミュレーターを体験してからプランをお選びいただけます。",
  },
  // faqページ
  faq: {
    title: "まずは体験から始めましょう",
    description: "疑問が解決したら、ぜひ実際に体験してみてください。",
  },
});

export default function CTASection({
  page = "default",
  primaryText = "無料体験を予約する",
  primaryLink = "/trial",
}) {
  const { title, description } = ctaContent[page] ?? ctaContent.default ?? { title: "", description: "" };
  return (
    <section className="py-24 lg:py-32 green-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#111111] text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="text-gray-500 mt-6 mx-auto text-base sm:text-lg max-w-xl whitespace-pre-line">
            {description}
          </p>
          <div className="flex items-center justify-center mt-10">
            <Link
              to={primaryLink}
              className="group flex items-center gap-2 px-8 py-4 bg-[#C8A96E] hover:bg-[#b8995e] text-white font-semibold rounded-full transition-all hover:shadow-2xl hover:shadow-[#C8A96E]/30 text-base"
            >
              {primaryText}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}