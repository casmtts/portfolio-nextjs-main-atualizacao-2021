'use client'

import 'animate.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import profilePIC from '../../../public/images/Foto_perfil.svg';
import { irishGrover } from '../fonts';

function Profile() {
  const t = useTranslations('ProfilePage');

  return (
    <section className='profile-shell ml-sidebar flex min-h-[calc(100svh-4rem)] w-[calc(100%-4rem)] min-w-0 items-center justify-center px-5 py-12 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16'>
      <div className='profile-content flex w-full max-w-3xl flex-col items-center text-center'>
        <div className='animate__animated animate__zoomIn'>
          <Image
            className="mx-auto w-24 xs:w-[6.75rem] sm:w-28 lg:w-[8.5rem]"
            src={profilePIC}
            alt='Foto de perfil de Calil Sousa Mattos'
            priority
          />
        </div>
        <div className="profile-name mt-5 text-[clamp(1.25rem,3.8vw,2.2rem)] font-bold leading-[1.05] tracking-tight text-[#53DA00E6]">
          <p className='animate__animated animate__bounceIn'>CALIL SOUSA MATTOS</p>
        </div>
        <div className='animate__animated animate__pulse'>
          <div className="profile-position mt-2 text-[1.1rem] font-semibold leading-snug sm:text-[1.31rem]">
            {t('position')}
          </div>
        </div>
        <div className={`${irishGrover.className} profile-description mt-5 max-w-2xl text-[0.97rem] font-normal leading-relaxed text-text-muted sm:mt-6 sm:text-[1.1rem]`}>
          <p className='animate__animated animate__lightSpeedInLeft'>
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Profile
