'use client'

import Link from 'next/link';


//Import icons
import { useTranslations } from 'next-intl';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin, BsMailbox2 } from 'react-icons/bs';

export default function Contact() {

  const t = useTranslations('Contact');


  return (
    <div className=' sm:ml-[4rem] sm:mt-20 2xl:ml-[4rem] min-w-320 ' >

      <h1 className=' text-4xl text-center sm:font-bold lg:font-normal lg:hover:font-bold cursor-pointer ' >{t('getInContact')}</h1>

      <div className=' sm:ml-[-0.22rem] 2xl:ml-[-2.2rem] flex flex-col text-center mt-20 ' >
        <BsMailbox2 color='red' size={45} className=' mx-auto ' />
        <Link href="mailto:contatocsmpm@gmail.com" className=' text-xl text-center hover:font-bold mb-10 ' >contatocsmpm@gmail.com</Link>
        <BsLinkedin color='blue' size={45} className=' mx-auto ' />
        <Link href="https://www.linkedin.com/in/calil-mattos-programador/" className=' text-xl text-center hover:font-bold mb-10 ' >Linkedin</Link>
        <AiFillGithub color='black' size={45} className=' mx-auto ' />
        <Link href="https://github.com/casmtts?tab=repositories" className=' text-xl text-center hover:font-bold ' >GitHub</Link>
      </div>
    </div>
  );
}