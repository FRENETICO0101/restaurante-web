import { useState } from 'react'
import type { FormEvent } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 700)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="nombre">
          Nombre
        </label>
        <input
          id="nombre"
          required
          type="text"
          className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          required
          type="email"
          className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="mensaje">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          required
          rows={4}
          className="block w-full resize-none rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
        />
      </div>
      <button className="btn-primary" disabled={status !== 'idle'}>
        {status === 'sending' ? 'Enviando...' : status === 'sent' ? 'Enviado' : 'Enviar'}
      </button>
    </form>
  )
}
