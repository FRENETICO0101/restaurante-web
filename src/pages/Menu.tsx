import SectionContainer from '../components/SectionContainer'
import MenuGrid from '../components/MenuGrid'
import SEO from '../components/SEO'

export default function Menu() {
  return (
    <main>
      <SectionContainer>
        <SEO title="Menú" description="Explora nuestros platos y especialidades." />
        <h1 className="mb-8 text-3xl font-semibold tracking-tight">Menú</h1>
        <p className="mb-10 max-w-2xl text-neutral-600">
          Contenido del menú pendiente de información real (categorías, precios, alérgenos).
        </p>
        <MenuGrid />
      </SectionContainer>
    </main>
  )
}
