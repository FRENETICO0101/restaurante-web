import { useState } from 'react'
import MenuGrid from './MenuGrid'
import { menuData, type MenuItem } from '../data/menu'

const data: Record<string, MenuItem[]> = {
  Desayunos: menuData['Desayunos'],
  'All day': menuData['All day'],
  Pizza: menuData['Pizza'],
  Bebidas: menuData['Bebidas'],
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
