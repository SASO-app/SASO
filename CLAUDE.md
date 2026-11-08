# Fasaderen AS – prosjektdokumentasjon for Claude

## Repo-struktur

- `website/` – React/Vite/Tailwind CSS v4-nettside, deployet på fasaderen.no via Netlify
- `website/src/` – komponenter, kontekster og sider
- `website/public/` – statiske filer (bilder, video, favicon)
- `website/netlify/functions/` – Netlify serverless-funksjoner

## Kobling til Fasaderen CRM

Alle skjemaer på fasaderen.no sender til Google Apps Script-basert CRM og til Netlify Forms (overgangsperiode).

### Endepunkt

```
POST https://script.google.com/macros/s/AKfycbzRKZc8b2A_aMYwIO0xKRkkHODm4ZNXG-9D6-0nvUYPn_CtC1gzkhJ8gFA_azfHhrKi/exec
Content-Type: text/plain;charset=utf-8   ← VIKTIG: ikke application/json (utløser CORS-preflight)
Body: JSON.stringify(payload)
```

Svar: `{"ok":true}` ved suksess, `{"ok":false,"feil":"<norsk feilmelding>"}` ved valideringsfeil.

### Felter

| Felt | Påkrevd | Merknad |
|---|---|---|
| `skjema` | ja | `quote`, `kampanje` eller `befaring` |
| `navn` | ja | Minst 2 tegn |
| `telefon` | ja, eller `epost` | |
| `epost` | ja, eller `telefon` | |
| `adresse` | nei | Gate, postnr. og sted i ett felt |
| `tjeneste` | nei | Array med tekster |
| `kundetype` | nei | F.eks. «Privat» eller «Bedrift / borettslag / sameie» |
| `melding` | nei | Fritekst, maks 2000 tegn |
| `side` | nei | `window.location.href` |
| `nettside` | – | Robotfelt – skal alltid være tom streng |

### Innsendingslogikk (alle skjemaer)

1. Send til CRM med `Content-Type: text/plain;charset=utf-8` og JSON-streng som body.
2. Send parallelt (eller etter) til Netlify som vanlig `application/x-www-form-urlencoded`.
3. Hvis CRM svarer `ok:true` **eller** Netlify svarte ok → vis suksessmelding.
4. Hvis CRM svarer `ok:false` → vis `feil`-teksten fra CRM under knappen, la brukeren rette.
5. Hvis begge feiler (nettverk) → vis: «Noe gikk galt. Ring oss på 55 59 05 55 eller send e-post til post@fasaderen.no.»

### Hvilke skjemaer som sender til CRM

| Komponent | `skjema`-verdi | Fil |
|---|---|---|
| QuoteModal | `quote` | `website/src/components/QuoteModal.jsx` |
| CampaignModal | `kampanje` | `website/src/components/CampaignModal.jsx` |

### Postal code lookup

Nettleseren kan ikke kalle Bring API direkte (CORS). Bruk alltid Netlify-funksjonen som proxy:
```
GET /.netlify/functions/postalcode?pnr=5000
```
Returnerer `{"city":"BERGEN","valid":true}`.

## Fargeprofil (Tailwind-tokens)

| Token | Farge | Bruk |
|---|---|---|
| `navy` | `#154f50` | Overskrifter, bakgrunner |
| `sky` | `#4f9b96` | Sekundærfarge, focus-ring |
| `cta` | `#e94b8c` | Primær CTA-knapper |
| `cta-dark` | mørkere pink | Hover på CTA |
| `sky-light` | `#f4f6ef` | Lyse bakgrunner |

## Netlify Forms (overgangsperiode)

Statiske skjemadefinisjonar i `website/index.html` for Netlify-deteksjon:
- `quote` – generell prisforespørsel
- `campaign-hoest-2026` – høstkampanje

Fjernes etter ~2 uker uten problemer når CRM er stabil.
