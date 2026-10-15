const POINTS = [
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

export default function WhyUs() {
  return (
    <section id="hvorfor-oss" className="bg-sky-light/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
            Hvorfor velge Fasaderen for boligselskapet?
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Vi gjør det enkelt, forutsigbart og friksjonsfritt å ta vare på bygget – år etter år.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((point) => (
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
