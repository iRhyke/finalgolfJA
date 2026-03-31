import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import CTASection from "@/components/home/CTASection";
import { Star, Check, ChevronRight, Clock, Info } from "lucide-react";


const plans = [
  {
    name: "ナイトタイム",
    price: "8,980",
    time: "全日 23:00〜5:00",
    slots: "同時1枠",
    limit: "回数制限なし",
    popular: false,
    features: ["深夜・早朝の練習に最適", "1枠80分", "VISION Plus利用可能"],
  },
  {
    name: "平日デイタイム",
    price: "9,980",
    time: "平日 10:00〜17:00",
    slots: "同時1枠",
    limit: "回数制限なし",
    popular: false,
    features: ["平日日中の練習に", "1枠80分", "VISION Plus利用可能"],
  },
  {
    name: "ライトプラン",
    price: "12,980",
    time: "全日 24時間",
    slots: "同時1枠",
    limit: "月4回",
    popular: false,
    features: ["月4回のお手軽プラン", "1枠80分", "VISION Plus利用可能"],
  },
  {
    name: "オールタイム",
    price: "19,800",
    time: "全日 24時間",
    slots: "同時1枠",
    limit: "回数制限なし",
    popular: true,
    features: ["24時間いつでも通い放題", "1枠80分", "VISION Plus利用可能", "一番人気のプラン"],
  },
  {
    name: "オールタイムゴールド",
    price: "24,800",
    time: "全日 24時間",
    slots: "同時2枠",
    limit: "回数制限なし",
    popular: false,
    features: ["2枠同時予約可能", "1枠80分", "VISION Plus利用可能", "お友達と一緒に練習"],
  },
];

export default function pricing() {
  return (
    <div>
      <PageHeader
        subtitle="pricing"
        title="料金プラン"
        description="ライフスタイルに合わせて選べる5つのプラン"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {plans.filter(plan => plan.name === "オールタイム" || plan.name === "オールタイムゴールド").map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative p-8 rounded-2xl border transition-all ${plan.popular
                    ? "bg-[#0F3D25] text-white border-transparent shadow-2xl shadow-[#0F3D25]/20"
                    : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg"
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-[#C8A96E] text-white text-xs font-semibold rounded-full">
                      <Star className="w-3 h-3" />
                      人気No.1
                    </span>
                  </div>
                )}
                <h3 className={`text-sm font-semibold ${plan.popular ? "text-[#C8A96E]" : "text-gray-500"}`}>
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-bold">¥{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? "text-white/60" : "text-gray-400"}`}>/月（税込）</span>
                </div>
                <div className={`mt-6 space-y-2 text-sm ${plan.popular ? "text-white/70" : "text-gray-500"}`}>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>{plan.time}</span>
                  </div>
                  <p>{plan.slots} / {plan.limit}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-dashed border-gray-200/30">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? "text-[#C8A96E]" : "text-[#1B5E3B]"}`} />
                        <span className={`text-sm ${plan.popular ? "text-white/80" : "text-gray-600"}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={`/trial?plan=${encodeURIComponent(plan.name)}`}
                  className={`mt-8 block text-center py-3 rounded-full font-semibold text-sm transition-all ${plan.popular
                      ? "bg-[#C8A96E] hover:bg-[#b8995e] text-white"
                      : "bg-[#1B5E3B] hover:bg-[#0F3D25] text-white"
                    }`}
                >
                  このプランで始める
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.filter(plan => plan.name === "ライトプラン" || plan.name === "平日デイタイム" || plan.name === "ナイトタイム").map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative p-6 rounded-2xl border bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-500">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">¥{plan.price}</span>
                  <span className="text-sm text-gray-400">/月（税込）</span>
                </div>
                <div className="mt-4 space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>{plan.time}</span>
                  </div>
                  <p>{plan.slots} / {plan.limit}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#1B5E3B]" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={`/trial?plan=${encodeURIComponent(plan.name)}`}
                  className="mt-6 block text-center py-3 rounded-full font-semibold text-sm transition-all bg-[#1B5E3B] hover:bg-[#0F3D25] text-white"
                >
                  このプランで始める
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-[#F9FAFB] max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#C8A96E] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-[#111111] mb-2">ご利用について</h3>
                <ul className="text-gray-500 text-sm space-y-1.5 leading-relaxed">
                  <li>・1枠あたりの利用時間は80分です</li>
                  <li>・すべてのプランでGOLFZON VISION Plusをご利用いただけます</li>
                  <li>・プランの変更は月単位で可能です</li>
                  <li>・入会金・事務手数料については体験時にご説明いたします</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection page="pricing" />
    </div>
  );
}
