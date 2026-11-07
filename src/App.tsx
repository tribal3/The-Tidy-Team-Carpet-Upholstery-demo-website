import { useCallback, useState } from 'react'
import { About } from './components/About'
import { AnnouncementBar } from './components/AnnouncementBar'
import { ContactSection } from './components/ContactSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ResultsGallery } from './components/ResultsGallery'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { TrustStrip } from './components/TrustStrip'
import { WhyChooseUs } from './components/WhyChooseUs'

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function App() {
  const [presetService, setPresetService] = useState<string | null>(null)

  const handleQuoteClick = useCallback(() => {
    setPresetService(null)
    scrollToContact()
  }, [])

  const handleSelectService = useCallback((serviceId: string) => {
    setPresetService(serviceId)
    scrollToContact()
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[110] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <AnnouncementBar />
      <Navbar onQuoteClick={handleQuoteClick} />

      <main id="main">
        <Hero onQuoteClick={handleQuoteClick} />
        <TrustStrip />
        <About />
        <Services onSelectService={handleSelectService} onQuoteClick={handleQuoteClick} />
        <ResultsGallery />
        <WhyChooseUs onQuoteClick={handleQuoteClick} />
        <Testimonials />
        <CTASection onQuoteClick={handleQuoteClick} />
        <ContactSection presetService={presetService} />
      </main>

      <Footer />
    </>
  )
}

export default App
