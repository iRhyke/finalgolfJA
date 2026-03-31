// @ts-nocheck
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarCheck, MapPin, Flag, UserPlus, Check, ChevronRight, Loader2 } from "lucide-react";


const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "ご予約",
    description: "専用フォームから日時を選んでご予約ください。即時予約確定となります。",
  },
  {
    icon: MapPin,
    step: "02",
    title: "ご来店・説明",
    description: "スタッフが施設とシミュレーターの使い方をご説明します。説明後は自由にお楽しみいただけます。",
  },
  {
    icon: Flag,
    step: "03",
    title: "体験プレー",
    description: "80分間、VISION Plusでシミュレーションゴルフを体験していただきます。",
  },
  {
    icon: UserPlus,
    step: "04",
    title: "入会案内",
    description: "ご希望の方には、ライフスタイルに最適なプランをご提案いたします。",
  },
];

const benefits = [
  "手ぶらでOK（クラブ貸出あり）",
  "スタッフが丁寧にサポート",
  "VISION Plusを実際に体験",
  "無理な勧誘は一切なし",
];

export default function trial() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    if (plan) {
      setSelectedPlan(plan);
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "trial", plan: selectedPlan }),
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("送信に失敗しました。もう一度お試しください。");
      }
    } catch (error) {
      alert("送信に失敗しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <PageHeader
        subtitle="trial & Join"
        title="初回体験・入会案内"
        description="まずは気軽に体験してみてください"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">Flow</span>
            <h2 className="mt-3 text-3xl font-bold text-[#111111]">体験から入会までの流れ</h2>
            <div className="w-12 h-0.5 bg-[#C8A96E] mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F9FAFB] shadow-sm flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-[#1B5E3B]" />
                </div>
                <span className="text-[#C8A96E] text-xs font-bold tracking-widest">STEP {item.step}</span>
                <h3 className="mt-2 text-lg font-bold text-[#111111]">{item.title}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">Benefits</span>
              <h2 className="mt-3 text-3xl font-bold text-[#111111] mb-6">体験利用のポイント</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                初めてインドアゴルフを体験される方でもご安心ください。
                経験豊富なスタッフが、シミュレーターの使い方から丁寧にご案内いたします。
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1B5E3B]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#1B5E3B]" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 rounded-2xl bg-white border border-gray-100">
                <h3 className="font-semibold text-[#111111] mb-2">体験時の持ち物</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  動きやすい服装でお越しください。ゴルフクラブ・グローブは無料でお貸し出ししております。
                  マイクラブ・マイシューズの持ち込みも大歓迎です。ただし、シューズのご用意はございませんのでご注意ください。
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                <h3 className="text-xl font-bold text-[#111111] mb-2">体験予約フォーム</h3>
                <p className="text-gray-500 text-sm mb-8">以下のカレンダーからご希望の日時をお選びください</p>
                {selectedPlan && (
                  <div className="mb-6 px-4 py-3 bg-[#1B5E3B]/10 rounded-xl flex items-center gap-2">
                    <span className="text-[#1B5E3B] text-sm font-semibold">選択中のプラン：</span>
                    <span className="text-[#1B5E3B] text-sm">{selectedPlan}</span>
                  </div>
                )}
                <iframe
                  src="https://golfgreen.golren.com/trial?store_id=62"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  style={{ border: "none", maxWidth: "100%" }}
                  title="体験予約フォーム"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}