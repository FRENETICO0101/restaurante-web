import SectionContainer from '../components/SectionContainer'
import MenuGrid from '../components/MenuGrid'
import { Link } from 'react-router-dom'
import ReservationForm from '../components/ReservationForm'
import ContactForm from '../components/ContactForm'
import Reviews from '../components/Reviews'
import MapEmbed from '../components/MapEmbed'
import BusinessHours from '../components/BusinessHours'
import { siteConfig, telHref, whatsappHref } from '../config/site'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-900 py-28 text-white">
        <div className="container-section relative z-10">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Sabores auténticos, momentos inolvidables.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-300">
            Fusión mexicana–francesa con panadería y bistró. Ingredientes frescos y ambiente acogedor.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/reservas" className="btn-primary">Reservar ahora</Link>
            <Link to="/menu" className="btn-secondary">
              Ver Menú
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#b45309,transparent_60%)] opacity-30" />
      </section>

      {/* Destacados */}
      <SectionContainer id="destacados">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Platos Destacados</h2>
          <p className="mt-2 text-balance text-neutral-600">
            Una muestra de nuestras especialidades (contenido real pendiente).
          </p>
        </div>
        <MenuGrid />
        <div className="mt-8 text-center">
          <Link to="/menu" className="btn-secondary">Ver menú completo</Link>
        </div>
      </SectionContainer>

      {/* CTA Reservas */}
      <SectionContainer className="rounded-xl bg-neutral-900 text-white">
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

      {/* Reseñas */}
      <SectionContainer>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Opiniones</h2>
          <p className="mt-2 text-neutral-600">Lo que dicen nuestros clientes.</p>
        </div>
        <Reviews />
      </SectionContainer>

      {/* Contacto rápido */}
      <SectionContainer id="contacto" className="rounded-xl bg-neutral-50">
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

      {/* Ubicación */}
      <SectionContainer>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Dónde estamos</h2>
            <p className="mt-4 max-w-prose text-neutral-600">
              {siteConfig.address}
            </p>
            <div className="mt-4 max-w-sm">
              <BusinessHours />
            </div>
            <div className="mt-4 flex gap-4">
              <a href={telHref} className="btn-secondary">Llamar</a>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary">WhatsApp</a>
              <a
                href={siteConfig.social.googleMaps}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
          <MapEmbed address={siteConfig.address} />
        </div>
      </SectionContainer>
    </main>
  )
}
