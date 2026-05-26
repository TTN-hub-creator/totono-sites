import { facilities } from '../data/siteData'
import FeatureCard from '../components/FeatureCard'
import CTASection from '../components/CTASection'
import heroExterior from '../assets/images/nest-shimada/hero-exterior.jpg'
import imgCorridor from '../assets/images/nest-shimada/corridor.jpg'
import imgWashroom from '../assets/images/nest-shimada/washroom.jpg'
import imgRoom from '../assets/images/nest-shimada/room.jpg'

const facilityPhotos = [
  { src: imgCorridor, title: '廊下', description: '清潔感と安全を両立した、ゆとりある廊下' },
  { src: imgWashroom, title: '洗面スペース', description: '使いやすさを大切にした、明るい洗面スペース' },
  { src: imgRoom, title: '居室', description: '木のぬくもりと光あふれる、プライベートな居室' },
]

const nest = facilities.find((facility) => facility.id === 'nest-shimada')

export default function NestShimada() {
  return (
    <main>
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[#6F826F]">
              Totono Nest Shimada
            </p>
            <h1 className="font-serif text-4xl font-medium leading-relaxed text-[#2f332f] md:text-5xl md:leading-relaxed">
              新しい暮らしの巣を、<br />
              島田につくる。
            </h1>
            <p className="mt-8 max-w-xl text-base leading-9 text-[#6f6b63]">
              医療とのつながりを大切に、地域とともに育む安心の住まい。
              2026年春、島田に新しい暮らしの拠点が生まれます。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="rounded-full bg-[#6F826F] px-8 py-3 text-center text-xs tracking-widest text-white">
                資料請求
              </a>
              <a href="#recruit" className="rounded-full border border-[#6F826F]/40 px-8 py-3 text-center text-xs tracking-widest text-[#6F826F]">
                採用情報
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-sm">
            <img
              src={heroExterior}
              alt="Totono Nest Shimada 外観"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-black/20" />
            <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/75 p-6 backdrop-blur">
              <p className="text-xs tracking-[0.24em] text-[#6F826F]">Totono Nest Shimada</p>
              <p className="mt-3 font-serif text-xl leading-relaxed text-[#2f332f]">
                木目と白を基調にした、新しい住まいの清潔感と温もり。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[#6F826F]">
          New Residence
        </p>
        <h2 className="mb-12 font-serif text-3xl font-medium text-[#2f332f]">
          Nest Shimadaの特徴
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {nest.features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              color={nest.color}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[#6F826F]">
          Facility
        </p>
        <h2 className="mb-12 font-serif text-3xl font-medium text-[#2f332f]">
          居室・共用設備
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

      <section id="recruit" className="bg-white/50 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-[#e8e2d5] bg-[#fbfaf6] p-8">
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[#9E7B5A]">
              Opening Story
            </p>
            <h3 className="font-serif text-2xl text-[#2f332f]">オープンまでの歩み</h3>
            <p className="mt-5 text-sm leading-8 text-[#6f6b63]">
              建物づくり、内装、スタッフ募集、地域へのご挨拶まで。
              Instagramと連動しながら、新しい暮らしの拠点ができる過程を発信していきます。
            </p>
          </div>
          <div className="rounded-3xl border border-[#e8e2d5] bg-[#fbfaf6] p-8">
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[#9E7B5A]">
              Recruit
            </p>
            <h3 className="font-serif text-2xl text-[#2f332f]">一緒につくる仲間を募集</h3>
            <p className="mt-5 text-sm leading-8 text-[#6f6b63]">
              Totono Nest Shimadaでは、オープンに向けて介護・看護・生活支援に関わる仲間を募集します。
              暮らしを整えるケアを、島田で一緒に始めましょう。
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="島田の新しい住まいについて、ご相談ください。"
        description="ご入居相談、資料請求、採用についてのお問い合わせを受け付けています。"
        primaryLabel="資料請求"
        secondaryLabel="お問い合わせ"
      />
    </main>
  )
}
