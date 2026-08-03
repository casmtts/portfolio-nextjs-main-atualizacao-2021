'use client'

import Image, { StaticImageData } from 'next/image'

type PortfolioCardProps = {
  thumbnail: StaticImageData
  alt: string
  onClick: () => void
}

export default function PortfolioCard({ thumbnail, alt, onClick }: PortfolioCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mx-auto w-full max-w-[30rem] rounded-xl bg-white p-3 shadow-sm transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="flex aspect-[3/2] w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-50">
        <Image
          src={thumbnail}
          alt={alt}
          className="h-full w-full object-contain"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 30rem"
        />
      </div>
    </button>
  )
}
