'use client'

import 'animate.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import profilePIC from '../../../public/images/Foto_perfil.svg';
import { irishGrover } from '../fonts';

function Profile() {
  const t = useTranslations('ProfilePage');

  return (
    <div className='flex ml-[4rem] sm:pb-[18rem] lg:ml-0 lg:justify-center lg:pb-[27rem] w-90% min-w-320 '>
      <div className='lg:w-fit'>
        <div className='animate__animated animate__zoomIn'>
          <Image
            className=" sm:w-[10rem] sm:mx-auto sm:mt-[8rem] lg:mt-[15rem] lg:mx-[70%] xl:mx-[77%] 2xl:mx-[75%] 2xl:w-[13rem] 3xl:mx-[80%] "
            src={profilePIC}
            alt='profilePIC'
          />
        </div>
        <div className=" sm:text-center sm:mt-[2rem] lg:text-2xl lg:ml-[-22rem] lg:mt-[-6rem] 2xl:mt-[-9rem] 2xl:ml-[-30rem] xl:text-4xl 2xl:text-4xl 2xl:text-5xl 3xl:ml-[-35rem] 3xl:mt-[-11rem] text-[#53DA00E6] font-bold ">
          <p className='animate__bounceIn'>CALIL SOUSA MATTOS</p>
        </div>
        <div className='animate__animated animate__pulse'>
          <div className=" sm:text-center lg:ml-[-21.8rem] xl:text-xl 2xl:text-xl 2xl:ml-[-31rem] 3xl:ml-[-36rem] 3xl:text-2xl font-semibold ">
            {t('position')}
          </div>
        </div>
        <div className={irishGrover.className}>
          <div className=" sm:mt-[2rem] sm:ml-[1rem] sm:mr-[1rem] lg:ml-[7rem] lg:mr-[25rem] 2xl:text-xl 2xl:ml-[10rem] 2xl:mr-[35%] 3xl:ml-[15rem] 3xl:mr-[40%] 3xl:text-2xl text-justify font-bold font-irish text-[#363537]  ">
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
