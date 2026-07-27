'use client'

import 'animate.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import profilePIC from '../../../public/images/Foto_perfil.svg';
import { irishGrover } from '../fonts';

function Profile() {
  const t = useTranslations('ProfilePage');

  return (
    <section className="ml-[4rem] sm:pb-[18rem] lg:pb-[27rem] w-[90%] min-w-320">
      <div className="flex w-full min-w-0 flex-col items-center lg:items-start">
        <div className="w-full min-w-0 animate__animated animate__zoomIn">
          <Image
            className="mx-auto h-auto w-[10rem] sm:mt-[8rem] lg:mt-[15rem] lg:ml-[70%] xl:ml-[77%] 2xl:ml-[75%] 2xl:w-[13rem] 3xl:ml-[80%]"
            src={profilePIC}
            alt="profilePIC"
          />
        </div>
        <div className="text-center sm:mt-[2rem] lg:ml-[-10rem] lg:text-2xl lg:mt-[-6rem] 2xl:mt-[-9rem] xl:text-4xl 2xl:text-5xl 3xl:ml-[-25rem] 3xl:mt-[-11rem] text-[#53DA00E6] font-bold">
          <p className="animate__bounceIn">CALIL SOUSA MATTOS</p>
        </div>
        <div className="animate__animated animate__pulse">
          <div className="text-center lg:ml-[-10rem] xl:text-xl 2xl:text-xl 3xl:ml-[-25rem] 3xl:text-2xl font-semibold">
            {t('position')}
          </div>
        </div>
        <div className={irishGrover.className}>
          <div className="profile-description sm:mt-[2rem] sm:ml-[1rem] sm:mr-[1rem] lg:ml-[15rem] lg:max-w-[calc(100vw-22rem)] xl:max-w-[calc(100vw-24rem)] 2xl:ml-[10rem] 2xl:max-w-[calc(100vw-28rem)] 3xl:ml-[30rem] 3xl:max-w-[calc(100vw-34rem)] 3xl:text-2xl text-justify font-bold text-[#363537] leading-relaxed whitespace-normal break-words hyphens-auto [overflow-wrap:anywhere] min-w-0">
            <p className="animate__animated animate__lightSpeedInLeft">
              {t('description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
