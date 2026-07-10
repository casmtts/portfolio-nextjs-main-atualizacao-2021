'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

type PortfolioModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  image: StaticImageData
  imageAlt: string
  href?: string
  closeLabel: string
  imageClassName?: string
  children?: ReactNode
}

export default function PortfolioModal({
  isOpen,
  onClose,
  title,
  image,
  imageAlt,
  href,
  closeLabel,
  imageClassName = 'h-auto w-full max-h-[70vh] object-contain',
  children,
}: PortfolioModalProps) {
  if (!isOpen) return null

  const imageElement = (
    <Image src={image} alt={imageAlt} className={imageClassName} />
  )

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-modal-title"
      >
        <div className="relative mx-auto my-8 w-full max-w-4xl rounded-lg bg-white shadow-xl xl:max-w-5xl 2xl:max-w-6xl">
          <div className="flex flex-col">
            <div className="flex justify-end p-4">
              <button
                type="button"
                onClick={onClose}
                className="text-2xl font-semibold text-gray-400 transition-colors hover:text-gray-600"
                aria-label={closeLabel}
              >
                ×
              </button>
            </div>

            <div className="px-4 pb-4">
              {href ? (
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  {imageElement}
                </Link>
              ) : (
                imageElement
              )}
              {children}
              <h3
                id="portfolio-modal-title"
                className="pt-6 text-center text-xl font-bold xs:text-2xl lg:text-3xl"
              >
                {title}
              </h3>
            </div>

            <div className="flex justify-end border-t border-gray-200 p-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-bold uppercase text-red-500 transition-colors hover:text-red-700"
              >
                {closeLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="fixed inset-0 z-40 bg-black/50"
        onClick={onClose}
        aria-label={closeLabel}
      />
    </>
  )
}
