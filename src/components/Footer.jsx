import { Link, NavLink } from 'react-router-dom'
import { site, facilities } from '../data/siteData'

export default function Footer() {
  const linkClass =
    'text-xs tracking-[0.18em] uppercase text-[#8a8880] transition-colors hover:text-[#2f332f]'

  return (
    <footer className="border-t border-[#e8e2d5] bg-[#fbfaf6]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link to="/" className="flex flex-col leading-tight">
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#2f332f]">
                Totono Lab
              </span>
              <span className="text-[10px] tracking-wider text-[#9E7B5A]">inc.</span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-[#8a8880]">{site.description}</p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c0b9ac]">
              Facilities
            </span>
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            {facilities.map((facility) => (
              <NavLink key={facility.id} to={facility.path} className={linkClass}>
                {facility.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c0b9ac]">
              Contact
            </span>
            <a href={`tel:${site.tel}`} className={linkClass}>
              {site.tel}
            </a>
            <a href={`mailto:${site.email}`} className="text-xs text-[#8a8880] hover:text-[#2f332f]">
              {site.email}
            </a>
          </div>
        </div>

        <p className="mt-12 text-[10px] tracking-widest text-[#c0b9ac]">
          © {new Date().getFullYear()} Totono Lab inc.
        </p>
      </div>
    </footer>
  )
}
