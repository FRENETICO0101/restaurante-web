import SectionContainer from '../components/SectionContainer'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

export default function Contacto() {
  return (
    <main>
      <SectionContainer>
        <SEO title="Contacto" description="Ponte en contacto para consultas o eventos." />
        <h1 className="mb-8 text-3xl font-semibold tracking-tight">Contacto</h1>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-sm text-neutral-600">
            <p><strong>Dirección:</strong> (pendiente)</p>
            <p><strong>Teléfono:</strong> (pendiente)</p>
            <p><strong>Email:</strong> (pendiente)</p>
            <p><strong>Horario:</strong> (pendiente)</p>
            <p className="text-xs text-neutral-500">Sustituir datos una vez confirmados.</p>
          </div>
          <ContactForm />
        </div>
      </SectionContainer>
    </main>
  )
}
