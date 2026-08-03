'use client'

import Link from 'next/link';


//Import icons
import { useTranslations } from 'next-intl';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin, BsMailbox2 } from 'react-icons/bs';

export default function Contact() {

  const t = useTranslations('Contact');


  return (
    <section id='contact' className='content-section scroll-mt-20 text-center' aria-labelledby='contact-title'>

      <h2 id='contact-title' className='text-3xl font-bold sm:text-4xl'>{t('getInContact')}</h2>

      <div className='mt-12 flex flex-col text-center'>
        <BsMailbox2 color='red' size={45} className=' mx-auto ' />
        <Link href="mailto:contatocsmpm@gmail.com" className=' text-xl text-center hover:font-bold mb-10 ' >contatocsmpm@gmail.com</Link>
        <BsLinkedin color='blue' size={45} className=' mx-auto ' />
        <Link href="https://www.linkedin.com/in/calil-mattos-programador/" target='_blank' rel='noopener noreferrer' className=' text-xl text-center hover:font-bold mb-10 ' >LinkedIn</Link>
        <AiFillGithub color='black' size={45} className=' mx-auto ' />
        <Link href="https://github.com/casmtts?tab=repositories" target='_blank' rel='noopener noreferrer' className=' text-xl text-center hover:font-bold ' >GitHub</Link>
      </div>
    </section>
  );
}
