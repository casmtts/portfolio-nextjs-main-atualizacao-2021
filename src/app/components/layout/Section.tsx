import { ReactNode } from 'react'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
}

export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`page-content scroll-mt-16 px-4 py-12 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16 3xl:mx-auto 3xl:max-w-content ${className}`}
    >
      {children}
    </section>
  )
}
