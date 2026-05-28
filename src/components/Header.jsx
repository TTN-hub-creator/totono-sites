import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { facilities } from '../data/siteData'
import totonoLabLogo from '../assets/logos/totono-lab.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-xs tracking-[0.18em] uppercase transition-colors ${
      isActive ? 'text-[#2f332f]' : 'text-[#8a8880] hover:text-[#2f332f]'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e2d5] bg-[#fbfaf6]/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <img
            src={totonoLabLogo}
            alt="Totono Lab inc."
            className="h-12 w-auto object-contain md:h-14"
          />
          <div className="hidden leading-none sm:block">
            <div className="text-[15px] font-medium uppercase tracking-[0.28em] text-[#2f332f]">
              TOTONO LAB
            </div>
            <div className="mt-1 text-[13px] tracking-wide text-[#9E7B5A]">
              inc.
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          {facilities.map((facility) => (
            <NavLink key={facility.id} to={facility.path} className={linkClass}>
              {facility.name}
            </NavLink>
          ))}
          <NavLink to="/recruit" className={linkClass}>
            Recruit
          </NavLink>
        </nav>

        <button
          type="button"
          className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="メニューを開閉する"
        >
          <span
            className="h-px w-5 origin-center bg-[#2f332f] transition-all duration-300"
            style={{ transform: open ? 'rotate(45deg) translateY(4px)' : 'none' }}
          />
          <span
            className="h-px w-5 bg-[#2f332f] transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="h-px w-5 origin-center bg-[#2f332f] transition-all duration-300"
            style={{ transform: open ? 'rotate(-45deg) translateY(-4px)' : 'none' }}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-[#e8e2d5] bg-[#fbfaf6] px-6 py-5 md:hidden">
          <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          {facilities.map((facility) => (
            <NavLink
              key={facility.id}
              to={facility.path}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {facility.name}
            </NavLink>
          ))}
          <NavLink
            to="/recruit"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Recruit
          </NavLink>
        </nav>
      )}
    </header>
  )
}
