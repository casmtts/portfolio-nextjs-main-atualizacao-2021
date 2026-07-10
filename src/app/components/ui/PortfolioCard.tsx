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
      className="w-full overflow-hidden rounded-lg transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <Image
        src={thumbnail}
        alt={alt}
        className="h-auto w-full object-cover"
        sizes="(max-width: 425px) 100vw, (max-width: 768px) 50vw, 33vw"
      />
    </button>
  )
}
