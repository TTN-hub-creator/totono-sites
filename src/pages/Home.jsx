import { Link } from 'react-router-dom'
import { facilities } from '../data/siteData'
import { newFacilities } from '../data/newFacilities'
import CTASection from '../components/CTASection'
import HomeHero from '../components/HomeHero'

const allFacilities = [...facilities, ...newFacilities]

export default function Home() {
  return (
    <main>
      <HomeHero />

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
          {allFacilities.map((facility) => (
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
              {facility.nameJa && facility.nameJa !== facility.name && (
                <p className="mt-0.5 text-sm text-[#8a8880]">{facility.nameJa}</p>
              )}
              <p className="mt-2 text-sm text-[#8a8880]">{facility.location}</p>
              <p className="mt-6 font-serif text-xl leading-relaxed text-[#2f332f]">
                {facility.catchcopy}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#6f6b63]">
                {facility.description}
              </p>
              {facility.comingSoon ? (
                <span className="mt-auto inline-flex items-center self-start rounded-full border border-[#d4c9b5] bg-[#fbfaf6] px-6 py-2.5 text-xs tracking-widest text-[#b0a898]">
                  Coming soon
                </span>
              ) : (
                <Link
                  to={facility.path}
                  className="mt-auto inline-block self-start rounded-full border px-6 py-2.5 text-xs tracking-widest transition-colors hover:bg-[#fbfaf6]"
                  style={{ borderColor: facility.color, color: facility.color }}
                >
                  詳しく見る →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  )
}
