import SectionContainer from '../components/SectionContainer'
import GalleryGrid from '../components/GalleryGrid'
import SEO from '../components/SEO'

export default function Galeria() {
  return (
    <main>
      <SectionContainer>
        <SEO title="Galería" description="Una muestra visual de nuestra experiencia." />
        <h1 className="mb-6 text-3xl font-semibold tracking-tight">Galería</h1>
        <GalleryGrid />
      </SectionContainer>
    </main>
  )
}
