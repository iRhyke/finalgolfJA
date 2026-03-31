import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";

const specs = [
  "高精度センサーによるリアルな弾道解析",
  "世界中の有名コースでラウンドプレー",
  "スイング分析・動画撮影機能",
  "左右打席対応",
];

export default function simulatorPreview() {
  return (
    <section className="py-24 lg:py-32 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/visonplus_1920.jpg"
                alt="GOLFZON VISION Plus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[#1B5E3B]" />
                  <span className="text-[#111111] text-sm font-medium">GOLFZON VISION Plus</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">simulator</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#111111] leading-tight">
              GOLFZON
              <br />
              VISION Plus
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed">
              GOLFZON社が誇る最高級シミュレーター。圧倒的な映像美と高精度なセンサー技術で、
              まるで実際のコースにいるかのようなリアルな体験を提供します。
            </p>

            <ul className="mt-8 space-y-4">
              {specs.map((spec, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1B5E3B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#1B5E3B]" />
                  </div>
                  <span className="text-gray-600 text-sm">{spec}</span>
                </li>
              ))}
            </ul>

            <Link
              to={createPageUrl("simulator")}
              className="inline-flex items-center gap-2 mt-8 text-[#1B5E3B] font-semibold text-sm hover:gap-3 transition-all"
            >
              シミュレーターの詳細を見る
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
