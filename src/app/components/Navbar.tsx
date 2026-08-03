'use client'

import {useTranslations} from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import type {ReactNode} from 'react'
import {scrollToSection, SECTION_IDS, type SectionId} from '../constants/sections'
import brFlagIcon from '../../../public/images/brasilflag.svg'
import contactIcon from '../../../public/images/contact-Icon.svg'
import euaFlagIcon from '../../../public/images/eua_flag.svg'
import portfolioSVG from '../../../public/images/portfolio-svgrepo-com.svg'
import DropdownCV from './DropdownCV'

const icons: Record<SectionId, ReactNode> = {
  profile: <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 100 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>,
  services: <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  skills: <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  portfolio: <Image src={portfolioSVG} alt="" className="h-6 w-6" />,
  contact: <Image src={contactIcon} alt="" className="h-6 w-6" />,
}

export default function Navbar() {
  const t = useTranslations('Navbar')
  const links: Array<[SectionId, string]> = [[SECTION_IDS.profile, 'profileTitle'], [SECTION_IDS.services, 'servicesTitle'], [SECTION_IDS.skills, 'skillsTitle'], [SECTION_IDS.portfolio, 'portfolioTitle'], [SECTION_IDS.contact, 'contactTitle']]
  return <>
    <aside className="fixed inset-y-0 left-0 z-30 flex w-16 flex-col items-center justify-center gap-5 bg-primary" aria-label="Navegação principal">
      {links.map(([id, label]) => <button key={id} type="button" title={t(label)} aria-label={t(label)} onClick={() => scrollToSection(id)} className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white hover:text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">{icons[id]}</button>)}
    </aside>
    <header className="ml-16 flex h-16 items-center justify-end bg-primary px-5 sm:px-8">
      <div className="flex items-center gap-3"><DropdownCV /><nav className="flex items-center" aria-label="Idioma"><Link href="/en" aria-label="English"><Image className="mx-2 transition hover:scale-110" src={euaFlagIcon} alt="" priority /></Link><Link href="/pt" aria-label="Português"><Image className="mx-2 transition hover:scale-110" src={brFlagIcon} alt="" priority /></Link></nav></div>
    </header>
  </>
}
