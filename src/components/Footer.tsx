export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-neutral-50 py-10 text-sm text-neutral-600">
      <div className="container-section flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} Restaurante. Todos los derechos reservados.
        </p>
        <p className="text-xs">Base inicial en desarrollo · Contenido pendiente</p>
      </div>
    </footer>
  )
}
