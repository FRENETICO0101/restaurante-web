interface Review { id: string; name: string; text: string }

const mock: Review[] = [
  { id: '1', name: 'Andrea', text: 'Panadería exquisita y atención impecable. Volveré pronto.' },
  { id: '2', name: 'Luis', text: 'La fusión mexicana-francesa es espectacular. Recomendado el brunch.' },
  { id: '3', name: 'María', text: 'Ambiente acogedor y platos con sabor auténtico. 10/10.' },
]

export default function Reviews({ items = mock }: { items?: Review[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((r) => (
        <figure key={r.id} className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
          <blockquote className="text-sm text-neutral-700">“{r.text}”</blockquote>
          <figcaption className="mt-3 text-xs font-medium text-neutral-500">— {r.name}</figcaption>
        </figure>
      ))}
    </div>
  )
}
