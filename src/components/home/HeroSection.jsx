import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Clock, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/edited/DSC00650.jpg"
          alt="ゴルフ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C8A96E] animate-pulse" />
            <span className="text-white/90 text-sm font-medium">24時間営業・年中無休</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            最高峰の
            <br />
            <span className="text-[#C8A96E]">シミュレーター</span>で
            <br />
            ゴルフが変わる
          </h1>

          <p className="mt-6 text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            クーラーの効いた快適な空間で、GOLFZON最高級モデル
            <br className="hidden sm:block" />
            「VISION Plus」を心ゆくまで。
          </p>

          {/* 予約ボタン（大きく目立つように） */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              to="/trial"
              className="group flex items-center gap-3 px-8 py-4 bg-[#C8A96E] hover:bg-[#b8995e] text-white font-bold rounded-full transition-all hover:shadow-2xl hover:shadow-[#C8A96E]/30 text-lg"
            >
              無料体験を予約する
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-all text-base"
            >
              料金を見る
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 mt-12">
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Clock className="w-4 h-4" />
              <span>24時間利用可能</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Zap className="w-4 h-4" />
              <span>GOLFZON VISION Plus</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-white/50" />
        </motion.div>
      </div>
    </section>
  );
}