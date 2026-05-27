import { CONTACT_FORM_URL } from '../config/links'

export default function Contact() {
  return (
    <main>
      <section className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#9E7B5A]">
          Contact
        </p>
        <h1 className="font-serif text-3xl font-medium leading-relaxed text-[#2f332f] md:text-4xl">
          お問い合わせ・見学予約
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-8 text-[#6f6b63]">
          見学予約・入居相談・採用に関するお問い合わせは、以下のフォームよりお送りください。
          ご希望の施設やご相談内容を確認のうえ、担当者よりご連絡いたします。
        </p>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#e8e2d5] bg-white">
          <iframe
            src={`${CONTACT_FORM_URL}?embedded=true`}
            width="100%"
            height="1200"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="お問い合わせ・見学予約フォーム"
            className="block w-full"
          >
            読み込んでいます…
          </iframe>
        </div>
      </section>
    </main>
  )
}
