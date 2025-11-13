import { useState } from 'react'
import type { FormEvent } from 'react'

export default function ReservationForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 800)
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
      <div className="sm:col-span-1">
        <label className="mb-1 block text-sm font-medium" htmlFor="nombre-res">
          Nombre
        </label>
        <input
          id="nombre-res"
          required
          type="text"
          className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
        />
      </div>
      <div className="sm:col-span-1">
        <label className="mb-1 block text-sm font-medium" htmlFor="personas">
          Personas
        </label>
        <input
          id="personas"
          required
          type="number"
          min={1}
          defaultValue={2}
          className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="fecha">
          Fecha
        </label>
        <input
          id="fecha"
          required
          type="date"
          className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="hora">
          Hora
        </label>
        <input
          id="hora"
          required
          type="time"
          className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="mb-1 block text-sm font-medium" htmlFor="notas">
          Notas
        </label>
        <textarea
          id="notas"
          rows={3}
          className="block w-full resize-none rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
        />
      </div>
      <div className="sm:col-span-2">
        <button className="btn-primary" disabled={status !== 'idle'}>
          {status === 'sending'
            ? 'Procesando...'
            : status === 'sent'
              ? 'Reserva enviada'
              : 'Reservar'}
        </button>
      </div>
    </form>
  )
}
