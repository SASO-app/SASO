const TESTIMONIALS = [
  {
    name: 'Kari H.',
    location: 'Fyllingsdalen',
    quote:
      'Utrolig fornøyd! Huset vårt ser nytt ut, og de var ryddige, presise og veldig profesjonelle fra start til slutt.',
  },
  {
    name: 'Ole B.',
    location: 'Askøy',
    quote:
      'Taket vårt var fullt av mose og grønske. Etter takfornying ser det ut som et helt nytt tak – sterkt anbefalt!',
  },
  {
    name: 'Marit S.',
    location: 'Godvik',
    quote:
      'Fikk gratis befaring og et tydelig pristilbud samme uke. Jobben ble gjort raskt, og resultatet holder fortsatt etter flere år.',
  },
  {
    name: 'Per A.',
    location: 'Laksevåg',
    quote:
      'Veldig bra service og god kommunikasjon. Fasaden er merkbart penere, og prisen var rimelig for kvaliteten vi fikk.',
  },
]

export default function Testimonials() {
  return (
    <section id="omdomme" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Hva kundene sier</h2>
          <p className="mt-3 text-lg text-gray-600">
            Vi er stolte av å ha hjulpet hundrevis av boligeiere på Vestlandet.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="flex flex-col rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="mb-3 text-yellow-400">★★★★★</div>
              <p className="flex-1 text-sm italic text-gray-600">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 text-sm font-bold text-navy">{t.name}</div>
              <div className="text-xs text-gray-400">{t.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
