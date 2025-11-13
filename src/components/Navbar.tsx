import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/menu', label: 'Menú' },
  { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { to: '/contacto', label: 'Contacto' },
  { to: '/reservas', label: 'Reservas' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="container-section flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold text-lg tracking-tight">
          <span className="text-amber-600">Restaurante</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {navItems.map(item => (
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
        <div className="hidden md:block">
          <Link to="/reservas" className="btn-primary text-sm">
            Reservar
          </Link>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
          onClick={() => setOpen(o => !o)}
          aria-label="Abrir menú"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <nav className="container-section flex flex-col py-4">
            {navItems.map(item => (
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
            <Link
              to="/reservas"
              onClick={() => setOpen(false)}
              className="mt-2 btn-primary text-center"
            >
              Reservar
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
