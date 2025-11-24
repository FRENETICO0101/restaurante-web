import { siteConfig, telHref, whatsappHref } from '../config/site'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-neutral-50 py-10 text-sm text-neutral-600">
      <div className="container-section flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-neutral-700">
          &copy; {new Date().getFullYear()} {siteConfig.brandName}. Todos los derechos reservados.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a href={telHref} className="hover:text-amber-700">Tel: {siteConfig.phone.display}</a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="hover:text-emerald-700">WhatsApp</a>
          <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-neutral-800">Instagram</a>
          <a href={siteConfig.social.googleMaps} target="_blank" rel="noreferrer" className="hover:text-neutral-800">Google Maps</a>
        </div>
      </div>
    </footer>
  )
}
