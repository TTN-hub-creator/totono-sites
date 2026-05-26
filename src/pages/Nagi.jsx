import { facilities } from '../data/siteData'
import FeatureCard from '../components/FeatureCard'
import CTASection from '../components/CTASection'
import heroHall from '../assets/images/nagi/hero-hall.jpg'
import imgReception from '../assets/images/nagi/reception.jpg'
import imgDining from '../assets/images/nagi/dining.jpg'
import imgBath from '../assets/images/nagi/bath.jpg'
import imgGarden from '../assets/images/nagi/garden.jpg'
import imgExterior from '../assets/images/nagi/exterior.jpg'

const facilityPhotos = [
  { src: imgReception, title: '受付', description: '温かみのある照明と花が迎えるエントランス' },
  { src: imgDining, title: 'ダイニング', description: '毎日の食事が楽しみになる、明るいダイニング' },
  { src: imgBath, title: '浴室', description: '安心して入浴できる、広々とした浴室' },
  { src: imgGarden, title: '庭', description: '四季の緑を感じながら過ごせる中庭' },
  { src: imgExterior, title: '外観', description: '光と緑に包まれた、穏やかな施設外観' },
]

const nagi = facilities.find((facility) => facility.id === 'nagi')

export default function Nagi() {
  return (
    <main>
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[#4A7B8C]">
              Totono Nagi
            </p>
            <h1 className="font-serif text-4xl font-medium leading-relaxed text-[#2f332f] md:text-5xl md:leading-relaxed">
              凪のように、<br />
              穏やかな毎日を。
            </h1>
            <p className="mt-8 max-w-xl text-base leading-9 text-[#6f6b63]">
              医療と介護の安心に、光・音・香り・食・空間の心地よさを重ねる。
              その人らしい時間が、ゆるやかに整う住まいです。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="rounded-full bg-[#4A7B8C] px-8 py-3 text-center text-xs tracking-widest text-white">
                見学予約
              </a>
              <a href="#features" className="rounded-full border border-[#4A7B8C]/40 px-8 py-3 text-center text-xs tracking-widest text-[#4A7B8C]">
                Nagiを知る
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-sm">
            <img
              src={heroHall}
              alt="ピアノのある吹き抜けホール"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/20" />
            <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/75 p-6 backdrop-blur">
              <p className="text-xs tracking-[0.24em] text-[#4A7B8C]">Totono Nagi</p>
              <p className="mt-3 font-serif text-xl leading-relaxed text-[#2f332f]">
                ピアノのある吹き抜けホール、明るい居室、穏やかな共用空間。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[#4A7B8C]">
          Care Residence
        </p>
        <h2 className="mb-12 font-serif text-3xl font-medium text-[#2f332f]">
          Nagiが大切にすること
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {nagi.features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              color={nagi.color}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[#4A7B8C]">
          Facility
        </p>
        <h2 className="mb-12 font-serif text-3xl font-medium text-[#2f332f]">
          施設・設備
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {facilityPhotos.map(({ src, title, description }) => (
            <div key={title} className="overflow-hidden rounded-3xl border border-[#e8e2d5] bg-white">
              <img src={src} alt={title} className="h-56 w-full object-cover" />
              <div className="p-7">
                <h3 className="font-serif text-lg text-[#2f332f]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#6f6b63]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/50 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {[
            ['光と音が整う空間', '吹き抜けホールやラウンジで、静かに流れる音とやわらかな光を感じながら過ごせます。'],
            ['日々の暮らしを支えるケア', '食事、入浴、通院、日々の相談まで、ご本人のペースを大切に支えます。'],
            ['ご家族にとっての安心', '見学や相談を通じて、暮らし方や費用、医療面の不安を一つずつ整理します。'],
          ].map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-[#e8e2d5] bg-[#fbfaf6] p-7">
              <h3 className="font-serif text-xl text-[#2f332f]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#6f6b63]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="大切な方の暮らしを、一緒に考えます。"
        description="施設見学、ご入居相談、料金の確認など、ご家族の状況に合わせて丁寧にご案内します。"
        primaryLabel="見学予約"
        secondaryLabel="お問い合わせ"
      />
    </main>
  )
}
