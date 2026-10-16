import { useEffect, useState } from 'react'
import { photos } from '../data'

export default function Photography() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return
    const onKey = (e) => e.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  return (
    <section id="photography" className="section">
      <h2 className="section-title">
        <span className="num">03.</span> photography
      </h2>
      <div className="gallery">
        {photos.map((photo) => (
          <button key={photo.src} className="photo" onClick={() => setSelected(photo)}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)} role="dialog" aria-modal="true">
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={selected.src} alt={selected.alt} />
            {selected.caption && <figcaption>{selected.caption}</figcaption>}
          </figure>
          <button className="close" aria-label="Close" onClick={() => setSelected(null)}>
            ×
          </button>
        </div>
      )}
    </section>
  )
}
