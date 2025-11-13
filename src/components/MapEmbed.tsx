interface MapEmbedProps {
  address?: string
  zoom?: number
}

export default function MapEmbed({
  address = "Av. Paseo del Anochecer 347-local 1, Solares Residencial, 45019 Zapopan, Jal.",
  zoom = 15,
}: MapEmbedProps) {
  const query = encodeURIComponent(address)
  const src = `https://maps.google.com/maps?q=${query}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`

  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200">
      <div className="aspect-[16/9]">
        <iframe
          title="Ubicación"
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
