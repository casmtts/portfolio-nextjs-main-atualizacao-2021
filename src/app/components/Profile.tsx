'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import profilePIC from '../../../public/images/Foto_perfil.svg'

export default function Profile() {
  const t = useTranslations('ProfilePage')
  return <section id="profile" className="mx-auto grid max-w-[1440px] scroll-mt-20 items-center gap-8 border-b px-5 py-12 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-16" style={{borderColor:'var(--line)'}}>
    <div className="max-w-4xl"><p className="eyebrow">{t('availabilityEyebrow')} <span className="mx-2 text-[var(--quiet)]">/</span> {t('position')}</p><h1 className="site-heading mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-7xl lg:text-8xl">{t('heroTitle')}</h1><p className="site-muted mt-7 max-w-2xl text-lg leading-8 sm:text-xl">{t('description')}</p><div className="mt-9 flex flex-wrap gap-3"><a href="#portfolio" className="site-action focus-ring inline-flex min-h-11 items-center px-5 py-3 text-sm font-semibold">{t('projectsCta')} <span className="ml-3" aria-hidden="true">↘</span></a><a href="#contact" className="site-outline focus-ring inline-flex min-h-11 items-center border px-5 py-3 text-sm font-semibold">{t('contactCta')}</a></div><dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t pt-6 sm:grid-cols-3" style={{borderColor:'var(--line)'}}><div><dt className="site-quiet font-mono text-xs">{t('focusLabel')}</dt><dd className="site-heading mt-1 font-semibold">{t('focusValue')}</dd></div><div><dt className="site-quiet font-mono text-xs">{t('approachLabel')}</dt><dd className="site-heading mt-1 font-semibold">{t('approachValue')}</dd></div><div><dt className="site-quiet font-mono text-xs">{t('availabilityLabel')}</dt><dd className="site-heading mt-1 font-semibold">{t('availabilityValue')}</dd></div></dl></div>
    <div className="relative flex justify-center lg:justify-end"><div className="site-card relative w-full max-w-md border p-3"><Image className="site-raised mx-auto h-auto w-full object-contain" src={profilePIC} alt={t('profileAlt')} width={320} height={320} priority style={{ width: '100%', height: 'auto' }} /><div className="site-border mt-3 border-t px-1 pt-4"><p className="site-heading font-semibold">Calil Sousa Mattos</p><p className="mt-1 font-mono text-xs text-[var(--accent)]">{t('position')}</p></div></div></div>
  </section>
}
