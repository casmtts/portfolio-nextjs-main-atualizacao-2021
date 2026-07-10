'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { PORTFOLIO_ITEMS } from '@/app/data/portfolio-data'
import { SECTION_IDS } from '@/app/constants/sections'
import Section from './layout/Section'
import SectionTitle from './layout/SectionTitle'
import PortfolioCard from './ui/PortfolioCard'
import PortfolioModal from './ui/PortfolioModal'

function Portfolio() {
  const t = useTranslations('PortfolioPage')
  const [activeItemId, setActiveItemId] = useState<string | null>(null)

  const activeItem = PORTFOLIO_ITEMS.find((item) => item.id === activeItemId)

  return (
    <Section id={SECTION_IDS.portfolio}>
      <SectionTitle>{t('title')}</SectionTitle>

      <div className="portfolio-grid mx-auto max-w-content">
        {PORTFOLIO_ITEMS.map((item) => (
          <PortfolioCard
            key={item.id}
            thumbnail={item.thumbnail}
            alt={t(item.titleKey)}
            onClick={() => setActiveItemId(item.id)}
          />
        ))}
      </div>

      {activeItem && (
        <PortfolioModal
          isOpen
          onClose={() => setActiveItemId(null)}
          title={t(activeItem.titleKey)}
          image={activeItem.modalImage}
          imageAlt={t(activeItem.titleKey)}
          href={activeItem.href}
          closeLabel={t('close')}
        />
      )}
    </Section>
  )
}

export default Portfolio
