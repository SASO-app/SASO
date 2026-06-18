import { useSegment } from '../context/SegmentContext'

const PRIVAT_POINTS = [
  {
    icon: '🌿',
    title: 'Miljøvennlige metoder',
    description:
      'Vi bruker biologisk nedbrytbare midler og skånsom softwash-teknikk som er trygg for deg, familien og naturen rundt huset.',
  },
  {
    icon: '⏳',
    title: 'Resultater som varer',
    description:
      'Riktig metode og behandling gjør at fasaden og taket forblir rent 3-5 ganger lenger enn med vanlig høytrykksvask.',
  },
  {
    icon: '📋',
    title: 'Gratis befaring og pristilbud',
    description:
      'Vi kommer på en uforpliktende vurdering, og du får et tydelig pristilbud før vi setter i gang – ingen overraskelser.',
  },
  {
    icon: '🛡️',
    title: 'Forsikret og kvalitetssikret',
    description:
      'Vi er forsikret og jobber etter faste rutiner for sikkerhet og kvalitet – trygt for oss og din bolig, hver gang.',
  },
  {
    icon: '🏡',
    title: 'Forlenger byggets levetid',
    description:
      'Regelmessig vask og vedlikehold forebygger fukt-, mose- og algeskader som over tid kan koste mye mer å reparere.',
  },
  {
    icon: '⭐',
    title: '5.0 på Google',
    description:
      'Vi har allerede 19 femstjernede anmeldelser fra fornøyde boligeiere i Bergen og omegn.',
  },
]

const BEDRIFT_POINTS = [
  {
    icon: '🤝',
    title: 'Én leverandør for alt utvendig',
    description:
      'Fasadevask, vindusvask, takbehandling og parkeringsanlegg – styret slipper å koordinere flere leverandører.',
  },
  {
    icon: '🏢',
    title: 'Erfaring fra store aktører',
    description:
      'Vi har levert til blant annet BOB, OBOS og Frydenbø, og kjenner kravene som følger med store porteføljer.',
  },
  {
    icon: '🔄',
    title: 'Fast vedlikeholdsavtale',
    description:
      'Forutsigbare avtaler og faste rutiner gir budsjettsikkerhet og et bygg som aldri forfaller.',
  },
  {
    icon: '🧪',
    title: 'Eksperter på materialer & impregnering',
    description:
      'Vi kjenner ulike fasadeprodukter, betong og stein, og velger riktig behandling for å maksimere livstiden.',
  },
  {
    icon: '🛡️',
    title: 'Forsikret, HMS og dokumentasjon',
    description:
      'Godkjent renholdsbedrift med dokumentasjon styret kan legge frem for generalforsamlingen.',
  },
  {
    icon: '👤',
    title: 'Fast kontaktperson',
    description:
      'Én person å forholde seg til, som kjenner bygget og historikken – ikke ny kontakt hver gang.',
  },
]

const HEADER = {
  privat: {
    title: 'Hvorfor velge Fasaderen?',
    subtitle: 'Vi gjør det enkelt, trygt og forutsigbart å ta vare på hjemmet ditt.',
  },
  bedrift: {
    title: 'Hvorfor velge Fasaderen for boligselskapet?',
    subtitle: 'Vi gjør det enkelt, forutsigbart og friksjonsfritt å ta vare på bygget – år etter år.',
  },
}

export default function WhyUs() {
  const { segment } = useSegment()
  const points = segment === 'bedrift' ? BEDRIFT_POINTS : PRIVAT_POINTS
  const header = HEADER[segment]

  return (
    <section id="hvorfor-oss" className="bg-sky-light/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">{header.title}</h2>
          <p className="mt-3 text-lg text-gray-600">{header.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-3 text-3xl">{point.icon}</div>
              <h3 className="text-lg font-bold text-navy">{point.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
