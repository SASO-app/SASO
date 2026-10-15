import { useState } from 'react'
import { useCampaignModal } from '../context/CampaignModalContext'
import FormSuccessSteps from './FormSuccessSteps'

const FORM_NAME = 'campaign-hoest-2026'

function encode(data) {
  return Object.entries(data)
    .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v))
    .join('&')
}

const INPUT = 'w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/20'
const LABEL = 'mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500'

export default function CampaignModal() {
  const { isOpen, close } = useCampaignModal()
  const [fields, setFields] = useState({ name: '', email: '', phone: '', streetAddress: '', postalCode: '', postCity: '' })
  const [status, setStatus] = useState('idle')
  const [cityLoading, setCityLoading] = useState(false)

  if (!isOpen) return null

  const set = (k) => (e) => setFields((f) => ({ ...f, [k]: e.target.value }))

  const handlePostalCode = async (e) => {
    const code = e.target.value.replace(/\D/g, '').slice(0, 4)
    setFields((f) => ({ ...f, postalCode: code, postCity: code.length < 4 ? '' : f.postCity }))
    if (code.length === 4) {
      setCityLoading(true)
      try {
        const res = await fetch(`/.netlify/functions/postalcode?pnr=${code}`)
        const data = await res.json()
        setFields((f) => ({ ...f, postCity: data.valid ? data.city : '' }))
      } catch { /* silent fail — user can type city manually */ }
      setCityLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const address = [fields.streetAddress, `${fields.postalCode} ${fields.postCity}`].filter(Boolean).join(', ').trim()
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': FORM_NAME,
          'bot-field': '',
          service: 'Takbehandling – mose, alger og sopp',
          kampanje: 'Høstkampanje 2026 -30%',
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          address,
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
          <FormSuccessSteps
            onClose={close}
            note="Tilbudet er på vei. Trenger vi befaring, ringer vi deg — ellers leverer vi pris basert på digital gjennomgang."
          />
        ) : (
          <>
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
                <label className={LABEL}>Navn</label>
                <input required type="text" value={fields.name} onChange={set('name')} placeholder="Kari Nordmann" className={INPUT} />
              </div>

              <div className="flex gap-2">
                <div className="flex-1">
                  <label className={LABEL}>E-post</label>
                  <input required type="email" value={fields.email} onChange={set('email')} placeholder="navn@epost.no" className={INPUT} />
                </div>
                <div className="flex-1">
                  <label className={LABEL}>Telefon</label>
                  <input required type="tel" value={fields.phone} onChange={set('phone')} placeholder="900 00 000" className={INPUT} />
                </div>
              </div>

              <div>
                <label className={LABEL}>Gateadresse</label>
                <input required type="text" value={fields.streetAddress} onChange={set('streetAddress')} placeholder="Gateveien 1" className={INPUT} />
              </div>

              <div className="flex gap-2">
                <div style={{ width: '110px' }}>
                  <label className={LABEL}>Postnr.</label>
                  <input
                    required
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    value={fields.postalCode}
                    onChange={handlePostalCode}
                    placeholder="5000"
                    className={INPUT}
                  />
                </div>
                <div className="flex-1">
                  <label className={LABEL}>Poststed</label>
                  <input
                    type="text"
                    value={cityLoading ? '' : fields.postCity}
                    onChange={set('postCity')}
                    placeholder={cityLoading ? 'Henter…' : 'Automatisk utfylt'}
                    className={INPUT + ' bg-gray-50'}
                  />
                </div>
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
                Ingen forpliktelse
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
