'use client'

import 'animate.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import profilePIC from '../../../public/images/Foto_perfil.svg';
import { irishGrover } from '../fonts';

function Profile() {
  const t = useTranslations('ProfilePage');

  return (
    <section id='profile' className='profile-shell ml-sidebar flex min-h-[calc(100svh-4rem)] w-[calc(100%-4rem)] min-w-0 scroll-mt-16 items-center justify-center px-5 py-[3.4rem] xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16'>
      <div className='profile-content flex w-full max-w-3xl flex-col items-center text-center'>
        <div className='animate__animated animate__zoomIn'>
          <Image
            className="mx-auto w-[6.85rem] xs:w-[7.7rem] sm:w-32 lg:w-[9.7rem]"
            src={profilePIC}
            alt='Foto de perfil de Calil Sousa Mattos'
            priority
          />
        </div>
        <div className="profile-name mt-[1.4rem] text-[clamp(1.43rem,4.33vw,2.5rem)] font-bold leading-[1.05] tracking-tight text-[#53DA00E6]">
          <p className='animate__animated animate__bounceIn'>CALIL SOUSA MATTOS</p>
        </div>
        <div className='animate__animated animate__pulse'>
          <div className="profile-position mt-[0.57rem] text-[1.25rem] font-semibold leading-snug sm:text-2xl">
            {t('position')}
          </div>
        </div>
        <div className={`${irishGrover.className} profile-description mt-[1.4rem] max-w-2xl text-[1.1rem] font-normal leading-relaxed text-text-muted sm:mt-[1.7rem] sm:text-xl`}>
          <p className='animate__animated animate__lightSpeedInLeft'>
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Profile
