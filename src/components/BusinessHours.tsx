import { siteConfig, type DayHours } from '../config/site'

interface BusinessHoursProps {
  hours?: DayHours[]
}

export default function BusinessHours({ hours = siteConfig.hours }: BusinessHoursProps) {
  return (
    <div className="divide-y divide-neutral-200 overflow-hidden rounded-md border border-neutral-200">
      {hours.map((h) => (
        <div key={h.key} className="flex items-center justify-between px-3 py-2 text-sm">
          <span className="text-neutral-700">{h.label}</span>
          {h.closed ? (
            <span className="text-neutral-400">Cerrado</span>
          ) : (
            <span className="font-medium text-neutral-800">{h.open} – {h.close}</span>
          )}
        </div>
      ))}
    </div>
  )
}
