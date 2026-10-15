import { useSegment } from '../context/SegmentContext'

const OPTIONS = [
  { value: 'privat', label: 'Privatperson' },
  { value: 'bedrift', label: 'Borettslag, sameie & bedrift' },
]

export default function SegmentToggle() {
  const { segment, setSegment } = useSegment()

  return (
    <div className="mb-6 inline-flex rounded-full bg-white/10 p-1">
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setSegment(opt.value)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            segment === opt.value
              ? 'bg-white text-navy shadow'
              : 'text-white/70 hover:text-white'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
