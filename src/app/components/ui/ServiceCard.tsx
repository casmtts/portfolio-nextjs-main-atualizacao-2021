'use client'

import Image, { StaticImageData } from 'next/image'
import { mohaveLight } from '../../fonts'

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
    <article className="flex min-h-[24rem] flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md lg:min-h-[28rem]">
      <Image
        className="mx-auto pt-4"
        src={icon}
        alt={iconAlt}
        width={iconWidth}
        height={iconHeight}
      />
      <h3 className="mt-5 text-center text-base font-bold xs:text-lg">{title}</h3>
      <div className={mohaveLight.className}>
        <p className="mt-4 text-justify text-sm xs:text-base">{description}</p>
      </div>
    </article>
  )
}
