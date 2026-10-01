import { useState } from 'react'
import { useCampaignModal } from '../context/CampaignModalContext'

const FORM_NAME = 'campaign-hoest-2026'

function encode(data) {
  return Object.entries(data)
    .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v))
    .join('&')
}

export default function CampaignModal() {
  const { isOpen, close } = useCampaignModal()
  const [fields, setFields] = useState({ name: '', phone: '', address: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  if (!isOpen) return null

  const set = (k) => (e) => setFields((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': FORM_NAME,
          'bot-field': '',
          service: 'Takbehandling – mose, alger og sopp',
          kampanje: 'Høstkampanje 2026 -30%',
          ...fields,
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Lukk"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          ✕
        </button>

        {status === 'success' ? (
          <div className="py-6 text-center">
            <div className="mb-3 text-5xl">🍂</div>
            <h3 className="text-xl font-black text-navy">Vi kontakter deg!</h3>
            <p className="mt-2 text-sm text-gray-500">
              Vi ringer deg for å avtale gratis befaring. Husk — 30&nbsp;% rabatt gjelder ut oktober.
            </p>
            <button onClick={close} className="mt-6 rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white">
              Lukk
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-5 text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-700">
                🍂 Høstkampanje 2026
              </span>
              <div className="mt-3 flex items-baseline justify-center gap-2">
                <span className="text-5xl font-black text-cta">30%</span>
                <span className="text-base font-semibold text-gray-500">rabatt</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-navy">Takbehandling — mose, alger og sopp</p>
              <p className="mt-1 text-xs text-gray-400">Tilbudet gjelder ut oktober 2026</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Navn
                </label>
                <input
                  required
                  type="text"
                  value={fields.name}
                  onChange={set('name')}
                  placeholder="Kari Nordmann"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/20"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Telefon
                </label>
                <input
                  required
                  type="tel"
                  value={fields.phone}
                  onChange={set('phone')}
                  placeholder="900 00 000"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/20"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Adresse
                </label>
                <input
                  required
                  type="text"
                  value={fields.address}
                  onChange={set('address')}
                  placeholder="Gateveien 1, 5000 Bergen"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/20"
                />
              </div>

              {status === 'error' && (
                <p className="text-center text-xs text-red-500">Noe gikk galt. Ring oss på 555 90 555.</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-2 w-full rounded-full bg-cta py-3.5 text-base font-black text-white shadow-lg shadow-cta/30 transition hover:brightness-110 disabled:opacity-60"
              >
                {status === 'sending' ? 'Sender…' : 'Bestill gratis befaring →'}
              </button>

              <p className="text-center text-xs text-gray-400">
                Ingen forpliktelse · Vi ringer deg innen 24 timer
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
