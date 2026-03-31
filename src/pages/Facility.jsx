import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";
import CTASection from "../components/home/CTASection";
import { Monitor, Users, Clock, Shield } from "lucide-react";

const facilities = [
  {
    icon: Monitor,
    title: "VISION Plus 各室1台（全2室）",
    description: "GOLFZON最高級モデルを全室に完備。圧倒的な再現度で、国内外の名門コースを体験いただけます。",
  },
  {
    icon: Users,
    title: "左右両打ち対応",
    description: "右打ち・左打ちどちらのゴルファーもストレスなく練習いただけるよう、両打ち対応の打席を全室にご用意しています。",
  },
  {
    icon: Clock,
    title: "24時間・年中無休",
    description: "早朝のラウンド前や、お仕事帰りのリフレッシュに。お客様の生活リズムに合わせて、365日いつでもご利用可能です。",
  },
  {
    icon: Shield,
    title: "完全プライベート個室",
    description: "人目を気にせず、自分だけの練習に没頭できる完全個室。初心者の方もリラックスしてプレーをお楽しみください。",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80",
    alt: "ゴルフ練習",
  },
  {
    src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600&q=80",
    alt: "シミュレーター",
  },
  {
    src: "https://images.unsplash.com/photo-1592919505780-303950717480?w=600&q=80",
    alt: "ゴルフクラブ",
  },
];

export default function facility() {
  return (
    <div>
      <PageHeader
        subtitle="facility"
        title="施設紹介"
        description="最先端のシミュレーターと、プライベートを重視した上質な空間。"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#111111] mb-6">
                妥協のない
                <br />
                <span className="text-[#1B5E3B]">練習環境を、その手に。</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                ゴルフサロングリーン 高針インター店は、全室にGOLFZON社の最高級シミュレーター「VISION Plus」を採用。
                24時間いつでも、最高のテクノロジーを活用した集中練習が可能です。
              </p>
              <p className="text-gray-500 leading-relaxed">
                「1Place cafe」の2階に位置する隠れ家のような空間で、初心者から上級者まで、すべてのゴルファーの情熱に応える環境を整えてお待ちしております。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img
                src="/images/exterior-w800.jpg"
                alt="施設外観"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[#F9FAFB] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1B5E3B]/5 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#1B5E3B]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">Gallery</span>
            <h2 className="mt-3 text-3xl font-bold text-[#111111]">フォトギャラリー</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection page="facility" />
    </div>
  );
}
