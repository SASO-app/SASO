import { useQuoteModal } from '../context/QuoteModalContext'

const SERVICES = [
  {
    icon: '🏠',
    title: 'Fasadevask (softwash)',
    description:
      'Skånsom lavtrykksvask som fjerner alger, mose og grønske fra trepanel, puss og andre fasadematerialer – uten å skade overflaten.',
    bullets: ['Resultater som varer 3-5 år', 'Trygt for treverk og maling', 'Miljøvennlige midler'],
  },
  {
    icon: '🏚️',
    title: 'Takvask & takfornying',
    description:
      'Vi renser taket for mose og grønske, og behandler det for å beskytte mot fukt og forlenge livet til takmaterialene.',
    bullets: ['Forebygger fukt- og moseskader', 'Forlenger takets levetid', 'Penere og tryggere bolig'],
  },
  {
    icon: '🌧️',
    title: 'Takrennerens',
    description:
      'Vi fjerner løv, kvist og rusk fra takrenner og nedløp, slik at vannet ledes bort som det skal – og du unngår fuktskader.',
    bullets: ['Forhindrer lekkasjer og fuktskader', 'Rask og effektiv jobb', 'Inkludert sjekk av feste og avløp'],
  },
  {
    icon: '🧱',
    title: 'Høytrykksvask',
    description:
      'Effektiv rens av belegningsstein, terrasser, murvegger og betong som tåler høyere trykk – for et ryddig og pent uteområde.',
    bullets: ['For stein, betong og murverk', 'Fjerner gørr, mose og misfarging', 'Gir et markant friskere uttrykk'],
  },
]

export default function Services() {
  const { openModal } = useQuoteModal()

  return (
    <section id="tjenester" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Våre tjenester</h2>
          <p className="mt-3 text-lg text-gray-600">
            Alt huset ditt trenger for å se rent, friskt og godt vedlikeholdt ut – utført av et erfarent team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-gray-100 bg-sky-light/40 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-2xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy">{service.title}</h3>
              <p className="mt-2 flex-1 text-gray-600">{service.description}</p>
              <ul className="mt-4 space-y-1.5">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-0.5 text-sky">✔</span> {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openModal(service.title)}
                className="mt-6 self-start rounded-full border-2 border-navy px-5 py-2 text-sm font-bold text-navy transition hover:bg-navy hover:text-white"
              >
                Få pristilbud på {service.title.split(' ')[0].toLowerCase()}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
