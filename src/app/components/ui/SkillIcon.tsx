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
    'site-card flex aspect-square w-full max-w-[10rem] flex-col items-center justify-center border p-3 transition-colors hover:border-[var(--accent)] hover:bg-[var(--surface-raised)] focus-within:border-[var(--accent)]'

  const variantClasses = {
    bordered: '',
    plain: 'overflow-visible p-0',
    filled: 'bg-[var(--surface-raised)]',
  }

  return (
    <div
      className={`group/skill relative ${baseClasses} ${variantClasses[variant]}`}
      title={title}
      tabIndex={0}
      aria-label={`${alt}: ${title}`}
    >
      {src ? (
        <Image src={src} alt={alt} className={`${imageClassName} ${variant === 'plain' ? 'h-full object-contain' : ''}`} />
      ) : Icon ? (
        <Icon aria-label={alt} className="h-16 w-16" style={{ color: iconColor }} />
      ) : null}
      {label && (
        <h5 className="site-heading pt-2 text-center font-mono text-xs font-bold">
          {label}
        </h5>
      )}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-[calc(100%+0.65rem)] left-1/2 z-20 w-56 -translate-x-1/2 translate-y-1 opacity-0 transition duration-200 group-hover/skill:translate-y-0 group-hover/skill:opacity-100 group-focus/skill:translate-y-0 group-focus/skill:opacity-100"
      >
        <span className="site-card block rounded-md border px-3 py-2 text-left font-sans text-xs leading-5 shadow-xl shadow-black/20">
          {title}
        </span>
      </span>
    </div>
  )
}
