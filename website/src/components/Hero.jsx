import { useQuoteModal } from '../context/QuoteModalContext'

export default function Hero() {
  const { openModal } = useQuoteModal()

  return (
    <section id="hjem" className="relative overflow-hidden bg-navy text-white">
      <video
        autoPlay muted loop playsInline preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/Fasaderen%20Drone.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-navy-dark/65 to-black/60" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-10 text-center sm:py-14">
        <h1 className="max-w-2xl text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
          Fasade, tak og vinduer — profesjonelt vedlikehold for private og boligselskaper
        </h1>

        <p className="mt-3 max-w-lg text-base text-white/75 sm:text-lg">
          5.0★ på Google · HMS-godkjent · gratis befaring
        </p>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
          <button
            onClick={() => openModal()}
            className="rounded-full bg-cta px-7 py-3 text-base font-bold text-white shadow-lg shadow-cta/30 transition hover:scale-105"
          >
            Book gratis befaring →
          </button>
          <a
            href="#tjenester"
            className="text-sm font-semibold text-white/70 underline-offset-4 hover:text-white hover:underline"
          >
            Se tjenester
          </a>
        </div>
      </div>
    </section>
  )
}
