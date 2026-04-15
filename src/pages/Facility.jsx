import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";
import CTASection from "../components/home/CTASection";
import { Monitor, Users, Clock, Shield, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

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

const images = [
  {
    src: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=400&q=80",
    alt: "シミュレーター打席",
    label: "シミュレーター打席",
  },
  {
    src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&q=80",
    alt: "ゴルフ練習",
    label: "プレー風景",
  },
  {
    src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=400&q=80",
    alt: "コース映像",
    label: "コース映像",
  },
  {
    src: "https://images.unsplash.com/photo-1592919505780-303950717480?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1592919505780-303950717480?w=400&q=80",
    alt: "クラブ・設備",
    label: "設備・備品",
  },
];

function Lightbox({ index, onClose, onPrev, onNext }) {
  const img = images[index];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="max-w-4xl w-full mx-16"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="w-full max-h-[75vh] object-contain rounded-xl"
        />
        <p className="text-center text-white/60 text-sm mt-4">
          {img.label}　{index + 1} / {images.length}
        </p>
      </motion.div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </motion.div>
  );
}

function Carousel({ onOpenLightbox }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[16/9] max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <span className="px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
          {images[current].label}
        </span>
      </div>

      <button
        onClick={() => onOpenLightbox(current)}
        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
      >
        <ZoomIn className="w-4 h-4 text-white" />
      </button>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      <div className="absolute bottom-4 right-4 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-white w-5" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ThumbnailGrid({ onOpenLightbox }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 max-w-3xl mx-auto">
      {images.map((img, i) => (
        <button
          key={i}
          onClick={() => onOpenLightbox(i)}
          className="group relative rounded-xl overflow-hidden aspect-[4/3] focus:outline-none"
        >
          <img
            src={img.thumb}
            alt={img.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="absolute bottom-0 left-0 right-0 py-1.5 text-center text-white text-[11px] font-medium bg-gradient-to-t from-black/60 to-transparent">
            {img.label}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function Facility() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevLightbox = () => setLightboxIndex((i) => ((i ?? 0) - 1 + images.length) % images.length);
  const nextLightbox = () => setLightboxIndex((i) => ((i ?? 0) + 1) % images.length);

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
                src="/images/DSC00706-Pano.jpg"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">Gallery</span>
            <h2 className="mt-3 text-3xl font-bold text-[#111111]">フォトギャラリー</h2>
            <p className="mt-3 text-gray-400 text-sm">画像をクリックすると拡大表示できます</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Carousel onOpenLightbox={openLightbox} />
            <ThumbnailGrid onOpenLightbox={openLightbox} />
          </motion.div>
        </div>
      </section>

      <CTASection />

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevLightbox}
            onNext={nextLightbox}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
