'use client'

import { useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'

export default function ThemeToggle() {
  const t = useTranslations('Navbar')
  const locale = useLocale()
  const [isLight, setIsLight] = useState(true)

  useEffect(() => {
    document.documentElement.dataset.theme = 'light'
  }, [])

  const toggleTheme = () => {
    const nextIsLight = !isLight
    setIsLight(nextIsLight)
    document.documentElement.dataset.theme = nextIsLight ? 'light' : 'dark'
    window.localStorage.setItem('portfolio-theme', nextIsLight ? 'light' : 'dark')
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="focus-ring theme-toggle"
      aria-label={isLight ? t('activateDark') : t('activateLight')}
      title={isLight ? t('darkMode') : t('lightMode')}
    >
      <span aria-hidden="true" className="font-semibold">{isLight ? (locale === 'pt' ? 'E' : 'D') : (locale === 'pt' ? 'C' : 'L')}</span>
      <span className="hidden sm:inline">{isLight ? t('darkMode') : t('lightMode')}</span>
    </button>
  )
}
