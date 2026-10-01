import { useQuoteModal } from '../context/QuoteModalContext'

const STEPS = [
  {
    number: '1',
    title: 'Send forespørsel',
    description: 'Trykk på "Få gratis tilbud" og fyll ut et raskt skjema – tar under 30 sekunder.',
  },
  {
    number: '2',
    title: 'Gratis befaring',
    description: 'Vi tar kontakt og avtaler en uforpliktende vurdering av jobben, på et tidspunkt som passer deg.',
  },
  {
    number: '3',
    title: 'Skriftlig pristilbud',
    description: 'Du får et klart og tydelig pristilbud uten skjulte kostnader – du bestemmer om du vil gå videre.',
  },
  {
    number: '4',
    title: 'Vi utfører jobben',
    description: 'Vårt erfarne team gjør fasaden, taket eller uteområdet ditt skinnende rent og pent igjen.',
  },
]

export default function Process() {
  const { openModal } = useQuoteModal()

  return (
    <section id="sa-fungerer-det" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Slik fungerer det</h2>
          <p className="mt-3 text-lg text-gray-600">
            Fra forespørsel til ferdig resultat – enkelt og uten stress.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-xl font-bold text-white">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => openModal()}
            className="rounded-full bg-cta px-8 py-4 text-lg font-bold text-white shadow-xl shadow-cta/30 transition hover:scale-105 hover:bg-cta-dark"
          >
            Kom i gang – få gratis tilbud →
          </button>
        </div>
      </div>
    </section>
  )
}
