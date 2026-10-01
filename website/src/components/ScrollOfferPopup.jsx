import { useEffect, useState } from 'react'
import { useCampaignModal } from '../context/CampaignModalContext'

export default function ScrollOfferPopup() {
  const { open, isOpen: isCampaignOpen } = useCampaignModal()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('scrollOfferShown')) return

    const show = () => {
      setVisible(true)
      sessionStorage.setItem('scrollOfferShown', '1')
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }

    const onScroll = () => {
      const halfway = (document.documentElement.scrollHeight - window.innerHeight) * 0.35
      if (window.scrollY >= halfway) show()
    }

    // Show after 8 seconds OR 35% scroll — whichever comes first
    const timer = setTimeout(show, 8000)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [])

  const close = () => setVisible(false)

  if (!visible || isCampaignOpen) return null

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={close}
    >
      {/* Modal */}
      <div
        className="relative flex w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl sm:max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left — image */}
        <div className="hidden w-5/12 sm:block">
          <img
            src="/services/service-takbehandling.jpg"
            alt="Takbehandling"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right — campaign info */}
        <div className="relative flex w-full flex-col items-center justify-center bg-white p-8 text-center sm:w-7/12">
          {/* Close */}
          <button
            onClick={close}
            aria-label="Lukk"
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          >
            ✕
          </button>

          {/* Badge */}
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-700">
            🍂 Høstkampanje 2026
          </span>

          {/* Discount */}
          <div className="flex flex-col items-center leading-none">
            <span className="text-7xl font-black text-cta">30%</span>
            <span className="mt-1 text-sm font-bold uppercase tracking-widest text-gray-500">rabatt</span>
          </div>

          <p className="mt-3 text-base font-semibold text-navy">
            på takbehandling
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Beskytt taket mot fukt og frost før vinteren setter inn.
            <strong className="block text-gray-700">Tilbudet gjelder kun ut oktober.</strong>
          </p>

          <button
            onClick={() => {
              close()
              open()
            }}
            className="mt-6 w-full rounded-full bg-cta py-3 text-base font-black text-white shadow-lg shadow-cta/30 transition hover:brightness-110"
          >
            Book gratis befaring →
          </button>

          <button
            onClick={close}
            className="mt-3 text-xs text-gray-400 underline-offset-4 hover:text-gray-600 hover:underline"
          >
            Nei takk, ikke nå
          </button>
        </div>
      </div>
    </div>
  )
}
