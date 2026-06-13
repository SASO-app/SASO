import { useQuoteModal } from '../context/QuoteModalContext'
import logo from '../assets/logo/fasaderen-icon.png'

export default function Footer() {
  const { openModal } = useQuoteModal()
  const year = new Date().getFullYear()

  return (
    <footer id="kontakt" className="bg-navy-dark py-12 text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-3 sm:px-6">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <img src={logo} alt="Fasaderen" className="h-9 w-auto brightness-0 invert" />
            <span className="font-display text-lg font-bold tracking-wide text-white">FASADEREN</span>
          </div>
          <p className="text-sm">
            Sammen gjør vi byen renere og penere. Fasadevask, takvask og takrennerens i Bergen og Vestlandet.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">Kontakt</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="tel:+4741611876" className="hover:text-white">📞 416 11 876</a>
            </li>
            <li>
              <a href="mailto:post@fasaderen.no" className="hover:text-white">✉️ post@fasaderen.no</a>
            </li>
            <li>📍 Godvikveien 60, 5179 Godvik</li>
            <li>🕐 Man–Fre: 07:00–17:00 · Helg: etter avtale</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">Kom i gang</h3>
          <p className="mb-4 text-sm">
            Klar for et renere hjem? Få et gratis pristilbud i dag.
          </p>
          <button
            onClick={() => openModal()}
            className="rounded-full bg-cta px-6 py-3 text-sm font-bold text-white shadow-md shadow-cta/30 hover:bg-cta-dark"
          >
            Få gratis pristilbud
          </button>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
        © {year} Fasaderen AS. Alle rettigheter forbeholdt.
      </div>
    </footer>
  )
}
