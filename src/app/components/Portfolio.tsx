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
      <div className="portfolio-heading mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div className="min-w-0"><p className="eyebrow">{t('selectedLabel')}</p><h2 id="portfolio-title" className="section-title mb-0 mt-2">{t('eyebrow')}</h2></div><div className="portfolio-copy max-w-md"><p className="site-muted text-sm leading-6">{t('intro')}</p><a href="https://github.com/casmtts?tab=repositories" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)] hover:underline">{t('repositoriesLink')} <span className="ml-2" aria-hidden="true">→</span></a></div></div>
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
