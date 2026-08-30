import { useQuoteModal } from '../context/QuoteModalContext'

const STATS = [
  ['5.0★', '19 Google-anmeldelser'],
  ['HMS', 'godkjent renholdsbedrift'],
  ['100%', 'gratis befaring'],
]

export default function Hero() {
  const { openModal } = useQuoteModal()

  return (
    <section id="hjem" className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-black opacity-95" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky/20 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-cta/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-sky-light">
          🏢 Foretrukket samarbeidspartner for borettslag &amp; sameier
        </span>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Vedlikehold av fasade og tak for boligselskaper – uten hodebry for styret
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-white/80 sm:text-xl">
          Vi hjelper borettslag, sameier og næringsbygg med fasadevask, takvask og fast vedlikehold.
          Erfaring med store porteføljer, fast kontaktperson og full HMS-dokumentasjon.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            onClick={() => openModal()}
            className="rounded-full bg-cta px-8 py-4 text-lg font-bold text-white shadow-xl shadow-cta/30 transition hover:scale-105 hover:bg-cta-dark"
          >
            Book gratis befaring for boligselskapet →
          </button>
          <a
            href="#tjenester"
            className="rounded-full border border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
          >
            Se våre tjenester
          </a>
        </div>

        <p className="mt-4 text-sm text-white/60">
          Erfaring med store porteføljer · Fast kontaktperson · Offentlig godkjent renholdsbedrift
        </p>

        <div className="mt-12 grid w-full max-w-xl grid-cols-3 gap-4">
          {STATS.map(([stat, label]) => (
            <div key={label}>
              <div className="text-2xl font-bold sm:text-3xl">{stat}</div>
              <div className="text-xs text-white/60 sm:text-sm">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 w-full max-w-xl border-t border-white/10 pt-6">
          <p className="text-xs uppercase tracking-wide text-white/50">Erfaring fra blant annet</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-lg font-bold text-white/80">
            <span>BOB</span>
            <span>OBOS</span>
            <span>Frydenbø</span>
          </div>
        </div>
      </div>
    </section>
  )
}
