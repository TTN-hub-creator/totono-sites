const instagramPosts = [
  {
    account: "Totono Nagi",
    image: "/instagram/nagi-001.jpg",
    caption: "やわらかな光が入る、穏やかな午後。",
    url: "https://www.instagram.com/"
  },
  {
    account: "Totono Nagi",
    image: "/instagram/nagi-002.jpg",
    caption: "あたたかく迎える、安心の入口。",
    url: "https://www.instagram.com/"
  },
  {
    account: "Totono Nagi",
    image: "/instagram/nagi-003.jpg",
    caption: "その人らしく、心地よく過ごせるお部屋へ。",
    url: "https://www.instagram.com/"
  },
  {
    account: "Totono Nest Shimada",
    image: "/instagram/shimada-001.jpg",
    caption: "静かな日差しと、整う時間。",
    url: "https://www.instagram.com/"
  },
  {
    account: "Totono Nest Shimada",
    image: "/instagram/shimada-002.jpg",
    caption: "オープンに向けて、少しずつ空間を整えています。",
    url: "https://www.instagram.com/"
  },
  {
    account: "Totono Nest Shimada",
    image: "/instagram/shimada-003.jpg",
    caption: "働く人も、自然と整う場所へ。",
    url: "https://www.instagram.com/"
  }
];

export default function InstagramSection() {
  return (
    <section className="py-20 px-6 bg-[#f7f3ec]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-sm tracking-[0.25em] text-stone-500">
            INSTAGRAM
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-serif text-stone-800">
            日々の空気を、少しずつ。
          </h2>

          <p className="mt-4 text-stone-600 leading-relaxed">
            Totono Nagi / Totono Nest Shimada の日常をお届けしています。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-square overflow-hidden bg-stone-100">
                <img
                  src={post.image}
                  alt={post.account}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4">
                <p className="text-xs tracking-[0.18em] text-stone-400">
                  {post.account}
                </p>
                <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-stone-300 px-5 py-2 text-sm text-stone-700 hover:bg-white transition"
          >
            Nagiを見る
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-stone-300 px-5 py-2 text-sm text-stone-700 hover:bg-white transition"
          >
            Shimadaを見る
          </a>
        </div>
      </div>
    </section>
  )
}
