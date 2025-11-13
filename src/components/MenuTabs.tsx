import { useState } from 'react'
import MenuGrid from './MenuGrid'

type MenuItem = { id: string; nombre: string; descripcion: string; precio: number; destacado?: boolean; imagenUrl?: string }

const data: Record<string, MenuItem[]> = {
  Desayunos: [
    { id: 'd1', nombre: 'Omelette de queso', descripcion: 'Huevos, queso y finas hierbas.', precio: 95, imagenUrl: undefined },
    { id: 'd2', nombre: 'Waffles miel', descripcion: 'Waffles con miel de la casa.', precio: 85 },
  ],
  'All day': [
    { id: 'a1', nombre: 'Chapatta mixta', descripcion: 'Jamón, queso y aderezo.', precio: 110 },
    { id: 'a2', nombre: 'Ensalada fresca', descripcion: 'Verdes, queso de cabra y nueces.', precio: 120 },
  ],
  Pizza: [
    { id: 'p1', nombre: 'Pizza margarita', descripcion: 'Clásica con albahaca.', precio: 140, destacado: true },
    { id: 'p2', nombre: 'Pizza miel y queso', descripcion: 'Toque dulce con queso azul.', precio: 165 },
  ],
  Bebidas: [
    { id: 'b1', nombre: 'Café de especialidad', descripcion: 'Tueste medio, aroma floral.', precio: 55 },
    { id: 'b2', nombre: 'Limonada miel', descripcion: 'Refrescante con miel.', precio: 60 },
  ],
}

type TabKey = keyof typeof data

export default function MenuTabs() {
  const [active, setActive] = useState<TabKey>('Desayunos')

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(Object.keys(data) as TabKey[]).map((k) => (
          <button
            key={k}
            onClick={() => setActive(k)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === k ? 'border-amber-600 bg-amber-50 text-amber-700' : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="mt-6">
        <MenuGrid items={data[active]} />
      </div>
    </div>
  )
}
