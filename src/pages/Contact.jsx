// @ts-nocheck
import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";
import { Check, ChevronRight, Loader2, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry_type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "contact" }),
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
        subtitle="contact"
        title="お問い合わせ"
        description="ご質問・ご相談はお気軽にお問い合わせください"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#111111] mb-4">お気軽にご連絡ください</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  体験予約、入会に関するご質問、料金のご相談など、
                  どんなことでもお気軽にお問い合わせください。
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F9FAFB]">
                  <div className="w-10 h-10 rounded-lg bg-[#1B5E3B]/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1B5E3B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] text-sm mb-1">所在地</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      愛知県名古屋市名東区<br />高針原２丁目１７０８ 1Place cafe2階
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F9FAFB]">
                  <div className="w-10 h-10 rounded-lg bg-[#1B5E3B]/5 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#1B5E3B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] text-sm mb-1">営業時間</h4>
                    <p className="text-gray-500 text-xs">24時間営業 / 年中無休</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F9FAFB]">
                  <div className="w-10 h-10 rounded-lg bg-[#1B5E3B]/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#1B5E3B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] text-sm mb-1">お問い合わせ</h4>
                    <p className="text-gray-500 text-xs">右のフォームからお問い合わせください</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-[#F9FAFB] rounded-2xl p-8 lg:p-10">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-[#1B5E3B]/10 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-[#1B5E3B]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111111] mb-2">送信完了</h3>
                    <p className="text-gray-500 text-sm">
                      お問い合わせありがとうございます。<br />
                      担当者より折り返しご連絡いたします。
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                          お名前 <span className="text-red-500">*</span>
                        </label>
                        <Input required placeholder="山田 太郎" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-12 bg-white" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                          メールアドレス <span className="text-red-500">*</span>
                        </label>
                        <Input required type="email" placeholder="email@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-12 bg-white" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">電話番号</label>
                        <Input type="tel" placeholder="090-1234-5678" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="h-12 bg-white" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                          お問い合わせ種別 <span className="text-red-500">*</span>
                        </label>
                        <Select value={form.inquiry_type} onValueChange={(value) => setForm({ ...form, inquiry_type: value })}>
                          <SelectTrigger className="h-12 bg-white">
                            <SelectValue placeholder="選択してください" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="体験予約">体験予約</SelectItem>
                            <SelectItem value="入会について">入会について</SelectItem>
                            <SelectItem value="料金について">料金について</SelectItem>
                            <SelectItem value="その他">その他</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                        お問い合わせ内容 <span className="text-red-500">*</span>
                      </label>
                      <Textarea required placeholder="お問い合わせ内容をご記入ください" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="bg-white" />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto h-12 px-10 bg-[#1B5E3B] hover:bg-[#0F3D25] text-white font-semibold rounded-full text-sm">
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>送信する <ChevronRight className="w-4 h-4 ml-2" /></>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
