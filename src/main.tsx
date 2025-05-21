import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './public/css/style.css'
import Nav from './components/nav.tsx'
import Hero from './components/hero.tsx'
import Footer from './components/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <Hero />
    <Footer />

  </StrictMode>,
)
