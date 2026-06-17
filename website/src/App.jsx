import { QuoteModalProvider } from './context/QuoteModalContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Team from './components/Team'
import Process from './components/Process'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'
import QuoteModal from './components/QuoteModal'
import ScrollOfferPopup from './components/ScrollOfferPopup'

export default function App() {
  return (
    <QuoteModalProvider>
      <Navbar />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <Services />
        <WhyUs />
        <Team />
        <Process />
        <Gallery />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <StickyCTA />
      <ScrollOfferPopup />
      <QuoteModal />
    </QuoteModalProvider>
  )
}
