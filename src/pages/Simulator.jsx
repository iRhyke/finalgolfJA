import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";
import CTASection from "../components/home/CTASection";
import { Check, Target, BarChart3, Globe, Video } from "lucide-react";

const specs = [
  {
    icon: Target,
    title: "高精度弾道解析",
    description: "ボールスピード、打ち出し角度、スピン量など、あらゆるデータを正確に計測。プロレベルの分析が可能です。",
  },
  {
    icon: Globe,
    title: "世界の名門コース",
    description: "世界中の200以上の有名コースを収録。セントアンドリュースやペブルビーチなど、憧れのコースでラウンドが楽しめます。",
  },
  {
    icon: Video,
    title: "スイング撮影・分析",
    description: "スイングを自動撮影し、スロー再生で確認。フォームの改善ポイントが一目でわかります。",
  },
  {
    icon: BarChart3,
    title: "データ蓄積・比較",
    description: "練習データを蓄積し、過去の自分と比較。上達の過程を可視化して、モチベーションを維持できます。",
  },
];

const features = [
  "リアルタイムの弾道シミュレーション",
  "正確なフェース角・クラブパス計測",
  "自動ティーアップ機能",
  "高解像度大画面スクリーン",
  "左右打席対応",
  "練習モード・ラウンドモード搭載",
  "アプローチ・パッティング練習対応",
  "コンペモード搭載",
];

export default function simulator() {
  return (
    <div>
      <PageHeader
        subtitle="simulator"
        title="シミュレーター紹介"
        description="GOLFZON最高級モデル「VISION Plus」の実力"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B5E3B]/5 mb-6">
                <span className="text-[#1B5E3B] text-sm font-semibold">GOLFZON社 最高級モデル</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-tight">
                VISION
                <br />
                <span className="text-[#C8A96E]">Plus</span>
              </h2>
              <p className="mt-6 text-gray-500 leading-relaxed">
                GOLFZON VISION Plusは、シミュレーターゴルフの世界的リーダーであるGOLFZON社が開発した最高級モデルです。
                圧倒的な映像クオリティと高精度なセンサー技術により、まるで国内外の有名コースを実際にラウンドしているかのような臨場感を提供します。
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                ゴルフサロングリーン 高針インター店では、このVISION Plusを全2室に1台ずつ完備。
                完全個室のプライベートな空間で、誰にも邪魔されることなくスイング分析やコース攻略に集中いただけます。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/visonplus_1920.jpg"
                  alt="GOLFZON VISION Plus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]">
                <p className="text-4xl font-bold text-[#1B5E3B]">2<span className="text-lg ml-1">室</span></p>
                <p className="text-gray-500 text-sm mt-1">完備</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">Specifications</span>
            <h2 className="mt-3 text-3xl font-bold text-[#111111]">主な機能</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1B5E3B]/5 flex items-center justify-center mb-5">
                  <spec.icon className="w-5 h-5 text-[#1B5E3B]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">{spec.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">Features</span>
            <h2 className="mt-3 text-3xl font-bold text-[#111111]">搭載機能一覧</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#F9FAFB]"
              >
                <div className="w-6 h-6 rounded-full bg-[#1B5E3B]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B5E3B]" />
                </div>
                <span className="text-gray-700 text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection page="simulator" />
    </div>
  );
}
