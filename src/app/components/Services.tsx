'use client'

import Image from 'next/image';

import appIcon from '../../../public/images/app.png';
import backEndIcon from '../../../public/images/back-end.png';
import frontEndIcon from '../../../public/images/front-end.png';
import landingpageIcon from '../../../public/images/landing-page.png';
import cybersecurityIcon from '../../../public/images/lock-protection-privacy-cyber-security-safety-svgrepo-com.svg';
import seoIcon from '../../../public/images/seo.png';
import sistemasIcon from '../../../public/images/sistemas.png';
import uiuxIcon from '../../../public/images/ui-ux.png';
import websiteIcon from '../../../public/images/web-site.png';

import { useTranslations } from 'next-intl';
import { Mohave } from 'next/font/google';

const mohave = Mohave({
  subsets: ['latin'],
  weight: '300'
})


function Services() {

  const t = useTranslations('ServicesPage');

  return (

    <section className='ml-[4rem] h-full min-w-320'>

      <h2 className='text-center font-bold text-3xl xl:text-4xl 2xl:text-4xl mb-20 bg-[#00FF80] py-2'>{t('title')}</h2>

      {/* CARDS SERVIÇOS */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-[5%] xl:px-[7%] 2xl:px-[10%]">

        <div className="w-full h-[30rem]">
          <Image className='mx-auto pt-10' src={frontEndIcon} alt='frontEndIcon' width={150} height={110} />
          <h3 className='text-center mt-5 font-bold'>{t('frontEndTitle')}</h3>
          <div className={mohave.className}>
            <p className='text-justify px-[5%] mt-[8%]'>
              {t('frontEndDescription')}
            </p>
          </div>
        </div>

        <div className="w-full h-[30rem]">
          <Image className='mx-auto pt-10' src={backEndIcon} alt='backEndIcon' width={150} height={150} />
          <h3 className='text-center mt-5 font-bold'>{t('backEndTitle')}</h3>
          <div className={mohave.className}>
            <p className='text-justify px-[5%] mt-[8%]'>
              {t('backEndDescription')}
            </p>
          </div>
        </div>

        <div className="w-full h-[30rem]">
          <Image className='mx-auto pt-10' src={sistemasIcon} alt='sistemasIcon' width={150} height={150} />
          <h3 className='text-center mt-5 font-bold'>{t('devSystemsTitle')}</h3>
          <div className={mohave.className}>
            <p className='text-justify px-[5%] mt-[8%]'>
              {t('devSystemsDescription')}
            </p>
          </div>
        </div>

        <div className="w-full h-[30rem]">
          <Image className='mx-auto pt-10' src={appIcon} alt='appIcon' width={150} height={150} />
          <h3 className='text-center mt-5 font-bold'>{t('devAppTitle')}</h3>
          <div className={mohave.className}>
            <p className='text-justify px-[5%] mt-[8%]'>{t('devAppDescription')}</p>
          </div>
        </div>

        <div className="w-full h-[30rem]">
          <Image className='mx-auto pt-10' src={websiteIcon} alt='websiteIcon' width={150} height={150} />
          <h3 className='text-center mt-5 font-bold'>{t('Site&HotsiteTitle')}</h3>
          <div className={mohave.className}>
            <p className='text-justify px-[5%] mt-[8%]'>{t('Site&HotsiteDescription')}</p>
          </div>
        </div>

        <div className="w-full h-[30rem]">
          <Image className='mx-auto pt-10' src={landingpageIcon} alt='landingpageIcon' width={150} height={150} />
          <h3 className='text-center mt-5 font-bold'>{t('LandingPagesTitle')}</h3>
          <div className={mohave.className}>
            <p className='text-justify px-[5%] mt-[8%]'>{t('LandingPagesDescription')}</p>
          </div>
        </div>

        <div className="w-full h-[30rem]">
          <Image className='mx-auto pt-10' src={uiuxIcon} alt='uiuxIcon' width={150} height={150} />
          <h3 className='text-center mt-5 font-bold'>{t('uiUxTitle')}</h3>
          <div className={mohave.className}>
            <p className='text-justify px-[5%] mt-[8%]'>{t('uiUxDescription')}</p>
          </div>
        </div>

        <div className="w-full h-[30rem]">
          <Image className='mx-auto pt-10' src={seoIcon} alt='seoIcon' width={150} height={150} />
          <h3 className='text-center mt-5 font-bold'>{t('seoTitle')}</h3>
          <div className={mohave.className}>
            <p className='text-justify px-[5%] mt-[8%]'>{t('seoDescription')}</p>
          </div>
        </div>

        <div className="w-full h-[30rem] mb-[10rem]">
          <Image className='mx-auto pt-10' src={cybersecurityIcon} alt='cybersecurityIcon' width={150} height={150} />
          <h3 className='text-center mt-5 font-bold'>{t('secInfoTitle')}</h3>
          <div className={mohave.className}>
            <p className='text-justify px-[5%] mt-[8%]'>{t('secInfoDescription')}</p>
          </div>
        </div>

      </div>

    </section>

  )
}

export default Services