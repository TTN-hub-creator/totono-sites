import { useEffect } from 'react'

export default function InstagramOfficialEmbed() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]')

    if (!existingScript) {
      const script = document.createElement('script')
      script.src = '//www.instagram.com/embed.js'
      script.async = true
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process()
        }
      }
      document.body.appendChild(script)
    } else if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <section className="py-20 px-6 bg-[#f7f3ec]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-sm tracking-[0.25em] text-stone-500">
            OFFICIAL INSTAGRAM
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-serif text-stone-800">
            Instagram
          </h2>

          <p className="mt-4 text-stone-600 leading-relaxed">
            Totono Nagi / Totono Nest Shimada の日々の様子をInstagramでもお届けしています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-items-center">
          <div className="w-full max-w-md">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/totononagi/"
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '16px',
                boxShadow: '0 1px 8px rgba(0,0,0,0.08)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: '100%'
              }}
            />
          </div>

          <div className="w-full max-w-md">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/totononest.shimada/"
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '16px',
                boxShadow: '0 1px 8px rgba(0,0,0,0.08)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: '100%'
              }}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="https://www.instagram.com/totononagi/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-stone-300 px-5 py-2 text-sm text-stone-700 hover:bg-white transition"
          >
            Nagiを見る
          </a>

          <a
            href="https://www.instagram.com/totononest.shimada/"
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
