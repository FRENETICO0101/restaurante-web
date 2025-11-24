export type DayKey =
  | 'lunes'
  | 'martes'
  | 'miércoles'
  | 'jueves'
  | 'viernes'
  | 'sábado'
  | 'domingo'

export interface DayHours {
  key: DayKey
  label: string
  open?: string
  close?: string
  closed?: boolean
}

export const siteConfig = {
  brandName: "L’MIELE BAKERY & BISTRO",
  address:
    'Av. Paseo del Anochecer 341-local 1, Solares Residencial, 45019 Zapopan, Jal.',
  phone: {
    display: '33 3801 3064',
    e164: '+523338013064',
  },
  whatsapp: {
    display: '33 3801 3064',
    number: '523338013064',
  },
  email: '',
  social: {
    instagram: 'https://www.instagram.com/lmielebakerybistro/',
    googleMaps: 'https://maps.app.goo.gl/23LnDxptahAZMKu3A',
  },
  hours: [
    { key: 'lunes', label: 'Lunes', open: '7:30 a.m.', close: '9:00 p.m.' },
    { key: 'martes', label: 'Martes', open: '7:30 a.m.', close: '9:00 p.m.' },
    { key: 'miércoles', label: 'Miércoles', open: '7:30 a.m.', close: '9:00 p.m.' },
    { key: 'jueves', label: 'Jueves', open: '7:30 a.m.', close: '9:00 p.m.' },
    { key: 'viernes', label: 'Viernes', open: '7:30 a.m.', close: '9:00 p.m.' },
    { key: 'sábado', label: 'Sábado', open: '7:30 a.m.', close: '3:00 p.m.' },
    { key: 'domingo', label: 'Domingo', open: '7:30 a.m.', close: '3:00 p.m.' },
  ] as DayHours[],
}

export const telHref = `tel:${siteConfig.phone.e164}`
export const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number}`
