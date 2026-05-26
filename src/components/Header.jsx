import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { facilities } from '../data/siteData'

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-xs tracking-[0.18em] uppercase transition-colors ${
      isActive ? 'text-[#2f332f]' : 'text-[#8a8880] hover:text-[#2f332f]'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e2d5] bg-[#fbfaf6]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#2f332f]">
            Totono Lab
          </span>
          <span className="text-[10px] tracking-wider text-[#9E7B5A]">inc.</span>
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
        </nav>
      )}
    </header>
  )
}
