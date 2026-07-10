'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import btcIcon from '../../../public/images/btcIcon.png'

export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="page-content mt-10 bg-footer py-6 xs:py-8">
      <p className="text-center text-sm font-bold text-white xs:text-base">{t('copyright')} 2021.</p>
      <p className="mx-auto mt-4 max-w-md text-center text-sm text-white xs:text-base">{t('paymentsAccepted')}</p>
      <div className="mt-2 flex justify-center">
        <Image src={btcIcon} alt="Bitcoin payment accepted" width={200} className="mx-auto" />
      </div>
    </footer>
  )
}
