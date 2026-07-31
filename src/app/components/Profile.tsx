'use client'

import 'animate.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import profilePIC from '../../../public/images/Foto_perfil.svg';

function Profile() {
  const t = useTranslations('ProfilePage');

  return (
    <section className='profile-shell ml-sidebar flex min-h-[calc(100svh-4rem)] w-[calc(100%-4rem)] min-w-0 items-center justify-center px-5 py-16 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16'>
      <div className='profile-content flex w-full max-w-3xl flex-col items-center text-center'>
        <div className='animate__animated animate__zoomIn'>
          <Image
            className="mx-auto w-32 xs:w-36 sm:w-40 lg:w-48"
            src={profilePIC}
            alt='Foto de perfil de Calil Sousa Mattos'
            priority
          />
        </div>
        <div className="profile-name mt-7 text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-[#53DA00E6]">
          <p className='animate__animated animate__bounceIn'>CALIL SOUSA MATTOS</p>
        </div>
        <div className='animate__animated animate__pulse'>
          <div className="profile-position mt-3 text-xl font-semibold leading-snug sm:text-2xl">
            {t('position')}
          </div>
        </div>
        <div className="profile-description mt-7 max-w-2xl text-base font-medium leading-relaxed text-text-muted xs:text-lg sm:mt-8 sm:text-xl">
          <p className='animate__animated animate__lightSpeedInLeft'>
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Profile
