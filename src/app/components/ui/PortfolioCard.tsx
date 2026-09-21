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
      className="site-card focus-ring group mx-auto w-full overflow-hidden border text-left transition hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--surface-raised)]"
    >
      <div className="site-raised flex aspect-[16/10] w-full items-center justify-center overflow-hidden p-2">
        <Image
          src={thumbnail}
          alt={alt}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 30rem"
        />
      </div><div className="site-border flex items-center justify-between gap-3 border-t px-4 py-4"><span className="site-heading font-mono text-sm font-semibold">{alt}</span><span aria-hidden="true" className="text-lg text-[var(--accent)] transition group-hover:translate-x-1">↗</span></div>
    </button>
  )
}
