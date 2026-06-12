const PROJECTS = [
  { title: 'Fasadevask, Godvik', tag: 'Softwash' },
  { title: 'Takvask, Fyllingsdalen', tag: 'Takfornying' },
  { title: 'Takrennerens, Loddefjord', tag: 'Takrenner' },
  { title: 'Gårdsplass, Askøy', tag: 'Høytrykksvask' },
]

export default function Gallery() {
  return (
    <section id="prosjekter" className="bg-sky-light/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Før og etter</h2>
          <p className="mt-3 text-lg text-gray-600">
            Se forskjellen skånsom fasade- og takvask kan gjøre for hjemmet ditt.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <div key={project.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="grid grid-cols-2">
                <div className="flex aspect-square items-center justify-center bg-gray-300 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Før
                </div>
                <div className="flex aspect-square items-center justify-center bg-sky/30 text-xs font-semibold uppercase tracking-wide text-navy">
                  Etter
                </div>
              </div>
              <div className="p-4">
                <span className="inline-block rounded-full bg-navy/10 px-2.5 py-0.5 text-xs font-semibold text-navy">
                  {project.tag}
                </span>
                <h3 className="mt-2 text-sm font-bold text-navy">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          * Bytt ut bildene med egne før/etter-bilder for å vise frem ekte resultater.
        </p>
      </div>
    </section>
  )
}
