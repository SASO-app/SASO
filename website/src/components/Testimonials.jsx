const TESTIMONIALS = [
  {
    name: 'Marita Morlandstø',
    initial: 'M',
    color: 'bg-pink-400',
    quote:
      'Fantastisk flinke og hyggelige folk! Rask svar på henvendelse, gjorde jobben prikkfritt, og til god pris. Anbefales på det sterkeste.',
  },
  {
    name: 'Alexander Stadheim',
    initial: 'A',
    color: 'bg-sky',
    quote:
      'Kjempebra resultat! De er virkelig på tilbudssiden og leverer en kjempe service. Fikk også tips og råd om hvordan man tar godt vare på taket sitt – veldig lærerik prosess!',
  },
  {
    name: 'Kjell-Frode Sivertsen',
    initial: 'K',
    color: 'bg-green-500',
    quote:
      'Fantastisk bra! Bestilte mosefjerning på tak, og leveransen ble langt bedre enn forventet. Etter behandling av taket tok de en full fasadevask av huset – alt gjort veldig nøye og profesjonelt.',
  },
  {
    name: 'Nina Elisabeth Skår',
    initial: 'N',
    color: 'bg-purple-500',
    quote:
      'Har fått utført takrens og fasadevask. Kjempefornøyd, og anbefales på det sterkeste – huset mitt ser nymalt ut.',
  },
]

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=Fasaderen+AS&hl=no'

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 5.1 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.7-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 7.1 29.5 5 24 5c-7.7 0-14.3 4.4-17.7 10.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 43c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 34.4 26.7 35 24 35c-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C9.6 38.4 16.2 43 24 43z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C40.9 36 44 30.5 44 24c0-1.4-.1-2.7-.4-3.5z"
      />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section id="omdomme" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Hva kundene sier</h2>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-sky-light px-4 py-1.5 text-sm font-semibold text-navy">
            <span className="text-yellow-400">★★★★★</span>
            5.0 av 5 – 19 anmeldelser på Google
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${t.color}`}
                >
                  {t.initial}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-navy">{t.name}</div>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span className="text-yellow-400 text-xs">★★★★★</span>
                    <GoogleIcon />
                  </div>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm text-gray-600">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-navy transition hover:bg-sky-light"
          >
            <GoogleIcon />
            Se alle anmeldelser på Google
          </a>
        </div>
      </div>
    </section>
  )
}
