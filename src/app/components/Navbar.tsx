'use client'

import { useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Link as LocaleLink } from '@/i18n/navigation'
import DropdownCV from './DropdownCV'
import ThemeToggle from './ThemeToggle'
import { MdPerson, MdDesignServices, MdCode, MdLayers, MdMail, MdTerminal, MdShare, MdAlternateEmail } from 'react-icons/md'

const links = [['profile', 'profileTitle', MdPerson], ['services', 'servicesTitle', MdDesignServices], ['skills', 'skillsTitle', MdCode], ['portfolio', 'portfolioTitle', MdLayers], ['contact', 'contactTitle', MdMail]] as const

export default function Navbar() {
  const t = useTranslations('Navbar')
  const locale = useLocale()
  const [activeId, setActiveId] = useState('profile')

  useEffect(() => {
    const onHashChange = () => setActiveId(window.location.hash.replace('#', '') || 'profile')
    onHashChange()
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveId(visible.target.id)
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0.1, 0.35, 0.6] })
    links.forEach(([id]) => { const section = document.getElementById(id); if (section) observer.observe(section) })
    window.addEventListener('hashchange', onHashChange)
    return () => { observer.disconnect(); window.removeEventListener('hashchange', onHashChange) }
  }, [])
  return <>
  <header className="site-sidebar z-50 border-r" aria-label="Navegação principal">
    <div className="site-sidebar-inner">
      <a href="#profile" className="site-brand focus-ring nav-rail-mark" aria-label="CSM — início">
        <span className="nav-mark">CSM</span>
      </a>
      <nav className="site-sidebar-nav" aria-label="Navegação principal">
        {links.map(([id, label, Icon]) => <a key={id} href={`#${id}`} onClick={() => setActiveId(id)} className={`nav-rail-link focus-ring ${activeId === id ? 'is-active' : ''}`} title={t(label)}><Icon aria-hidden="true" /><span className="nav-tooltip">{t(label)}</span></a>)}
      </nav>
      <div className="site-sidebar-actions"><a href="https://github.com/casmtts" target="_blank" rel="noreferrer" className="nav-rail-link" title="GitHub"><MdTerminal /><span className="nav-tooltip">GitHub</span></a><a href="https://www.linkedin.com/in/calil-mattos-programador/" target="_blank" rel="noreferrer" className="nav-rail-link" title="LinkedIn"><MdShare /><span className="nav-tooltip">LinkedIn</span></a><a href="mailto:contatocsmpm@gmail.com" className="nav-rail-link" title="Email"><MdAlternateEmail /><span className="nav-tooltip">Email</span></a></div>
    </div>
  </header><div className="site-topbar z-40"><div className="site-topbar-brand"><span className="font-semibold">Calil Mattos</span><span className="site-status"><span />Disponível para projetos</span></div><div className="site-topbar-actions"><nav className="site-language" aria-label="Idioma"><LocaleLink href="/" locale="pt" aria-label="Português" className={locale === 'pt' ? 'is-selected' : ''}>PT</LocaleLink><LocaleLink href="/" locale="en" aria-label="English" className={locale === 'en' ? 'is-selected' : ''}>EN</LocaleLink></nav><ThemeToggle /><DropdownCV /></div></div>
  </>
}
