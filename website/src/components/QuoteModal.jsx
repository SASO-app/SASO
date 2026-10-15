import { useEffect, useState } from 'react'
import { useQuoteModal } from '../context/QuoteModalContext'
import FormSuccessSteps from './FormSuccessSteps'

const SERVICES = [
  'Fasadevask for boligselskap & næringsbygg',
  'Vindusvask',
  'Takbehandling',
  'Takrennerens',
  'Høytrykksvask',
  'Takfornying',
  'Parkeringsanlegg & oppstillingsplasser',
  'Vet ikke / ønsker rådgivning',
]

function encodeForm(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const INPUT = 'w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/30'

export default function QuoteModal() {
  const { isOpen, closeModal, preselectedService } = useQuoteModal()
  const [status, setStatus] = useState('idle')
  const [cityLoading, setCityLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    streetAddress: '', postalCode: '', postCity: '',
    service: '', message: '',
  })

  useEffect(() => {
    if (isOpen) {
      setStatus('idle')
      setForm((f) => ({ ...f, service: preselectedService || '' }))
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen, preselectedService])

  if (!isOpen) return null

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handlePostalCode = async (e) => {
    const code = e.target.value.replace(/\D/g, '').slice(0, 4)
    setForm((f) => ({ ...f, postalCode: code, postCity: code.length < 4 ? '' : f.postCity }))
    if (code.length === 4) {
      setCityLoading(true)
      try {
        const res = await fetch(`/.netlify/functions/postalcode?pnr=${code}`)
        const data = await res.json()
        setForm((f) => ({ ...f, postCity: data.valid ? data.city : '' }))
      } catch { /* silent fail */ }
      setCityLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const address = [form.streetAddress, `${form.postalCode} ${form.postCity}`].filter(Boolean).join(', ').trim()
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({
          'form-name': 'quote',
          name: form.name,
          phone: form.phone,
          email: form.email,
          address,
          service: form.service,
          message: form.message,
          kundetype: 'Bedrift / borettslag / sameie',
        }),
      })
      setStatus(response.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          aria-label="Lukk"
          className="absolute right-4 top-4 text-2xl leading-none text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>

        {status === 'success' ? (
          <FormSuccessSteps
            onClose={closeModal}
            note="Vi tar kontakt innen 24 timer for å avtale en gratis og uforpliktende befaring."
          />
        ) : (
          <>
            <h3 className="mb-1 text-xl font-bold text-navy sm:text-2xl">
              Få et gratis tilbud
            </h3>
            <p className="mb-5 text-sm text-gray-500">
              Fyll ut på 30 sekunder — vi kontakter deg for befaring og tydelig tilbud.
            </p>

            <form name="quote" onSubmit={handleSubmit} className="space-y-3" data-netlify="true">
              <input type="hidden" name="form-name" value="quote" />
              <p className="hidden">
                <label>Don&apos;t fill this out: <input name="bot-field" onChange={handleChange} /></label>
              </p>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Navn *</label>
                <input required name="name" value={form.name} onChange={handleChange} placeholder="Ditt navn" className={INPUT} />
              </div>

              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Telefon *</label>
                  <input required type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="123 45 678" className={INPUT} />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">E-post *</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="navn@epost.no" className={INPUT} />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Gateadresse</label>
                <input name="streetAddress" value={form.streetAddress} onChange={handleChange} placeholder="Gateveien 1" className={INPUT} />
              </div>

              <div className="flex gap-2">
                <div style={{ width: '100px' }}>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Postnr.</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    name="postalCode"
                    value={form.postalCode}
                    onChange={handlePostalCode}
                    placeholder="5000"
                    className={INPUT}
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Poststed</label>
                  <input
                    type="text"
                    name="postCity"
                    value={cityLoading ? '' : form.postCity}
                    onChange={handleChange}
                    placeholder={cityLoading ? 'Henter…' : 'Automatisk utfylt'}
                    className={INPUT + ' bg-gray-50'}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Hva trenger dere hjelp med?</label>
                <select name="service" value={form.service} onChange={handleChange} className={INPUT}>
                  <option value="">Velg tjeneste</option>
                  {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Melding (valgfritt)</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={2} placeholder="Beskriv kort hva dere ønsker hjelp med" className={INPUT} />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-2 w-full rounded-full bg-cta px-6 py-3 text-base font-bold text-white shadow-lg shadow-cta/30 transition hover:bg-cta-dark disabled:opacity-60"
              >
                {status === 'sending' ? 'Sender...' : 'Send forespørsel – helt gratis'}
              </button>

              {status === 'error' && (
                <p className="text-center text-sm text-red-600">Noe gikk galt. Ring oss heller på 555 90 555.</p>
              )}

              <p className="text-center text-xs text-gray-400">Vi bruker kun dine opplysninger til å gi deg et pristilbud.</p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
