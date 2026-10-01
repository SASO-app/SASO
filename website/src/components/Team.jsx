import benjamin from '../assets/team/benjamin.jpg'
import therese from '../assets/team/therese.jpg'
import palKristian from '../assets/team/pal-kristian.jpg'
import eivind from '../assets/team/eivind.jpg'
import martin from '../assets/team/martin.jpg'
import sander from '../assets/team/sander.jpg'
import marita from '../assets/team/marita.jpg'
import kristina from '../assets/team/kristina.jpg'

const FIELD_TEAM = [
  { name: 'Benjamin Sellevold', title: 'Salgs- og driftsleder', photo: benjamin },
  { name: 'Therese', title: 'Driftsoperatør', photo: therese },
  { name: 'Pål Kristian', title: 'Driftsoperatør', photo: palKristian },
  { name: 'Eivind', title: 'Driftsoperatør', photo: eivind },
  { name: 'Martin', title: 'Driftsoperatør', photo: martin },
]

const OFFICE_TEAM = [
  { name: 'Sander Solberg', title: 'Daglig leder', photo: sander },
  { name: 'Marita K. Bauge', title: 'Markedssjef', photo: marita },
  { name: 'Kristina Bauge', title: 'Rig-koordinator', photo: kristina },
]

function TeamCard({ name, title, photo }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <img src={photo} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <div className="text-sm font-bold text-navy">{name}</div>
        <div className="text-xs text-gray-500">{title}</div>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section id="teamet" className="bg-sky-light/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Møt teamet</h2>
          <p className="mt-3 text-lg text-gray-600">
            Ekte ansikter, ekte fagfolk. Dette er menneskene du kan møte når vi tar vare på fasaden og taket ditt.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-center text-sm font-bold uppercase tracking-wide text-sky">
            Teamet som utfører jobben
          </h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {FIELD_TEAM.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-center text-sm font-bold uppercase tracking-wide text-sky">
            Bak kulissene
          </h3>
          <div className="mx-auto mt-5 grid max-w-3xl gap-5 sm:grid-cols-3">
            {OFFICE_TEAM.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
