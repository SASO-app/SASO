import { useQuoteModal } from '../context/QuoteModalContext'
import { useSegment } from '../context/SegmentContext'

const PRIVAT_SERVICES = [
  {
    icon: '🏠',
    title: 'Fasadevask (softwash)',
    short: 'fasadevask',
    description:
      'Skånsom lavtrykksvask som fjerner alger, mose og grønske fra trepanel, puss og andre fasadematerialer – uten å skade overflaten.',
    bullets: ['Resultater som varer 3-5 år', 'Trygt for treverk og maling', 'Miljøvennlige midler'],
  },
  {
    icon: '🏚️',
    title: 'Takvask & takfornying',
    short: 'takvask',
    description:
      'Vi renser taket for mose og grønske, og behandler det for å beskytte mot fukt og forlenge livet til takmaterialene.',
    bullets: ['Forebygger fukt- og moseskader', 'Forlenger takets levetid', 'Penere og tryggere bolig'],
  },
  {
    icon: '🌧️',
    title: 'Takrennerens',
    short: 'takrennerens',
    description:
      'Vi fjerner løv, kvist og rusk fra takrenner og nedløp, slik at vannet ledes bort som det skal – og du unngår fuktskader.',
    bullets: ['Forhindrer lekkasjer og fuktskader', 'Rask og effektiv jobb', 'Inkludert sjekk av feste og avløp'],
  },
  {
    icon: '🧱',
    title: 'Høytrykksvask',
    short: 'høytrykksvask',
    description:
      'Effektiv rens av belegningsstein, terrasser, murvegger og betong som tåler høyere trykk – for et ryddig og pent uteområde.',
    bullets: ['For stein, betong og murverk', 'Fjerner gørr, mose og misfarging', 'Gir et markant friskere uttrykk'],
  },
]

const BEDRIFT_SERVICES = [
  {
    icon: '🏢',
    title: 'Fasadevask for boligselskap & næringsbygg',
    short: 'fasadevask',
    description:
      'Skånsom softwash på store fasadeflater. Vi kjenner kravene som følger med store porteføljer, fra blant annet BOB, OBOS og Frydenbø.',
    bullets: ['Erfaring med store porteføljer', 'Skånsomt for alle fasadematerialer', 'Dokumentert og forsikret arbeid'],
  },
  {
    icon: '🪟',
    title: 'Vindusvask',
    short: 'vindusvask',
    description:
      'Fast eller periodisk vindusvask for fellesarealer og fasader, som del av en helhetlig vedlikeholdsavtale.',
    bullets: ['Fellesarealer og fasader', 'Fleksibel frekvens', 'Kan inngå i fast avtale'],
  },
  {
    icon: '🏚️',
    title: 'Takbehandling',
    short: 'takbehandling',
    description:
      'Vi renser og behandler tak for å forebygge fukt- og moseskader, og forlenger levetiden på takmaterialene i hele bygget.',
    bullets: ['Forebygger fukt- og moseskader', 'Forlenger takets levetid', 'Egnet for store takflater'],
  },
  {
    icon: '🚗',
    title: 'Parkeringsanlegg & oppstillingsplasser',
    short: 'parkeringsanlegg',
    description:
      'Høytrykksrens av parkeringskjellere, garasjeanlegg, gårdsplasser og oppstillingsplasser – for et ryddig og representativt uteområde.',
    bullets: ['Garasjeanlegg og p-kjellere', 'Gårdsplasser og gangveier', 'Fjerner olje, gørr og misfarging'],
  },
  {
    icon: '🧪',
    title: 'Impregnering & langsiktig vedlikehold',
    short: 'impregnering',
    description:
      'Vi er eksperter på ulike fasadeprodukter, betong og stein, og velger riktig impregnering og behandling som beskytter bygget og verdien over tid.',
    bullets: ['Riktig behandling for hvert material', 'Beskytter mot vær og forvitring', 'Kan kombineres med fast vedlikeholdsavtale'],
  },
]

const HEADER = {
  privat: {
    title: 'Våre tjenester',
    subtitle: 'Alt huset ditt trenger for å se rent, friskt og godt vedlikeholdt ut – utført av et erfarent team.',
  },
  bedrift: {
    title: 'Helhetlig utvendig vedlikehold for boligselskap & bedrift',
    subtitle:
      'Vi tar ansvar for alt utvendig – fasadevask, vindusvask, takbehandling og uteområder – så styret kan bruke tiden på andre ting.',
  },
}

export default function Services() {
  const { openModal } = useQuoteModal()
  const { segment } = useSegment()
  const services = segment === 'bedrift' ? BEDRIFT_SERVICES : PRIVAT_SERVICES
  const header = HEADER[segment]

  return (
    <section id="tjenester" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">{header.title}</h2>
          <p className="mt-3 text-lg text-gray-600">{header.subtitle}</p>
        </div>

        <div className={`mt-12 grid gap-6 sm:grid-cols-2 ${segment === 'bedrift' ? 'lg:grid-cols-3' : ''}`}>
          {services.map((service) => (
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
                Få pristilbud på {service.short}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
