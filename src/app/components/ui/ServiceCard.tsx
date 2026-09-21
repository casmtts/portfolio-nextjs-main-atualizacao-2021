'use client'

import Image, { StaticImageData } from 'next/image'

type ServiceCardProps = {
  icon: StaticImageData
  iconAlt: string
  title: string
  description: string
  iconWidth?: number
  iconHeight?: number
}

export default function ServiceCard({
  icon,
  iconAlt,
  title,
  description,
  iconWidth = 150,
  iconHeight = 150,
}: ServiceCardProps) {
  return (
    <article className="site-card group flex min-h-[25rem] flex-col border p-8 transition-colors hover:border-[var(--accent)] hover:bg-[var(--surface-raised)]">
      <Image
        className="mx-auto h-24 w-24 object-contain"
        src={icon}
        alt={iconAlt}
        width={iconWidth}
        height={iconHeight}
      />
      <h3 className="site-heading mt-7 text-center text-base font-semibold xs:text-lg">{title}</h3>
      <p className="site-muted mt-3 text-center text-sm leading-6 xs:text-base">{description}</p>
    </article>
  )
}
