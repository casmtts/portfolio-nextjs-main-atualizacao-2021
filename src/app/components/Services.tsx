'use client'

import {useTranslations} from 'next-intl'
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

const SERVICES = [
  {icon: frontEndIcon, alt: 'Front-end', title: 'frontEndTitle', description: 'frontEndDescription'},
  {icon: backEndIcon, alt: 'Back-end', title: 'backEndTitle', description: 'backEndDescription'},
  {icon: sistemasIcon, alt: 'Sistemas', title: 'devSystemsTitle', description: 'devSystemsDescription'},
  {icon: appIcon, alt: 'Aplicativos', title: 'devAppTitle', description: 'devAppDescription'},
  {icon: websiteIcon, alt: 'Sites e hotsites', title: 'Site&HotsiteTitle', description: 'Site&HotsiteDescription'},
  {icon: landingpageIcon, alt: 'Landing pages', title: 'LandingPagesTitle', description: 'LandingPagesDescription'},
  {icon: uiuxIcon, alt: 'UI e UX', title: 'uiUxTitle', description: 'uiUxDescription'},
  {icon: seoIcon, alt: 'SEO', title: 'seoTitle', description: 'seoDescription'},
  {icon: cybersecurityIcon, alt: 'DevSecOps', title: 'secInfoTitle', description: 'secInfoDescription'},
] as const

export default function Services() {
  const t = useTranslations('ServicesPage')
  return (
    <section id="services" className="content-section scroll-mt-20" aria-labelledby="services-title">
      <h2 id="services-title" className="section-title">{t('title')}</h2>
      <div className="services-grid">
        {SERVICES.map((service) => <ServiceCard key={service.title} icon={service.icon} iconAlt={service.alt} title={t(service.title)} description={t(service.description)} />)}
      </div>
    </section>
  )
}
