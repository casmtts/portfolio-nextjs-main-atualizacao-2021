'use client'

import Image, { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

type SkillIconProps = {
  src?: StaticImageData
  Icon?: IconType
  alt: string
  title: string
  label?: string
  iconColor?: string
  imageClassName?: string
  variant?: 'bordered' | 'plain' | 'filled'
}

export default function SkillIcon({
  src,
  Icon,
  alt,
  title,
  label,
  iconColor,
  imageClassName = 'w-[60%] mx-auto pt-5',
  variant = 'bordered',
}: SkillIconProps) {
  const baseClasses =
    'flex aspect-square w-full max-w-[10rem] flex-col items-center justify-center transition-transform hover:scale-105 focus-within:scale-105'

  const variantClasses = {
    bordered: 'border-2 border-gray-200 rounded-lg',
    plain: '',
    filled: 'rounded-lg bg-[#147bac]',
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`} title={title}>
      {src ? (
        <Image src={src} alt={alt} className={imageClassName} />
      ) : Icon ? (
        <Icon aria-label={alt} className="h-16 w-16" style={{ color: iconColor }} />
      ) : null}
      {label && (
        <h5 className={`pt-2 text-center text-sm font-bold ${variant === 'filled' ? 'text-white' : ''}`}>
          {label}
        </h5>
      )}
    </div>
  )
}
