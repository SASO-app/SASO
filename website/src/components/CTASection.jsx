import { useQuoteModal } from '../context/QuoteModalContext'
import { useSegment } from '../context/SegmentContext'

const CONTENT = {
  privat: {
    title: 'Klar for et renere og penere hjem?',
    description:
      'Få en gratis og uforpliktende befaring, og motta et tydelig pristilbud – uten skjulte kostnader.',
    cta: 'Få gratis pristilbud →',
  },
  bedrift: {
    title: 'Klar for et boligselskap uten vedlikeholdsbekymringer?',
    description:
      'Få en gratis og uforpliktende befaring av fasade og tak, og et tydelig tilbud for styret – med mulighet for fast vedlikeholdsavtale.',
    cta: 'Book gratis befaring for boligselskapet →',
  },
}

export default function CTASection() {
  const { openModal } = useQuoteModal()
  const { segment } = useSegment()
  const content = CONTENT[segment]

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cta/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold sm:text-4xl">{content.title}</h2>
        <p className="mt-4 text-lg text-white/80">{content.description}</p>
        <button
          onClick={() => openModal()}
          className="mt-8 rounded-full bg-cta px-10 py-4 text-lg font-bold text-white shadow-xl shadow-cta/30 transition hover:scale-105 hover:bg-cta-dark"
        >
          {content.cta}
        </button>
        <p className="mt-3 text-sm text-white/60">Vi svarer normalt innen 24 timer</p>
      </div>
    </section>
  )
}
