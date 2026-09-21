'use client'

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import btcIcon from '../../../public/images/btcIcon.png';

export default function Footer() {

  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className='site-header mt-10 border-t px-5 py-8'>
      <h3 className='site-muted pt-5 text-center font-mono text-xs' > © 2021–{currentYear} {t('copyright')} </h3>
      <h5 className='site-quiet mx-auto mt-4 text-center font-mono text-xs' > {t('paymentsAccepted')} </h5>
      <div className=' flex justify-center mt-[-1rem] ' >
        <Image src={btcIcon} alt="btcIconPayment" width={200} className=' mx:auto ' />
      </div>
    </footer>
  );
}
