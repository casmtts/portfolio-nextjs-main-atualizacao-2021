'use client'

import { useTranslations } from 'next-intl'
import { SECTION_IDS } from '@/app/constants/sections'
import Section from './layout/Section'
import SectionTitle from './layout/SectionTitle'
import ServiceCard from './ui/ServiceCard'

import appIcon from '../../../public/images/app.png'
import backEndIcon from '../../../public/images/back-end.png'
import frontEndIcon from '../../../public/images/front-end.png'
import landingpageIcon from '../../../public/images/landing-page.png'
import cybersecurityIcon from '../../../public/images/lock-protection-privacy-cyber-security-safety-svgrepo-com.svg'
import seoIcon from '../../../public/images/seo.png'
import sistemasIcon from '../../../public/images/sistemas.png'
import uiuxIcon from '../../../public/images/ui-ux.png'
import websiteIcon from '../../../public/images/web-site.png'

function Services() {
  const t = useTranslations('ServicesPage')

  const services = [
    { icon: frontEndIcon, title: t('frontEndTitle'), description: t('frontEndDescription'), iconHeight: 110 },
    { icon: backEndIcon, title: t('backEndTitle'), description: t('backEndDescription') },
    { icon: sistemasIcon, title: t('devSystemsTitle'), description: t('devSystemsDescription') },
    { icon: appIcon, title: t('devAppTitle'), description: t('devAppDescription') },
    { icon: websiteIcon, title: t('Site&HotsiteTitle'), description: t('Site&HotsiteDescription') },
    { icon: landingpageIcon, title: t('LandingPagesTitle'), description: t('LandingPagesDescription') },
    { icon: uiuxIcon, title: t('uiUxTitle'), description: t('uiUxDescription') },
    { icon: seoIcon, title: t('seoTitle'), description: t('seoDescription') },
    { icon: cybersecurityIcon, title: t('secInfoTitle'), description: t('secInfoDescription') },
  ]

  return (
    <Section id={SECTION_IDS.services}>
      <SectionTitle>{t('title')}</SectionTitle>

      <div className="services-grid mx-auto max-w-content">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            iconAlt={service.title}
            title={service.title}
            description={service.description}
            iconHeight={service.iconHeight}
          />
        ))}
      </div>
    </Section>
  )
}

export default Services
