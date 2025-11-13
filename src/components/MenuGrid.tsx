interface MenuItem {
  id: string
  nombre: string
  descripcion: string
  precio: number
  destacado?: boolean
}

const placeholders: MenuItem[] = [
  { id: '1', nombre: 'Plato Especial 1', descripcion: 'Descripción breve del plato.', precio: 12, destacado: true },
  { id: '2', nombre: 'Plato Especial 2', descripcion: 'Descripción breve del plato.', precio: 14 },
  { id: '3', nombre: 'Plato Especial 3', descripcion: 'Descripción breve del plato.', precio: 11 },
  { id: '4', nombre: 'Plato Especial 4', descripcion: 'Descripción breve del plato.', precio: 16, destacado: true },
]

export default function MenuGrid({ items = placeholders }: { items?: MenuItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map(item => (
        <div
          key={item.id}
          className="relative rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          {item.destacado && (
            <span className="absolute -top-2 right-2 rounded-full bg-amber-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
              Top
            </span>
          )}
          <h3 className="font-semibold text-neutral-800">{item.nombre}</h3>
          <p className="mt-1 line-clamp-3 text-sm text-neutral-600">{item.descripcion}</p>
          <p className="mt-3 font-medium text-amber-700">${'{'}item.precio.toFixed(2){'}'}</p>
        </div>
      ))}
    </div>
  )
}
