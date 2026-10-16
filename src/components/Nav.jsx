import { useEffect, useState } from 'react'
import { profile } from '../data'

const SECTIONS = ['about', 'projects', 'photography', 'contact']

export default function Nav() {
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#about" className="logo" onClick={() => setOpen(false)}>
          ~/{profile.handle}
        </a>
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '×' : '≡'}
        </button>
        <nav className={open ? 'links open' : 'links'}>
          {SECTIONS.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              <span className="num">0{i + 1}.</span>
              {id}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
