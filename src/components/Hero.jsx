import { useEffect, useState } from 'react'
import { profile, contact } from '../data'

const GREETING = 'hello, world'

export default function Hero() {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      i += 1
      setTyped(GREETING.slice(0, i))
      if (i >= GREETING.length) clearInterval(timer)
    }, 90)
    return () => clearInterval(timer)
  }, [])

  const github = contact.links.find((l) => l.label === 'GitHub')

  return (
    <section id="about" className="section hero">
      <p className="prompt">
        <span className="accent">&gt;</span> {typed}
        <span className="cursor">_</span>
      </p>
      <h1>{profile.name}</h1>
      <p className="title">{profile.title}</p>
      <p className="tagline">{profile.tagline}</p>

      <div className="buttons">
        {github && (
          <a className="btn" href={github.url} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        <a className="btn" href="#contact">
          Contact
        </a>
      </div>

      <div className="about-grid">
        <div>
          <h2 className="section-title">
            <span className="num">01.</span> about me
          </h2>
          {profile.about.map((p, i) => (
            <p key={i} className="about-text">
              {p}
            </p>
          ))}
        </div>
        <div className="skills">
          {Object.entries(profile.skills).map(([group, items]) => (
            <div key={group} className="skill-group">
              <h3>{group}</h3>
              <ul className="tags">
                {items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
