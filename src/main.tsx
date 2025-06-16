import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './public/css/style.css'
import Hero from './components/hero.tsx'
import Footer from './components/footer.tsx'
import About from './components/about.tsx'
import Skills from './components/skills.tsx'
import Contact from './components/contact.tsx'
import Portofolio from './components/portofolio.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hero />
    <About />
    <Skills />
    <Portofolio/>
    <Contact />
    <Footer />

  </StrictMode>,
)
