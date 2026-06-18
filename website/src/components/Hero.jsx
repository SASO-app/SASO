import { useQuoteModal } from '../context/QuoteModalContext'
import { useSegment } from '../context/SegmentContext'
import SegmentToggle from './SegmentToggle'

const CONTENT = {
  privat: {
    badge: '⭐ Fasadevask & takvask i Bergen og Vestlandet',
    title: 'Gi fasaden og taket nytt liv – helt uten å skade huset',
    description:
      'Vi fjerner alger, mose og grønske med skånsom softwash som varer 3-5 ganger lenger enn vanlig høytrykksvask. Miljøvennlig, trygt og med resultater du ser med en gang.',
    primaryCta: 'Få gratis pristilbud →',
    note: 'Gratis og uforpliktende befaring · Svar innen 24 timer · Ingen skjulte kostnader',
    stats: [
      ['5.0★', '19 Google-anmeldelser'],
      ['3-5 år', 'varige resultater'],
      ['100%', 'gratis befaring'],
    ],
  },
  bedrift: {
    badge: '🏢 Foretrukket samarbeidspartner for borettslag & sameier',
    title: 'Vedlikehold av fasade og tak for boligselskaper – uten hodebry for styret',
    description:
      'Vi hjelper borettslag, sameier og næringsbygg med fasadevask, takvask og fast vedlikehold. Erfaring med store porteføljer, fast kontaktperson og full HMS-dokumentasjon.',
    primaryCta: 'Book gratis befaring for boligselskapet →',
    note: 'Erfaring med store porteføljer · Fast kontaktperson · Offentlig godkjent renholdsbedrift',
    stats: [
      ['5.0★', '19 Google-anmeldelser'],
      ['HMS', 'godkjent renholdsbedrift'],
      ['100%', 'gratis befaring'],
    ],
  },
}

export default function Hero() {
  const { openModal } = useQuoteModal()
  const { segment } = useSegment()
  const content = CONTENT[segment]

  return (
    <section id="hjem" className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-black opacity-95" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky/20 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-cta/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28">
        <SegmentToggle />

        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-sky-light">
          {content.badge}
        </span>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          {content.title}
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-white/80 sm:text-xl">{content.description}</p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            onClick={() => openModal()}
            className="rounded-full bg-cta px-8 py-4 text-lg font-bold text-white shadow-xl shadow-cta/30 transition hover:scale-105 hover:bg-cta-dark"
          >
            {content.primaryCta}
          </button>
          <a
            href="#tjenester"
            className="rounded-full border border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
          >
            Se våre tjenester
          </a>
        </div>

        <p className="mt-4 text-sm text-white/60">{content.note}</p>

        <div className="mt-12 grid w-full max-w-xl grid-cols-3 gap-4">
          {content.stats.map(([stat, label]) => (
            <div key={label}>
              <div className="text-2xl font-bold sm:text-3xl">{stat}</div>
              <div className="text-xs text-white/60 sm:text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
