'use client'

import 'animate.css'
import { useTranslations } from 'next-intl'
import { Irish_Grover } from 'next/font/google'
import Image from 'next/image'
import { SECTION_IDS } from '@/app/constants/sections'
import Section from './layout/Section'
import profilePIC from '../../../public/images/Foto_perfil.svg'

const irish = Irish_Grover({
  subsets: ['latin'],
  weight: '400',
})

function Profile() {
  const t = useTranslations('ProfilePage')

  return (
    <Section id={SECTION_IDS.profile} className="pt-24 pb-16 lg:pb-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 lg:max-w-6xl lg:flex-row lg:items-start lg:gap-12 xl:max-w-7xl 2xl:max-w-content 3xl:gap-16">
        <div className="animate__animated animate__zoomIn shrink-0">
          <Image
            className="mx-auto w-36 xs:w-40 sm:w-44 lg:w-48 xl:w-52 2xl:w-56"
            src={profilePIC}
            alt="Profile photo"
            priority
          />
        </div>

        <div className="flex flex-1 flex-col gap-4 text-center lg:text-left">
          <h1 className="animate__bounceIn text-2xl font-bold text-accent-dark xs:text-3xl lg:text-4xl 2xl:text-5xl">
            CALIL SOUSA MATTOS
          </h1>

          <p className="animate__animated animate__pulse text-lg font-semibold xs:text-xl lg:text-2xl">
            {t('position')}
          </p>

          <div className={`${irish.className} animate__animated animate__lightSpeedInLeft`}>
            <p className="text-justify text-sm font-bold text-text-muted xs:text-base lg:text-lg 2xl:text-xl">
              {t('description')}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Profile
