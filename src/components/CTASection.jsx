export default function CTASection({
  title = 'まずはお気軽にご相談ください。',
  description = '見学予約、資料請求、ご相談など、ご家族の状況に合わせてご案内します。',
  primaryLabel = '見学予約',
  secondaryLabel = 'お問い合わせ',
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-[2rem] border border-[#e8e2d5] bg-[#2f332f] px-6 py-12 text-center text-white md:px-12">
        <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[#d8c6a3]">
          Contact
        </p>
        <h2 className="font-serif text-3xl font-medium leading-relaxed md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/75">
          {description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-[#d8c6a3] px-8 py-3 text-sm font-medium tracking-widest text-[#2f332f]"
          >
            {primaryLabel}
          </a>
          <a
            href="mailto:info@totono-lab.jp"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-medium tracking-widest text-white"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
