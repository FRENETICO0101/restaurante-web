import SectionContainer from '../components/SectionContainer'
import MenuGrid from '../components/MenuGrid'
import { Link } from 'react-router-dom'
import ReservationForm from '../components/ReservationForm'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-900 py-28 text-white">
        <div className="container-section relative z-10">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Sabores únicos, ingredientes frescos.
          </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-300">
              Experiencia gastronómica moderna en un ambiente acogedor. Reserva tu mesa y
              disfruta.
            </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/reservas" className="btn-primary">Reservar</Link>
            <Link to="/menu" className="btn-secondary">Ver Menú</Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#b45309,transparent_60%)] opacity-30" />
      </section>

      {/* Destacados */}
      <SectionContainer id="destacados">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Platos Destacados</h2>
          <p className="mt-2 text-neutral-600 text-balance">
            Una muestra de nuestras especialidades (contenido real pendiente).
          </p>
        </div>
        <MenuGrid />
      </SectionContainer>

      {/* CTA Reservas */}
      <SectionContainer className="bg-neutral-900 text-white rounded-xl">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Reserva tu experiencia</h2>
            <p className="mt-4 text-neutral-300">
              Cuéntanos cuándo vienes y cuántos sois. Confirmaremos a la brevedad.
            </p>
          </div>
          <ReservationForm />
        </div>
      </SectionContainer>

      {/* Contacto rápido */}
      <SectionContainer id="contacto" className="bg-neutral-50 rounded-xl">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">¿Dudas rápidas?</h2>
            <p className="mt-4 text-neutral-600">
              Escríbenos y te responderemos pronto. Información final pendiente.
            </p>
          </div>
          <ContactForm />
        </div>
      </SectionContainer>
    </main>
  )
}
