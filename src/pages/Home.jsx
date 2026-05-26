import { Link } from 'react-router-dom'
import { site, facilities } from '../data/siteData'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <main>
      <section className="px-6 py-24 md:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[#9E7B5A]">
            {site.name}
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-medium leading-relaxed tracking-wide text-[#2f332f] md:text-5xl md:leading-relaxed">
            {site.tagline}
          </h1>
          <p className="mt-8 max-w-2xl whitespace-pre-line text-base leading-8 text-[#6f6b63]">
            {site.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#facilities"
              className="inline-block rounded-full bg-[#2f332f] px-8 py-3 text-center text-xs tracking-widest text-white"
            >
              施設を見る
            </a>
            <a
              href="mailto:info@totono-lab.jp"
              className="inline-block rounded-full border border-[#2f332f]/30 px-8 py-3 text-center text-xs tracking-widest text-[#2f332f]"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-[#e8e2d5]" />
      </div>

      <section id="facilities" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[#9E7B5A]">
          Facilities
        </p>
        <h2 className="mb-12 font-serif text-3xl font-medium text-[#2f332f]">
          施設のご紹介
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="flex min-h-[360px] flex-col rounded-3xl border border-[#e8e2d5] bg-white/80 p-8 shadow-sm"
            >
              <span
                className="mb-5 h-[3px] w-10 rounded-full"
                style={{ backgroundColor: facility.color }}
              />
              <p
                className="mb-1 text-[11px] uppercase tracking-[0.2em]"
                style={{ color: facility.color }}
              >
                {facility.type}
              </p>
              <h3 className="font-serif text-2xl font-medium text-[#2f332f]">
                {facility.name}
              </h3>
              <p className="mt-2 text-sm text-[#8a8880]">{facility.location}</p>
              <p className="mt-6 font-serif text-xl leading-relaxed text-[#2f332f]">
                {facility.catchcopy}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#6f6b63]">
                {facility.description}
              </p>
              <Link
                to={facility.path}
                className="mt-auto inline-block self-start rounded-full border px-6 py-2.5 text-xs tracking-widest transition-colors hover:bg-[#fbfaf6]"
                style={{ borderColor: facility.color, color: facility.color }}
              >
                詳しく見る →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  )
}
