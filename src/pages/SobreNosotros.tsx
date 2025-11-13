import SectionContainer from '../components/SectionContainer'
import SEO from '../components/SEO'

export default function SobreNosotros() {
  return (
    <main>
      <SectionContainer>
        <SEO
          title="Sobre Nosotros"
          description="Conoce nuestra historia y filosofía culinaria."
        />
        <h1 className="mb-6 text-3xl font-semibold tracking-tight">Sobre Nosotros</h1>
        <div className="prose prose-neutral max-w-none">
          <p>
            Información pendiente: historia, misión, valores, equipo, proveedores locales,
            compromiso con sostenibilidad, etc.
          </p>
          <p className="text-sm text-neutral-500">
            Reemplazar este texto una vez se recopile la información real.
          </p>
        </div>
      </SectionContainer>
    </main>
  )
}
