import { profile } from '../data'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      © {YEAR} {profile.name} · built with React + Vite
    </footer>
  )
}
