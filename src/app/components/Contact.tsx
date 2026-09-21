'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin, BsMailbox2 } from 'react-icons/bs'

export default function Contact() {
  const t = useTranslations('Contact')
  return <section id="contact" className="content-section scroll-mt-20" aria-labelledby="contact-title"><div className="site-card rounded-xl border px-5 py-14 text-center sm:px-10 sm:py-20"><p className="eyebrow">{t('eyebrow')}</p><h2 id="contact-title" className="site-heading mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">{t('heading')}</h2><p className="site-muted mx-auto mt-6 max-w-2xl text-sm leading-7 sm:text-base">{t('intro')}</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Link href="mailto:contatocsmpm@gmail.com" className="site-action focus-ring inline-flex min-h-11 items-center gap-2 px-5 py-3 text-sm font-semibold"><BsMailbox2 aria-hidden="true" />{t('emailCta')}</Link><Link href="https://www.linkedin.com/in/calil-mattos-programador/" target="_blank" rel="noopener noreferrer" className="site-outline focus-ring inline-flex min-h-11 items-center gap-2 border px-5 py-3 text-sm font-semibold"><BsLinkedin aria-hidden="true" />LinkedIn</Link><Link href="https://github.com/casmtts?tab=repositories" target="_blank" rel="noopener noreferrer" className="site-outline focus-ring inline-flex min-h-11 items-center gap-2 border px-5 py-3 text-sm font-semibold"><AiFillGithub aria-hidden="true" />GitHub</Link></div></div></section>
}
