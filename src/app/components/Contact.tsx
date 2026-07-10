'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin, BsMailbox2 } from 'react-icons/bs'
import { SECTION_IDS } from '@/app/constants/sections'
import Section from './layout/Section'

const CONTACT_LINKS = [
  {
    icon: BsMailbox2,
    color: 'red',
    href: 'mailto:contatocsmpm@gmail.com',
    label: 'contatocsmpm@gmail.com',
  },
  {
    icon: BsLinkedin,
    color: 'blue',
    href: 'https://www.linkedin.com/in/calil-mattos-programador/',
    label: 'LinkedIn',
  },
  {
    icon: AiFillGithub,
    color: 'black',
    href: 'https://github.com/casmtts?tab=repositories',
    label: 'GitHub',
  },
] as const

export default function Contact() {
  const t = useTranslations('Contact')

  return (
    <Section id={SECTION_IDS.contact} className="pb-8">
      <h2 className="text-center text-2xl font-bold xs:text-3xl lg:text-4xl">{t('getInContact')}</h2>

      <div className="mx-auto mt-12 flex max-w-md flex-col items-center gap-8 xs:mt-16 lg:max-w-lg">
        {CONTACT_LINKS.map(({ icon: Icon, color, href, label }) => (
          <div key={label} className="flex flex-col items-center gap-3">
            <Icon color={color} size={45} aria-hidden />
            <Link
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="text-lg transition-all hover:font-bold xs:text-xl"
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
    </Section>
  )
}
