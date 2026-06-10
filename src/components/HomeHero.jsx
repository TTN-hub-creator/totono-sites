import homeHero from '../assets/images/brand/home-hero.jpg'
import homeLeaf from '../assets/images/brand/home-leaf.jpg'
import { Link } from 'react-router-dom'

export default function HomeHero() {
  return (
    <section className="bg-[#F7F3EB] px-6 py-20 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#7F947C]">
            TOTONO LAB INC.
          </p>
          <h1 className="font-serif text-4xl font-medium leading-[1.75] tracking-wide text-[#3A3D38] md:text-[2.75rem]">
            気持ち良いを、つくり
            <br />
            美しく、整える。
          </h1>
          <p className="mt-8 text-sm leading-[2.2] text-[#6B6760]">
            医療・介護・住まい・食・場づくりを通じて、
            <br className="hidden sm:block" />
            日々が気持ちよく整う場所をつくります。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-[#7F947C] px-8 py-3.5 text-center text-xs tracking-[0.2em] text-white transition-colors hover:bg-[#6B7E68]"
            >
              お問い合わせ
            </Link>
            <a
              href="#facilities"
              className="inline-block rounded-full border border-[#7F947C] px-8 py-3.5 text-center text-xs tracking-[0.2em] text-[#5F745D] transition-colors hover:bg-[#7F947C]/10"
            >
              詳しく見る
            </a>
          </div>
        </div>

        <div className="relative pb-24 md:pb-20">
          <div className="relative overflow-hidden rounded-[4rem_4rem_2.75rem_2.75rem] border border-white/70 shadow-[0_18px_55px_rgba(47,51,47,0.14)]">
            <img
              src={homeHero}
              alt="Totono Labの世界観を表す上質なラウンジ空間"
              className="h-[360px] w-full object-cover md:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#1a1a15]/10" />
          </div>

          <div className="absolute bottom-10 left-4 h-[120px] w-[120px] overflow-hidden rounded-full border-[5px] border-[#F7F3EB] bg-white shadow-[0_10px_28px_rgba(47,51,47,0.12)] md:h-[160px] md:w-[160px]">
            <img
              src={homeLeaf}
              alt="光と植物のイメージ"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-4 max-w-[280px] rounded-[1.75rem] border border-[#E8E2D5] bg-white/95 px-6 py-5 shadow-[0_12px_36px_rgba(47,51,47,0.13)] backdrop-blur-sm">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9E7B5A]">
              TOTONO LAB
            </p>
            <p className="mt-3 font-serif text-lg leading-relaxed text-[#3A3D38]">
              医療・介護・住まいを、
              <br />
              ひとつの世界観で整える。
            </p>
            <p className="mt-4 text-xs leading-6 text-[#8A8580]">
              心と身体にやさしい、上質な日常を。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
