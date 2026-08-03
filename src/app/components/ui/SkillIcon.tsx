'use client'

import Image, { StaticImageData } from 'next/image'

type SkillIconProps = {
  src: StaticImageData
  alt: string
  title: string
  label?: string
  imageClassName?: string
  variant?: 'bordered' | 'plain' | 'filled'
}

export default function SkillIcon({
  src,
  alt,
  title,
  label,
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
      <Image src={src} alt={alt} className={imageClassName} />
      {label && (
        <h5 className={`pt-2 text-center text-sm font-bold ${variant === 'filled' ? 'text-white' : ''}`}>
          {label}
        </h5>
      )}
    </div>
  )
}
