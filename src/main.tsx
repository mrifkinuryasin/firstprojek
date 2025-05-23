import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './public/css/style.css'
import Nav from './components/nav.tsx'
import Hero from './components/hero.tsx'
import Footer from './components/footer.tsx'
import About from './components/about.tsx'
import Skills from './components/skills.tsx'
import Contact from './components/contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <Hero />
    <About />
    <Skills />
    <Contact />
    <Footer />

  </StrictMode>,
)
