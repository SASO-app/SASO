const CLIENTS = [
  { name: 'Frydenbø Eiendom', logo: null },
  { name: 'BOB', logo: null },
  { name: 'OBOS', logo: null },
  { name: 'SASO Eiendom', logo: null },
  { name: 'Monsen Malerservice', logo: null },
  { name: 'Nylunds Malerservice', logo: null },
]

export default function ClientLogos() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-center text-lg text-gray-400 sm:text-xl">Noen av våre fornøyde bedriftskunder</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2">
          {CLIENTS.map((client, i) => {
            const col = i % 2
            const isLastDesktopRow = Math.floor(i / 2) === Math.floor((CLIENTS.length - 1) / 2)
            const hasMobileBorder = i < CLIENTS.length - 1
            const className = [
              'flex items-center justify-center px-6 py-10',
              hasMobileBorder ? 'border-b border-gray-100' : '',
              isLastDesktopRow ? 'sm:border-b-0' : 'sm:border-b sm:border-gray-100',
              col === 0 ? 'sm:border-r sm:border-gray-100' : '',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <div key={client.name} className={className}>
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-10 max-w-[160px] object-contain opacity-80"
                  />
                ) : (
                  <span className="text-xl font-semibold text-gray-500 sm:text-2xl">{client.name}</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
