'use client'

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import btcIcon from '../../../public/images/btcIcon.png';

export default function Footer() {

  const t = useTranslations('Footer');

  return (
    <footer className='ml-16 mt-10 bg-footer'>
      <h3 className=' text-white text-center font-[bold] pt-5 ' > {t('copyright')} 2021. </h3>
      <h5 className=' text-white text-center mt-4 mx-auto ' > {t('paymentsAccepted')} </h5>
      <div className=' flex justify-center mt-[-1rem] ' >
        <Image src={btcIcon} alt="btcIconPayment" width={200} className=' mx:auto ' />
      </div>
    </footer>
  );
}
