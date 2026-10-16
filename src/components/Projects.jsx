import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">
        <span className="num">02.</span> projects
      </h2>
      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <div className="card-head">
              <span className="folder" aria-hidden="true">{'</>'}</span>
              <div className="card-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    code
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    demo ↗
                  </a>
                )}
              </div>
            </div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="tags small">
              {p.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
