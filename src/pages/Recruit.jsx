import { Link } from 'react-router-dom'

export default function Recruit() {
  return (
    <main className="bg-[#f7f3ea] text-[#2f332f]">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-sm tracking-[0.35em] text-[#9E7B5A]">
            RECRUIT
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-light leading-[1.35] tracking-wide md:text-6xl">
            人を整え、場を整え、
            <span className="inline-block">自分も整っていく。</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-9 text-[#5b625b] md:text-lg">
            Totonoは、介護・医療・福祉の現場に、
            洗練された温かさと心地よい時間を届けるグループです。
            私たちが求めているのは、経験や資格だけではありません。
            人や空間に丁寧に向き合い、日々の仕事を少しずつ美しく整えていく。
            そんな感性を持つ方と、これからのTotonoを一緒につくっていきたいと思っています。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#jobs"
              className="rounded-full bg-[#6f7b61] px-8 py-3 text-center text-sm text-white shadow-sm transition hover:bg-[#5d6852]"
            >
              募集職種を見る
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[#b9aa8c] bg-white/40 px-8 py-3 text-center text-sm text-[#3f453f] transition hover:bg-white/70"
            >
              見学・相談する
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm tracking-[0.3em] text-[#8a7a5c]">
              OUR MIND
            </p>
            <h2 className="text-3xl font-light leading-relaxed md:text-4xl">
              介護に、感性を。
              <br />
              福祉に、洗練を。
              <br />
              日常に、心地よさを。
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-[#5b625b]">
            <p>
              Totonoが大切にしているのは、介護や医療を、ただのサービスとして終わらせないことです。
            </p>
            <p>
              香り、光、音、空気、食。そして、そこにいる人の所作や言葉。
              日々の小さな気づかいが、利用者さまやご家族、働くスタッフの心を整えていく。
            </p>
            <p>
              私たちは、そんな“整う時間”をつくるチームでありたいと考えています。
            </p>
          </div>
        </div>
      </section>

      {/* Group strength */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#3f4938] shadow-xl">
          <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 text-white md:p-14">
              <p className="mb-5 text-sm tracking-[0.35em] text-[#d8c79f]">
                GROUP
              </p>

              <div className="mb-7 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs tracking-[0.16em] text-[#f4efe4]">
                  STABILITY
                </span>
                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs tracking-[0.16em] text-[#f4efe4]">
                  BRANDING
                </span>
                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs tracking-[0.16em] text-[#f4efe4]">
                  NEW CULTURE
                </span>
              </div>

              <h2 className="text-4xl font-light leading-[1.35] tracking-wide md:text-5xl">
                安心できる場所で、
                <br />
                新しい介護を
                <br />
                つくっていく。
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-9 text-[#f1ecdf]">
                Totonoは、医療法人・社会福祉法人・介護施設・在宅支援・地域福祉を含むグループの中で生まれたブランドです。
                地域に根ざした大きな基盤があるからこそ、空間、接遇、食、香り、言葉づかいまで、
                これからの介護・福祉を美しく整えていく挑戦ができます。
              </p>
            </div>

            <div className="relative bg-[#efe6d2] p-8 md:p-12">
              <div className="absolute right-8 top-8 hidden h-28 w-28 rounded-full border border-[#c7b78f] md:block" />
              <div className="absolute bottom-10 right-16 hidden h-12 w-12 rounded-full bg-[#d8c79f]/50 md:block" />

              <div className="relative space-y-5">
                <div className="rounded-[2rem] bg-white p-7 shadow-sm md:-rotate-2">
                  <p className="text-5xl font-light tracking-tight text-[#3f4938] md:text-6xl">
                    約500
                    <span className="ml-1 text-2xl">床</span>
                  </p>
                  <p className="mt-3 text-sm tracking-[0.18em] text-[#8a7a5c]">
                    GROUP SCALE
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#5b625b]">
                    グループ全体としての規模と安心感。
                  </p>
                </div>

                <div className="rounded-[2rem] bg-[#fffaf0] p-7 shadow-sm md:translate-x-6 md:rotate-1">
                  <p className="text-3xl font-light text-[#3f4938] md:text-4xl">
                    医療・介護・福祉
                  </p>
                  <p className="mt-3 text-sm tracking-[0.18em] text-[#8a7a5c]">
                    CROSS FIELD
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#5b625b]">
                    ひとつの現場だけでなく、地域全体を支える事業体。
                  </p>
                </div>

                <div className="rounded-[2rem] bg-[#f8f3e8] p-7 shadow-sm md:-translate-x-4 md:-rotate-1">
                  <p className="text-3xl font-light text-[#3f4938] md:text-4xl">
                    静岡密着
                  </p>
                  <p className="mt-3 text-sm tracking-[0.18em] text-[#8a7a5c]">
                    LOCAL ROOTS
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#5b625b]">
                    この街で、長く安心して働きながら成長できる環境。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* People */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm tracking-[0.3em] text-[#8a7a5c]">
            WHO WE WORK WITH
          </p>
          <h2 className="text-3xl font-light">私たちが一緒に働きたい人</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5b625b]">
            完璧なスキルよりも、人や場に向き合う感性を大切にしています。
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              '人の小さな変化に気づける人',
              '空間や雰囲気を大切にできる人',
              '言葉づかいや所作を丁寧にしたい人',
              '新しい介護・福祉の形に関心がある人',
              'チームで文化を育てることを楽しめる人',
              '自分自身も成長し、整っていきたい人',
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#ded6c5] bg-white/40 p-6 text-[#3f453f]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm tracking-[0.3em] text-[#8a7a5c]">
            WORKPLACE
          </p>
          <h2 className="text-3xl font-light">働く場所</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                name: 'Totono Nagi',
                type: '介護付き有料老人ホーム',
                address: '静岡市駿河区中野新田312',
              },
              {
                name: 'Totono Nest Shimada',
                type: '新しく立ち上がる住まい・ケアの拠点',
                address: '島田市道悦5丁目1-156',
              },
              {
                name: 'サンライズ大浜',
                type: '介護老人保健施設',
                address: '静岡市駿河区西島528',
              },
              {
                name: 'Totono本部',
                type: 'ブランド・運営・企画部門',
                address: '静岡市駿河区中村町12-3',
              },
            ].map((place) => (
              <div key={place.name} className="rounded-[2rem] bg-white/60 p-7 shadow-sm">
                <h3 className="text-2xl font-light">{place.name}</h3>
                <p className="mt-3 text-sm text-[#8a7a5c]">{place.type}</p>
                <p className="mt-4 text-sm text-[#5b625b]">{place.address}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] bg-[#ece4d3] p-8">
            <h3 className="text-2xl font-light">募集職種</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                '介護職',
                '看護職',
                'リハビリ職',
                'ケアマネジャー',
                '生活相談員',
                '管理栄養士・調理',
                '事務・運営サポート',
                'ブランド・広報・企画',
              ].map((job) => (
                <span
                  key={job}
                  className="rounded-full bg-white/70 px-5 py-2 text-sm text-[#3f453f]"
                >
                  {job}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] bg-[#2f332f] p-8 text-white md:p-12">
            <p className="mb-3 text-sm tracking-[0.3em] text-[#d6c7a8]">
              CULTURE
            </p>
            <h2 className="text-3xl font-light leading-relaxed">
              ここには、まだ完成していない面白さがあります。
            </h2>
            <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-[#eee9dd]">
              <p>
                Totonoは、完成されたブランドではありません。
              </p>
              <p>
                これから施設名が変わり、空間が変わり、サービスのあり方も、働く文化も少しずつ整えていきます。
              </p>
              <p>
                だからこそ、ただ決められた仕事をこなすだけではなく、
                「もっと心地よくできないか」「もっと伝わる言葉はないか」「もっと良い場にできないか」を一緒に考えられる人に来てほしいと思っています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm tracking-[0.3em] text-[#8a7a5c]">
            ENTRY / VISIT
          </p>
          <h2 className="text-3xl font-light leading-relaxed">
            まずは、見学や相談からでも大丈夫です。
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5b625b]">
            求人票だけでは伝わらない空気があります。
            施設の雰囲気、スタッフの表情、利用者さまとの距離感。
            Totonoが大切にしている“整う”という感覚を、ぜひ一度見に来てください。
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-[#2f332f] px-10 py-3 text-sm text-white transition hover:opacity-90"
            >
              採用について問い合わせる
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
