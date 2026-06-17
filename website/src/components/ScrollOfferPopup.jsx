import { useEffect, useState } from 'react'
import { useQuoteModal } from '../context/QuoteModalContext'

export default function ScrollOfferPopup() {
  const { openModal, isOpen: isQuoteModalOpen } = useQuoteModal()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('scrollOfferShown')) return

    const handleScroll = () => {
      const halfway = (document.documentElement.scrollHeight - window.innerHeight) / 2
      if (window.scrollY >= halfway) {
        setVisible(true)
        sessionStorage.setItem('scrollOfferShown', '1')
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible || isQuoteModalOpen) return null

  return (
    <div className="animate-slide-up fixed bottom-24 left-4 right-4 z-40 mx-auto max-w-sm rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-black/10 sm:bottom-6 sm:left-auto sm:right-6">
      <button
        onClick={() => setVisible(false)}
        aria-label="Lukk"
        className="absolute right-3 top-3 text-xl leading-none text-gray-400 hover:text-gray-600"
      >
        &times;
      </button>
      <div className="mb-2 text-2xl">🏡</div>
      <h3 className="mb-1 text-base font-bold text-navy">Nysgjerrig på prisen?</h3>
      <p className="mb-4 text-sm text-gray-600">
        Få en gratis og uforpliktende befaring, og et tydelig pristilbud samme uke.
      </p>
      <button
        onClick={() => {
          setVisible(false)
          openModal()
        }}
        className="w-full rounded-full bg-cta px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-cta/30 transition hover:bg-cta-dark"
      >
        Få gratis befaring →
      </button>
    </div>
  )
}
