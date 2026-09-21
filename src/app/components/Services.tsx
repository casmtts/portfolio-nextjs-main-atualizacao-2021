'use client'

import {useTranslations} from 'next-intl'
import ServiceCard from './ui/ServiceCard'
import appIcon from '../../../public/images/app.png'
import backEndIcon from '../../../public/images/back-end.png'
import frontEndIcon from '../../../public/images/front-end.png'
import cybersecurityIcon from '../../../public/images/lock-protection-privacy-cyber-security-safety-svgrepo-com.svg'
import seoIcon from '../../../public/images/seo.png'
import sistemasIcon from '../../../public/images/sistemas.png'
import uiuxIcon from '../../../public/images/ui-ux.png'

const SERVICES = [
  {icon: frontEndIcon, alt: 'Front-end', title: 'frontEndTitle', description: 'frontEndDescription'},
  {icon: backEndIcon, alt: 'Back-end', title: 'backEndTitle', description: 'backEndDescription'},
  {icon: cybersecurityIcon, alt: 'DevSecOps', title: 'secInfoTitle', description: 'secInfoDescription'},
  {icon: sistemasIcon, alt: 'Sistemas', title: 'devSystemsTitle', description: 'devSystemsDescription'},
  {icon: appIcon, alt: 'Aplicativos', title: 'devAppTitle', description: 'devAppDescription'},
  {icon: uiuxIcon, alt: 'UI e UX', title: 'uiUxTitle', description: 'uiUxDescription'},
  {icon: seoIcon, alt: 'SEO', title: 'seoTitle', description: 'seoDescription'},
] as const

export default function Services() {
  const t = useTranslations('ServicesPage')
  return (
    <section id="services" className="content-section scroll-mt-20" aria-labelledby="services-title">
      <p className="eyebrow">{t('eyebrow')}</p>
      <h2 id="services-title" className="section-title mb-3 mt-2">{t('heading')}</h2>
      <p className="site-muted mb-10 max-w-2xl text-base leading-7">{t('intro')}</p>
      <div className="services-grid">
        {SERVICES.map((service) => <ServiceCard key={service.title} icon={service.icon} iconAlt={service.alt} title={t(service.title)} description={t(service.description)} />)}
      </div>
    </section>
  )
}
