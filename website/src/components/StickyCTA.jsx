import { useQuoteModal } from '../context/QuoteModalContext'

export default function StickyCTA() {
  const { openModal } = useQuoteModal()

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-gray-100 bg-white p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] lg:hidden">
      <button
        onClick={() => openModal()}
        className="w-full rounded-full bg-cta px-6 py-3 text-base font-bold text-white shadow-lg shadow-cta/30"
      >
        Få gratis pristilbud →
      </button>
    </div>
  )
}
