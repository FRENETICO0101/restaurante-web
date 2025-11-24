import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteConfig, telHref, whatsappHref } from '../config/site'

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/menu', label: 'Menú' },
  { to: '/reservas', label: 'Reservas' },
  { to: '/galeria', label: 'Galería' },
  { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="container-section flex h-16 items-center justify-between">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          <span className="text-amber-600">{siteConfig.brandName}</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }: { isActive: boolean }) =>
                `text-sm font-medium transition hover:text-amber-600 ${
                  isActive ? 'text-amber-600' : 'text-neutral-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a href={telHref} className="text-neutral-600 hover:text-amber-600" aria-label="Llamar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.29c.966 0 1.822.62 2.11 1.542l.73 2.333a2.25 2.25 0 01-.52 2.297l-1.21 1.21a16.5 16.5 0 007.263 7.263l1.21-1.21a2.25 2.25 0 012.297-.52l2.333.73a2.25 2.25 0 011.542 2.11v2.29c0 1.243-1.007 2.25-2.25 2.25H18A15.75 15.75 0 012.25 6.75V6.75z"/></svg>
          </a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-emerald-600" aria-label="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 .75a10.5 10.5 0 00-9.065 15.873L1.5 23.25l6.864-1.905A10.5 10.5 0 1012 .75zm5.318 14.8c-.218.617-1.277 1.177-1.79 1.205-.476.026-1.079.037-1.744-.111-.37-.083-.845-.274-1.413-.567-2.48-1.234-4.108-4.119-4.233-4.308-.123-.188-1.011-1.347-1.011-2.568 0-1.222.64-1.816.867-2.067.228-.253.5-.316.667-.316.165 0 .333.002.48.009.152.007.36-.058.563.43.218.525.741 1.816.806 1.948.066.131.11.285.021.457-.087.172-.13.279-.258.433-.128.153-.272.343-.389.46-.13.13-.266.272-.114.533.153.26.68 1.116 1.463 1.807 1.008.9 1.858 1.18 2.121 1.31.262.129.416.115.57-.07.154-.187.657-.766.833-1.029.175-.26.349-.218.58-.131.233.086 1.469.694 1.718.82.251.126.418.185.48.289.064.103.064.595-.154 1.212z"/></svg>
          </a>
          <Link to="/reservas" className="btn-primary text-sm">
            Reservar mesa
          </Link>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <nav className="container-section flex flex-col py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }: { isActive: boolean }) =>
                  `py-2 text-sm font-medium ${
                    isActive ? 'text-amber-600' : 'text-neutral-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-4 flex items-center gap-4">
              <a href={telHref} className="text-neutral-600 hover:text-amber-600" aria-label="Llamar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.29c.966 0 1.822.62 2.11 1.542l.73 2.333a2.25 2.25 0 01-.52 2.297l-1.21 1.21a16.5 16.5 0 007.263 7.263l1.21-1.21a2.25 2.25 0 012.297-.52l2.333.73a2.25 2.25 0 011.542 2.11v2.29c0 1.243-1.007 2.25-2.25 2.25H18A15.75 15.75 0 012.25 6.75V6.75z"/></svg>
              </a>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-emerald-600" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 .75a10.5 10.5 0 00-9.065 15.873L1.5 23.25l6.864-1.905A10.5 10.5 0 1012 .75zm5.318 14.8c-.218.617-1.277 1.177-1.79 1.205-.476.026-1.079.037-1.744-.111-.37-.083-.845-.274-1.413-.567-2.48-1.234-4.108-4.119-4.233-4.308-.123-.188-1.011-1.347-1.011-2.568 0-1.222.64-1.816.867-2.067.228-.253.5-.316.667-.316.165 0 .333.002.48.009.152.007.36-.058.563.43.218.525.741 1.816.806 1.948.066.131.11.285.021.457-.087.172-.13.279-.258.433-.128.153-.272.343-.389.46-.13.13-.266.272-.114.533.153.26.68 1.116 1.463 1.807 1.008.9 1.858 1.18 2.121 1.31.262.129.416.115.57-.07.154-.187.657-.766.833-1.029.175-.26.349-.218.58-.131.233.086 1.469.694 1.718.82.251.126.418.185.48.289.064.103.064.595-.154 1.212z"/></svg>
              </a>
              <Link
                to="/reservas"
                onClick={() => setOpen(false)}
                className="btn-primary flex-1 text-center"
              >
                Reservar mesa
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
