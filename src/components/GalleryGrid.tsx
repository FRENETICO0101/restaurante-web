type Item = { id: string; alt: string }

const placeholders: Item[] = Array.from({ length: 9 }).map((_, i) => ({
  id: String(i + 1),
  alt: `Imagen ${i + 1}`,
}))

export default function GalleryGrid({ items = placeholders }: { items?: Item[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.id} className="relative overflow-hidden rounded-lg bg-neutral-200">
          <div className="via-cream-200 aspect-[4/3] bg-gradient-to-br from-amber-200 to-amber-100" aria-label={item.alt} />
        </div>
      ))}
    </div>
  )
}
