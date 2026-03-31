import React from "react";
import PageHeader from "../components/shared/PageHeader";

const items = [
  { label: "販売業者", value: "	株式会社GROUND FLAG（ゴルフサロングリーン 高針インター店）" },
  { label: "代表責任者", value: "渡辺 一人" },
  { label: "所在地", value: "〒481-0014 愛知県北名古屋市井瀬木五町100番地" },
  { label: "電話番号", value: "	0568-24-1061" },
  { label: "電話受付時間", value: "平日 9:00 - 19:00" },
  { label: "公開メールアドレス", value: "watanabehitori@icloud.com" },
  { label: "販売価格（役務の対価）", value: "入会申込フォームに表示された額面（税込価格）" },
  { label: "引渡し時期", value: "お支払い完了後即時で「サービス提供を受ける権利」を取得したこととなります。" },
  { label: "決済方法", value: "クレジットカード決済" },
  {
    label: "商品代金以外の必要料金",
    value: (
      <>
        <p>会費のほか支払いに関わる手数料やサービス提供に関わるシステム利用料、サービス手数料等が別途発生する場合があります。</p>
        <p>発生する場合は入会申込フォームに表示いたします。</p>
      </>
    )
  },
  { label: "返金について", value: "サービスの性質上、返金はお受けしておりません。" },
  {
    label: "中途解約について",
    value: (
      <>
        <p>会員は、各月の15日までに当社に所定の退会届を提出することにより、退会届提出日の翌月末限りで退会することができます。</p>
        <p>15日を過ぎた場合は、当社の事務手続き上、翌々月末日退会扱いになります。</p>
      </>
    )
  },
];

export default function tokushoho() {
  return (
    <div>
      <PageHeader
        subtitle="Legal"
        title="特定商取引法に基づく表記"
        description=""
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-gray-100">
            {items.map((item, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-6">
                <dt className="text-sm font-semibold text-[#111111]">{item.label}</dt>
                <dd className="text-sm text-gray-500 sm:col-span-2">{item.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}