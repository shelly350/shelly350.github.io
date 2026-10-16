import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Photography from './components/Photography'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Photography />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
