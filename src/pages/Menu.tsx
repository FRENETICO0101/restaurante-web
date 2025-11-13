import SectionContainer from '../components/SectionContainer'
// import MenuGrid from '../components/MenuGrid'
import MenuTabs from '../components/MenuTabs'
import SEO from '../components/SEO'

export default function Menu() {
  return (
    <main>
      <SectionContainer>
        <SEO title="Menú" description="Explora nuestros platos y especialidades." />
        <h1 className="mb-8 text-3xl font-semibold tracking-tight">Menú</h1>
        <p className="mb-6 max-w-2xl text-neutral-600">
          Explora por categoría. Este es un contenido de muestra; sustituiremos con tu menú real.
        </p>
        <MenuTabs />
      </SectionContainer>
    </main>
  )
}
