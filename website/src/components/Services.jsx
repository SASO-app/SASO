import { useQuoteModal } from '../context/QuoteModalContext'

const SERVICES = [
  {
    img: '/services/service-fasadevask.jpg',
    title: 'Fasadevask',
    short: 'fasadevask',
    description:
      'Skånsom softwash på store fasadeflater. Vi kjenner kravene som følger med store porteføljer, fra blant annet BOB, OBOS og Frydenbø.',
    bullets: ['Erfaring med store porteføljer', 'Skånsomt for alle fasadematerialer', 'Dokumentert og forsikret arbeid'],
  },
  {
    img: '/services/service-vindusvask.jpg',
    title: 'Vindusvask',
    short: 'vindusvask',
    description:
      'Fast eller periodisk vindusvask for fellesarealer og fasader, som del av en helhetlig vedlikeholdsavtale.',
    bullets: ['Fellesarealer og fasader', 'Fleksibel frekvens', 'Kan inngå i fast avtale'],
  },
  {
    img: '/services/service-takbehandling.jpg',
    title: 'Takbehandling',
    short: 'takbehandling',
    description:
      'Vi renser og behandler tak for å forebygge fukt- og moseskader, og forlenger levetiden på takmaterialene i hele bygget.',
    bullets: ['Forebygger fukt- og moseskader', 'Forlenger takets levetid', 'Egnet for store takflater'],
  },
  {
    img: null,
    title: 'Takrennerens',
    short: 'takrennerens',
    description:
      'Vi fjerner løv, kvist og rusk fra takrenner og nedløp på hele bygget, slik at vannet ledes bort som det skal – og dere unngår fukt- og lekkasjeproblemer.',
    bullets: ['Forhindrer lekkasjer og fuktskader', 'For hele bygg og boligselskap', 'Kan inngå i fast vedlikeholdsavtale'],
  },
  {
    img: '/services/service-hoytrykksvask.jpg',
    title: 'Høytrykksvask',
    short: 'høytrykksvask',
    description:
      'Effektiv høytrykksvask av utvendige flater, trappeoppganger, gårdsplasser og mer – fjerner smuss, alger og misfarging raskt.',
    bullets: ['Utvendige flater og oppganger', 'Fjerner alger og misfarging', 'Kan kombineres med annet vedlikehold'],
  },
  {
    img: '/services/service-takfornying.jpg',
    title: 'Takfornying',
    short: 'takfornying',
    description:
      'Vi fornyer og beskytter tak etter behov – enten med impregnering for langsiktig beskyttelse, eller fargelegging for et friskt og representativt utseende.',
    bullets: ['Velg mellom impregnering eller ny farge', 'Montering av mønebånd og beslag', 'Forlenger takets levetid vesentlig'],
  },
  {
    img: '/services/service-parkeringsanlegg.webp',
    title: 'Parkeringsanlegg & oppstillingsplasser',
    short: 'parkeringsanlegg',
    description:
      'Høytrykksrens av parkeringskjellere, garasjeanlegg, gårdsplasser og oppstillingsplasser – for et ryddig og representativt utområde.',
    bullets: ['Garasjeanlegg og p-kjellere', 'Gårdsplasser og gangveier', 'Fjerner olje, gørr og misfarging'],
  },
]

export default function Services() {
  const { openModal } = useQuoteModal()

  return (
    <section id="tjenester" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
            Helhetlig utvendig vedlikehold for boligselskap &amp; bedrift
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Vi tar ansvar for alt utvendig – fasadevask, vindusvask, takbehandling og utområder – så styret kan bruke tiden på andre ting.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {service.img ? (
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="h-48 w-full bg-gradient-to-br from-navy/80 via-sky/60 to-sky-light flex items-center justify-center">
                  <span className="text-5xl opacity-60">🌧️</span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
