import { contact } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">
        <span className="num">04.</span> contact
      </h2>
      <p className="contact-blurb">{contact.blurb}</p>
      <a className="btn primary" href={`mailto:${contact.email}`}>
        Say hello
      </a>
      <ul className="social">
        {contact.links.map((l) => (
          <li key={l.label}>
            <a href={l.url} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
