'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { SECTION_IDS, scrollToSection } from '@/app/constants/sections'
import brFlagIcon from '../../../public/images/brasilflag.svg'
import contactIcon from '../../../public/images/contact-Icon.svg'
import euaFlagIcon from '../../../public/images/eua_flag.svg'
import portfolioSVG from '../../../public/images/portfolio-svgrepo-com.svg'
import DropdownCV from './DropdownCV'

const navButtonClass =
  'flex h-10 w-10 items-center justify-center rounded-lg cursor-pointer transition-colors duration-300 hover:bg-white hover:text-gray-800 focus:bg-white focus:outline-none'

function NavButton({
  onClick,
  title,
  children,
}: {
  onClick: () => void
  title: string
  children: React.ReactNode
}) {
  return (
    <button type="button" onClick={onClick} title={title} className={navButtonClass}>
      {children}
    </button>
  )
}

function Navbar() {
  const t = useTranslations('Navbar')

  return (
    <div className="min-w-320">
      <aside className="fixed z-30 flex h-full w-sidebar flex-col items-center justify-center space-y-8 bg-primary text-white xs:space-y-10">
        <NavButton onClick={() => scrollToSection(SECTION_IDS.profile)} title={t('profileTitle')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </NavButton>

        <NavButton onClick={() => scrollToSection(SECTION_IDS.services)} title={t('servicesTitle')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </NavButton>

        <NavButton onClick={() => scrollToSection(SECTION_IDS.skills)} title={t('skillsTitle')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </NavButton>

        <NavButton onClick={() => scrollToSection(SECTION_IDS.portfolio)} title={t('portfolioTitle')}>
          <Image src={portfolioSVG} alt="" width={32} height={32} />
        </NavButton>

        <NavButton onClick={() => scrollToSection(SECTION_IDS.contact)} title={t('contactTitle')}>
          <Image src={contactIcon} alt="" width={32} height={32} />
        </NavButton>
      </aside>

      <header className="fixed top-0 z-20 ml-sidebar flex h-16 w-[calc(100%-4rem)] items-center justify-end bg-primary px-4 xs:px-8">
        <div className="flex flex-shrink-0 items-center space-x-4 text-white">
          <DropdownCV />

          <div className="flex flex-row">
            <Link href="/en" aria-label="English">
              <Image className="mx-2 transition-transform hover:scale-110" src={euaFlagIcon} alt="English" priority />
            </Link>
            <Link href="/pt" aria-label="Português">
              <Image className="mx-2 transition-transform hover:scale-110" src={brFlagIcon} alt="Português" priority />
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
