import SectionContainer from '../components/SectionContainer'
import ReservationForm from '../components/ReservationForm'
import SEO from '../components/SEO'

export default function Reservas() {
  return (
    <main>
      <SectionContainer>
        <SEO
          title="Reservas"
          description="Reserva tu mesa de forma sencilla en pocos pasos."
        />
        <h1 className="mb-6 text-3xl font-semibold tracking-tight">Reservas</h1>
        <p className="mb-8 max-w-2xl text-neutral-600">
          Indica los datos de tu reserva. Confirmaremos por email o teléfono.
        </p>
        <ReservationForm />
      </SectionContainer>
    </main>
  )
}
