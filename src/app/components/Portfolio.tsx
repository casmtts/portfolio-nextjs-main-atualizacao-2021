'use client'

import {useState} from 'react'
import {useTranslations} from 'next-intl'
import {PORTFOLIO_ITEMS, type PortfolioItem} from '../data/portfolio-data'
import PortfolioCard from './ui/PortfolioCard'
import PortfolioModal from './ui/PortfolioModal'

export default function Portfolio() {
  const t = useTranslations('PortfolioPage')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  return (
    <section id="portfolio" className="content-section scroll-mt-20" aria-labelledby="portfolio-title">
      <h2 id="portfolio-title" className="section-title">{t('title')}</h2>
      <div className="portfolio-grid">
        {PORTFOLIO_ITEMS.map((item) => (
          <PortfolioCard
            key={item.id}
            thumbnail={item.thumbnail}
            alt={t(item.titleKey)}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>
      {selectedItem && (
        <PortfolioModal
          isOpen
          onClose={() => setSelectedItem(null)}
          title={t(selectedItem.titleKey)}
          image={selectedItem.modalImage}
          imageAlt={t(selectedItem.titleKey)}
          href={selectedItem.href}
          closeLabel={t('close')}
          imageClassName={selectedItem.modalImageClassName}
          variant={selectedItem.modalVariant}
        />
      )}
    </section>
  )
}
