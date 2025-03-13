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

    <section className=' sm:ml-[4rem] h-full min-w-320 ' >

      <h2 className=' text-center md:pr-5 font-bold text-3xl mb-20 bg-[#00FF80] '>{t('title')}</h2>

      {/* CARDS SERVIÇOS */}
      <div className=" mx-auto lg:grid grid-cols-3 gap-4 sm:flex sm:flex-col flex-wrap   ">

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%]  ">
          <Image className=' mx-auto pt-10 ' src={frontEndIcon} alt='frontEndIcon https://www.flaticon.com/free-icons/web-design' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>{t('frontEndTitle')}</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>
              {t('frontEndDescription')}
            </p>
          </div>
        </div>

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%]  ">
          <Image className=' mx-auto pt-10 ' src={backEndIcon} alt='backEndIcon https://www.flaticon.com/free-icons/web-design' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>{t('backEndTitle')}</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>
              {t('backEndDescription')}
            </p>
          </div>
        </div>

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%]  ">
          <Image className=' mx-auto pt-10 ' src={sistemasIcon} alt='sistemasIcon https://www.flaticon.com/free-icons/web-design' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>{t('devSystemsTitle')}</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>
              {t('devSystemsDescription')}
            </p>
          </div>
        </div>

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%]  ">
          <Image className=' mx-auto pt-10 ' src={appIcon} alt='appIcon https://www.flaticon.com/free-icons/web-design' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>{t('devAppTitle')}</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>{t('devAppDescription')}</p>
          </div>
        </div>

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%]  ">
          <Image className=' mx-auto pt-10 ' src={websiteIcon} alt='websiteIcon https://www.flaticon.com/free-icons/web-design' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>{t('Site&HotsiteTitle')}</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>{t('Site&HotsiteDescription')}</p>
          </div>
        </div>

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%]  ">
          <Image className=' mx-auto pt-10 ' src={landingpageIcon} alt='landingpageIcon https://www.flaticon.com/free-icons/web-design' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>{t('LandingPagesTitle')}</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>{t('LandingPagesDescription')}</p>
          </div>
        </div>

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%]  ">
          <Image className=' mx-auto pt-10 ' src={uiuxIcon} alt='uiuxIcon https://www.flaticon.com/free-icons/web-design' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>{t('uiUxTitle')}</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>{t('uiUxDescription')}</p>
          </div>
        </div>

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%]  ">
          <Image className=' pl-2 ml-auto mr-auto pt-10 ' src={seoIcon} alt='seoIcon https://www.flaticon.com/free-icons/web-design' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>{t('seoTitle')}</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>{t('seoDescription')}</p>
          </div>
        </div>

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%] mb-[10rem] ">
          <Image className=' mx-auto pt-10 ' src={cybersecurityIcon} alt='cybersecurityIcon' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>{t('secInfoTitle')}</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>{t('secInfoDescription')}</p>
          </div>
        </div>

      </div>

    </section>

  )
}

export default Services