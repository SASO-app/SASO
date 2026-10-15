import { useState } from 'react'
import { useQuoteModal } from '../context/QuoteModalContext'
import logo from '../assets/logo/fasaderen-icon.png'

const LINKS = [
  { href: '#tjenester', label: 'Tjenester' },
  { href: '#hvorfor-oss', label: 'Hvorfor oss' },
  { href: '#teamet', label: 'Teamet' },
  { href: '#sa-fungerer-det', label: 'Slik fungerer det' },
  { href: '#omdomme', label: 'Omdømme' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const { openModal } = useQuoteModal()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#hjem" className="flex items-center gap-2">
          <img src={logo} alt="Fasaderen" className="h-9 w-auto" />
          <span className="font-display text-lg font-bold tracking-wide text-navy">FASADEREN</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+4755590555" className="text-sm font-semibold text-navy">
            555 90 555
          </a>
          <button
            onClick={() => openModal()}
            className="rounded-full bg-cta px-5 py-2 text-sm font-bold text-white shadow-md shadow-cta/30 transition hover:bg-cta-dark"
          >
            Få gratis tilbud
          </button>
        </div>

        <button
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Meny"
          onClick={() => setOpen(!open)}
        >
          <span className="block h-0.5 w-6 bg-navy" />
          <span className="block h-0.5 w-6 bg-navy" />
          <span className="block h-0.5 w-6 bg-navy" />
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-gray-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setOpen(false)
              openModal()
            }}
            className="mt-4 w-full rounded-full bg-cta px-5 py-3 text-sm font-bold text-white shadow-md shadow-cta/30"
          >
            Få gratis tilbud
          </button>
        </div>
      )}
    </header>
  )
}
