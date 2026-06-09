import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductsSection from './components/ProductsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className="background"></div>
      <Header />
      <HeroSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
