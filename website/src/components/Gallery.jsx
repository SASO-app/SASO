import godvikBefore from '../assets/gallery/godvik-before.jpg'
import godvikAfter from '../assets/gallery/godvik-after.jpg'
import gardsplass1Before from '../assets/gallery/gardsplass-1-before.jpg'
import gardsplass1After from '../assets/gallery/gardsplass-1-after.jpg'
import gardsplass2Before from '../assets/gallery/gardsplass-2-before.jpg'
import gardsplass2After from '../assets/gallery/gardsplass-2-after.jpg'

const PROJECTS = [
  { title: 'Betongfasade, Godvik', tag: 'Hyperwash', before: godvikBefore, after: godvikAfter },
  { title: 'Takvask, Fyllingsdalen', tag: 'Takfornying' },
  { title: 'Gårdsplass og belegningsstein', tag: 'Høytrykksvask', before: gardsplass1Before, after: gardsplass1After },
  { title: 'Uteområde, belegningsstein', tag: 'Høytrykksvask', before: gardsplass2Before, after: gardsplass2After },
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
                {project.before && project.after ? (
                  <>
                    <div className="relative aspect-square overflow-hidden">
                      <img src={project.before} alt={`Før - ${project.title}`} className="h-full w-full object-cover" />
                      <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                        Før
                      </span>
                    </div>
                    <div className="relative aspect-square overflow-hidden">
                      <img src={project.after} alt={`Etter - ${project.title}`} className="h-full w-full object-cover" />
                      <span className="absolute bottom-2 left-2 rounded-full bg-cta px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                        Etter
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex aspect-square items-center justify-center bg-gray-300 text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Før
                    </div>
                    <div className="flex aspect-square items-center justify-center bg-sky/30 text-xs font-semibold uppercase tracking-wide text-navy">
                      Etter
                    </div>
                  </>
                )}
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
          * Flere før/etter-bilder fra våre prosjekter kommer snart.
        </p>
      </div>
    </section>
  )
}
