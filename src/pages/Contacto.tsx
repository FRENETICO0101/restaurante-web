import SectionContainer from '../components/SectionContainer'
import ContactForm from '../components/ContactForm'
import MapEmbed from '../components/MapEmbed'
import SEO from '../components/SEO'
import BusinessHours from '../components/BusinessHours'
import { siteConfig, telHref, whatsappHref } from '../config/site'

export default function Contacto() {
  return (
    <main>
      <SectionContainer>
        <SEO title="Contacto" description="Ponte en contacto para consultas o eventos." />
        <h1 className="mb-8 text-3xl font-semibold tracking-tight">Contacto</h1>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-sm text-neutral-700">
            <p>
              <strong>Dirección:</strong> {siteConfig.address}
            </p>
            <p>
              <strong>Teléfono:</strong> <a className="text-amber-700 hover:underline" href={telHref}>{siteConfig.phone.display}</a>
            </p>
            <p>
              <strong>WhatsApp:</strong> <a className="text-emerald-700 hover:underline" href={whatsappHref} target="_blank" rel="noreferrer">{siteConfig.whatsapp.display}</a>
            </p>
            <div>
              <strong>Horario:</strong>
              <div className="mt-2 max-w-xs"><BusinessHours /></div>
            </div>
            <div className="flex gap-3 pt-2 text-sm">
              <a className="btn-secondary" href={siteConfig.social.googleMaps} target="_blank" rel="noreferrer">Google Maps</a>
              <a className="btn-secondary" href={siteConfig.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="mt-8">
          <MapEmbed address={siteConfig.address} />
        </div>
      </SectionContainer>
    </main>
  )
}
