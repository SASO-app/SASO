import { useState, useEffect } from 'react'
import { useCampaignModal } from '../context/CampaignModalContext'

const DEADLINE = new Date('2026-10-31T23:59:59')

function getTimeLeft() {
  const diff = DEADLINE - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="tabular-nums rounded-xl bg-white/10 px-4 py-3 text-4xl font-black text-white sm:text-5xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-amber-200/80">
        {label}
      </span>
    </div>
  )
}

const LEAVES = [
  { top: '8%',  left: '3%',  size: 72, opacity: 0.18, rotate: -20, delay: '0s' },
  { top: '60%', left: '1%',  size: 48, opacity: 0.12, rotate: 30,  delay: '0.4s' },
  { top: '20%', right: '4%', size: 88, opacity: 0.15, rotate: 15,  delay: '0.8s' },
  { top: '70%', right: '2%', size: 56, opacity: 0.10, rotate: -35, delay: '0.2s' },
  { top: '5%',  left: '22%', size: 36, opacity: 0.10, rotate: 45,  delay: '1s' },
  { top: '80%', left: '35%', size: 44, opacity: 0.08, rotate: -10, delay: '0.6s' },
  { top: '15%', right: '20%',size: 32, opacity: 0.09, rotate: 60,  delay: '1.2s' },
]

function Leaf({ top, left, right, size, opacity, rotate, delay }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      style={{
        position: 'absolute',
        top, left, right,
        width: size, height: size,
        opacity,
        transform: `rotate(${rotate}deg)`,
        animation: `leafFloat 6s ease-in-out ${delay} infinite alternate`,
        pointerEvents: 'none',
      }}
    >
      <path
        d="M50 5 C30 5 10 25 10 50 C10 70 25 88 50 95 C75 88 90 70 90 50 C90 25 70 5 50 5Z
           M50 95 L50 5 M30 30 L50 95 M70 30 L50 95 M20 55 L80 55"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function SeasonalCampaign() {
  const { open } = useCampaignModal()
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!timeLeft) return null

  return (
    <>
      <style>{`
        @keyframes leafFloat {
          from { transform: translateY(0px) rotate(var(--r, 0deg)); }
          to   { transform: translateY(-14px) rotate(var(--r, 0deg)); }
        }
      `}</style>

      <section className="relative overflow-hidden bg-[#0d3535] py-16 sm:py-20">
        {/* Amber warm glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-orange-900/15" />

        {/* Leaf decorations */}
        {LEAVES.map((l, i) => <Leaf key={i} {...l} />)}

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">

          {/* Campaign badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-amber-300">
            🍂 Høstkampanje 2026
          </div>

          {/* Discount callout */}
          <div className="mx-auto mb-6 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-cta font-black text-white shadow-lg shadow-cta/40 sm:h-32 sm:w-32">
            <span className="text-4xl leading-none sm:text-5xl">30%</span>
            <span className="text-sm uppercase tracking-wide">rabatt</span>
          </div>

          {/* Headline — Hormozi style */}
          <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
            Taket ditt overlever ikke vinteren<br />
            <span className="text-amber-300">uten behandling i høst.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
            Fukt, mose og alger spiser seg inn i taket gjennom frosten.
            Vi behandler taket ditt nå — med <strong className="text-white">30&nbsp;% høstrabatt</strong> —
            og du slipper kostbare reparasjoner neste år.
            <br />
            <span className="mt-1 block text-amber-300/90 font-semibold">Tilbudet gjelder ut oktober. Få ledige plasser igjen.</span>
          </p>

          {/* Countdown */}
          <div className="mt-10 flex justify-center gap-3 sm:gap-5">
            <CountdownUnit value={timeLeft.days}    label="Dager" />
            <CountdownUnit value={timeLeft.hours}   label="Timer" />
            <CountdownUnit value={timeLeft.minutes} label="Min" />
            <CountdownUnit value={timeLeft.seconds} label="Sek" />
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={open}
              className="rounded-full bg-cta px-8 py-4 text-lg font-black text-white shadow-lg shadow-cta/40 transition hover:scale-105 hover:brightness-110"
            >
              Book gratis befaring nå →
            </button>
            <a
              href="tel:+4755590555"
              className="text-base font-semibold text-amber-300 underline-offset-4 hover:underline"
            >
              Eller ring oss direkte
            </a>
          </div>

          {/* Risk reversal */}
          <p className="mt-5 text-sm text-white/50">
            100% gratis befaring · ingen forpliktelse · faktura kun hvis du velger oss
          </p>
        </div>
      </section>
    </>
  )
}
