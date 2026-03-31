import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";
import CTASection from "@/components/home/CTASection";
import { ChevronDown, ChevronRight } from "lucide-react";


const faqData = [
  {
    category: "ご利用について",
    questions: [
      {
        q: "ゴルフ初心者ですが大丈夫ですか？",
        a: "はい、大歓迎です。最初にスタッフが操作方法をご説明します。完全個室なので、周りの目を気にせず集中して練習いただけます。",
      },
      {
        q: "利用時間はどのくらいですか？",
        a: "1枠80分です。ウォーミングアップからラウンドプレーまで、余裕を持って楽しめる時間設定にしています。",
      },
      {
        q: "予約なしでも利用できますか？",
        a: "完全予約制です。会員様は専用アプリから24時間いつでも直前予約が可能です。体験の方はサイト内のフォームよりご予約ください。",
      },
      {
        q: "24時間いつでも利用できますか？",
        a: "はい、24時間365日営業しております。早朝でも深夜でも、お好きな時間にご利用いただけます（プランによって利用可能時間帯が異なります）。",
      },
    ],
  },
  {
    category: "設備・持ち物",
    questions: [
      {
        q: "クラブを持っていないのですが利用できますか？",
        a: "無料のレンタルクラブ（メンズ・レディース）を1つずつご用意しておりますので、手ぶらでもご気軽にお越しください。もちろん、マイクラブの持ち込みも可能です。",
      },
      {
        q: "どのようなシミュレーターですか？",
        a: "全2室ともに、GOLFZON社の「VISION Plus」を設置しております。詳しくは[こちら](https://www.golfzon.com/ja/products/vision-plus)をご覧ください。",
      },
      {
        q: "左打ち（レフティ）でも利用できますか？",
        a: "はい、左右両打ちに対応した打席をご用意しております。左利きの方も安心してお楽しみいただけます。",
      },
    ],
  },
  {
    category: "料金・入会",
    questions: [
      {
        q: "入会金はかかりますか？",
        a: "キャンペーン期間等により変動いたします。詳細は体験時にスタッフよりご案内させていただきます。",
      },
      {
        q: "プランの変更はできますか？",
        a: "はい、月単位で変更可能です。マイページから簡単にお手続きいただけます。",
      },
      {
        q: "体験は本当に無料ですか？",
        a: "はい、初回のみ無料で80分間じっくりお試しいただけます。無理な勧誘もございませんので、まずはお気軽にご予約ください。",
      },
    ],
  },
  {
    category: "アクセス",
    questions: [
      {
        q: "駐車場はありますか？",
        a: "はい、計50台分ございます。建物正面に10台、裏側に40台分ありますので、おすすめは広くて停めやすい裏側駐車場です。",
      },
      {
        q: "最寄りのインターチェンジはどこですか？",
        a: "名古屋高速「高針JCT（インター）」からすぐの好アクセスです。1Place cafeの2階が店舗となります。",
      },
    ],
  },
];

function faqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[#111111] font-medium text-sm pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function faq() {
  return (
    <div>
      <PageHeader
        subtitle="faq"
        title="よくある質問"
        description="お客様からよくいただくご質問をまとめました"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h2 className="text-lg font-bold text-[#1B5E3B] mb-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-[#C8A96E] rounded-full" />
                {section.category}
              </h2>
              <div className="bg-[#F9FAFB] rounded-2xl px-6">
                {section.questions.map((item, i) => (
                  <faqItem key={i} question={item.q} answer={item.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection page="faq" />
    </div>
  );
}
