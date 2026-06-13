const POINTS = [
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

export default function WhyUs() {
  return (
    <section id="hvorfor-oss" className="bg-sky-light/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Hvorfor velge Fasaderen?</h2>
          <p className="mt-3 text-lg text-gray-600">
            Vi gjør det enkelt, trygt og forutsigbart å ta vare på hjemmet ditt.
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
