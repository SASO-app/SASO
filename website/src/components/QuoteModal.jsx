import { useEffect, useState } from 'react'
import { useQuoteModal } from '../context/QuoteModalContext'
import { useSegment } from '../context/SegmentContext'

const PRIVAT_SERVICES = [
  'Fasadevask (softwash)',
  'Takvask & takfornying',
  'Takrennerens',
  'Høytrykksvask',
  'Vet ikke / ønsker rådgivning',
]

const BEDRIFT_SERVICES = [
  'Fasadevask for boligselskap & næringsbygg',
  'Vindusvask',
  'Takbehandling',
  'Parkeringsanlegg & oppstillingsplasser',
  'Impregnering & langsiktig vedlikehold',
  'Vet ikke / ønsker rådgivning',
]

function encodeForm(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export default function QuoteModal() {
  const { isOpen, closeModal, preselectedService } = useQuoteModal()
  const { isBedrift } = useSegment()
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    message: '',
  })

  useEffect(() => {
    if (isOpen) {
      setStatus('idle')
      setForm((f) => ({ ...f, service: preselectedService || '' }))
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, preselectedService])

  if (!isOpen) return null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({
          'form-name': 'quote',
          ...form,
          kundetype: isBedrift ? 'Bedrift / borettslag / sameie' : 'Privatperson',
        }),
      })
      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
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
          <div className="py-6 text-center">
            <div className="mb-3 text-4xl">✅</div>
            <h3 className="mb-2 text-xl font-bold text-navy">Takk for din forespørsel!</h3>
            <p className="text-gray-600">
              Vi tar kontakt innen 24 timer for å avtale en gratis og uforpliktende befaring.
            </p>
            <button
              onClick={closeModal}
              className="mt-6 rounded-full bg-navy px-6 py-2 font-semibold text-white hover:bg-navy-dark"
            >
              Lukk
            </button>
          </div>
        ) : (
          <>
            <h3 className="mb-1 text-xl font-bold text-navy sm:text-2xl">
              {isBedrift ? 'Få et gratis tilbud for boligselskapet' : 'Få et gratis pristilbud'}
            </h3>
            <p className="mb-5 text-sm text-gray-500">
              {isBedrift
                ? 'Fyll ut på 30 sekunder, og vi tar kontakt for en uformell befaring og et tydelig tilbud til styret.'
                : 'Fyll ut på 30 sekunder. Ingen forpliktelser – vi tar kontakt for en uformell befaring.'}
            </p>

            <form
              name="quote"
              onSubmit={handleSubmit}
              className="space-y-3"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="quote" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" onChange={handleChange} />
                </label>
              </p>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Navn *</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
                  placeholder="Ditt navn"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Telefon *</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
                    placeholder="123 45 678"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">E-post</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
                    placeholder="navn@epost.no"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Adresse / sted</label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
                  placeholder="Gateadresse, postnummer"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Hva trenger du hjelp med?</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
                >
                  <option value="">Velg tjeneste</option>
                  {(isBedrift ? BEDRIFT_SERVICES : PRIVAT_SERVICES).map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Melding (valgfritt)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={2}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
                  placeholder="Beskriv kort hva du ønsker hjelp med"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-2 w-full rounded-full bg-cta px-6 py-3 text-base font-bold text-white shadow-lg shadow-cta/30 transition hover:bg-cta-dark disabled:opacity-60"
              >
                {status === 'sending' ? 'Sender...' : 'Send forespørsel – helt gratis'}
              </button>

              {status === 'error' && (
                <p className="text-center text-sm text-red-600">
                  Noe gikk galt. Ring oss heller på +47 555 90 555.
                </p>
              )}

              <p className="text-center text-xs text-gray-400">
                Vi bruker kun dine opplysninger til å gi deg et pristilbud.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
