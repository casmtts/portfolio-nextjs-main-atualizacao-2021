'use client'

import 'animate.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import profilePIC from '../../../public/images/Foto_perfil.svg';
import { irishGrover } from '../fonts';

function Profile() {
  const t = useTranslations('ProfilePage');

  return (
    <div className='profile-shell flex ml-[4rem] sm:pb-[18rem] min-w-320 min-[1025px]:w-[calc(100%-4rem)] min-[1025px]:min-h-[calc(100svh-4rem)] min-[1025px]:items-center min-[1025px]:justify-center min-[1025px]:px-[clamp(6rem,16vw,20rem)] min-[1025px]:pb-0'>
      <div className='profile-content min-[1025px]:flex min-[1025px]:w-full min-[1025px]:max-w-[58rem] min-[1025px]:flex-col min-[1025px]:items-center min-[1025px]:justify-center min-[1025px]:text-center'>
        <div className='animate__animated animate__zoomIn'>
          <Image
            className="sm:w-[10rem] sm:mx-auto sm:mt-[8rem] min-[1025px]:mt-0 min-[1025px]:w-[12rem] min-[1025px]:mx-auto"
            src={profilePIC}
            alt='profilePIC'
          />
        </div>
        <div className="profile-name sm:text-center sm:mt-[2rem] min-[1025px]:mt-6 min-[1025px]:text-4xl min-[1025px]:leading-tight text-[#53DA00E6] font-bold">
          <p className='animate__bounceIn'>CALIL SOUSA MATTOS</p>
        </div>
        <div className='animate__animated animate__pulse'>
          <div className="profile-position sm:text-center min-[1025px]:mt-2 min-[1025px]:text-2xl font-semibold">
            {t('position')}
          </div>
        </div>
        <div className={irishGrover.className}>
          <div className="profile-description sm:mt-[2rem] sm:ml-[1rem] sm:mr-[1rem] min-[1025px]:mt-6 min-[1025px]:max-w-[58rem] min-[1025px]:mx-auto min-[1025px]:text-2xl text-justify font-bold font-irish text-[#363537]">
            <p className='animate__animated animate__lightSpeedInLeft'>
              {t('description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
