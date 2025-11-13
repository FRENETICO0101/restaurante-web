import type { ReactNode } from 'react'

interface SectionContainerProps {
  id?: string
  className?: string
  children: ReactNode
}

export default function SectionContainer({ id, className = '', children }: SectionContainerProps) {
  return (
    <section id={id} className={`container-section py-16 ${className}`}>
      {children}
    </section>
  )
}
