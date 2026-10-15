const STEPS = [
  { label: 'Forespørsel mottatt', sub: 'GJORT',  state: 'done' },
  { label: 'Gratis befaring',     sub: 'NESTE',  state: 'next' },
  { label: 'Skriftlig tilbud',    sub: null,     state: 'upcoming' },
  { label: 'Vi utfører jobben',   sub: null,     state: 'upcoming' },
]

export default function FormSuccessSteps({ onClose, note }) {
  return (
    <div className="py-2 text-center">
      <h3 className="text-lg font-black text-navy">Hva skjer nå?</h3>
      {note && <p className="mt-1 text-sm text-gray-500">{note}</p>}

      {/* Step row */}
      <div className="relative mt-7 mb-2 flex justify-between px-2">
        {/* connecting line behind circles */}
        <div className="absolute left-[12.5%] right-[12.5%] top-5 h-0.5 bg-gray-200" />

        {STEPS.map(({ label, sub, state }, i) => (
          <div key={i} className="relative z-10 flex w-1/4 flex-col items-center gap-1.5">
            <div className={[
              'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold',
              state === 'done'     ? 'bg-[#4caf50] text-white shadow-sm'                        : '',
              state === 'next'     ? 'border-2 border-sky bg-white text-sky'                    : '',
              state === 'upcoming' ? 'border-2 border-gray-200 bg-white text-gray-300'          : '',
            ].join(' ')}>
              {state === 'done' ? '✓' : i + 1}
            </div>
            <p className={[
              'text-center text-xs font-semibold leading-tight',
              state === 'done'     ? 'text-gray-700' : '',
              state === 'next'     ? 'text-navy'     : '',
              state === 'upcoming' ? 'text-gray-400' : '',
            ].join(' ')}>
              {label}
            </p>
            {sub && (
              <p className={`text-xs font-bold ${state === 'done' ? 'text-[#4caf50]' : 'text-sky'}`}>
                {sub}
              </p>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={onClose}
        className="mt-6 rounded-full bg-navy px-7 py-2.5 text-sm font-bold text-white hover:bg-navy/90"
      >
        Lukk
      </button>
    </div>
  )
}
