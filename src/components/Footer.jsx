import { Link, NavLink } from 'react-router-dom'
import { site, facilities } from '../data/siteData'
import { COMPANY_INFO, FACILITIES_INFO } from '../config/company'

export default function Footer() {
  const navLinkClass =
    'text-xs tracking-[0.18em] uppercase text-[#8a8880] transition-colors hover:text-[#2f332f]'

  const telHref = (phone) => `tel:${phone.replace(/-/g, '')}`

  return (
    <footer className="border-t border-[#e8e2d5] bg-[#fbfaf6]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-baseline gap-2">
              <span className="text-sm font-semibold tracking-[0.22em] text-[#2f332f]">
                {COMPANY_INFO.groupName}
              </span>
              <span className="text-[10px] tracking-wider text-[#9E7B5A]">inc.</span>
            </Link>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#8a8880]">
              {site.description}
            </p>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#8a8880]">
              見学予約・入居相談・採用に関するお問い合わせは、
              {COMPANY_INFO.operatingOfficeName}にて受け付けています。
              ご希望の施設やご相談内容を確認のうえ、担当者よりご連絡いたします。
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-[#2f332f] px-5 py-3 text-xs font-medium tracking-[0.18em] text-[#2f332f] transition-colors hover:bg-[#2f332f] hover:text-white"
            >
              お問い合わせ・見学予約フォーム
            </Link>
          </div>

          <nav className="flex flex-col gap-3 lg:items-end">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c0b9ac]">
              Pages
            </span>
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            {facilities.map((facility) => (
              <NavLink key={facility.id} to={facility.path} className={navLinkClass}>
                {facility.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="mt-12 grid gap-8 border-t border-[#e8e2d5] pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c0b9ac]">
              Operating Office
            </span>
            <p className="text-sm font-medium text-[#2f332f]">
              {COMPANY_INFO.operatingOfficeName}
            </p>
            <p className="text-xs leading-6 text-[#8a8880]">
              {COMPANY_INFO.address}
            </p>
            <a
              href={telHref(COMPANY_INFO.phone)}
              className="text-xs tracking-wide text-[#8a8880] transition-colors hover:text-[#2f332f]"
            >
              {COMPANY_INFO.phone}
            </a>
          </div>

          {FACILITIES_INFO.map((facility) => (
            <div key={facility.id} className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#c0b9ac]">
                Facility
              </span>
              <p className="text-sm font-medium text-[#2f332f]">{facility.name}</p>
              <p className="text-xs leading-6 text-[#8a8880]">{facility.address}</p>
              <a
                href={telHref(facility.phone)}
                className="text-xs tracking-wide text-[#8a8880] transition-colors hover:text-[#2f332f]"
              >
                {facility.phone}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[10px] tracking-widest text-[#c0b9ac]">
          © {new Date().getFullYear()} {COMPANY_INFO.companyName}
        </p>
      </div>
    </footer>
  )
}
