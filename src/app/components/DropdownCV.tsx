'use client'

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import cvIcon from '../../../public/images/curriculum-vitae-portfolio-svgrepo-com.svg';


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  // function Translate
  const t = useTranslations('Navbar');

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-inset hover:bg-gray-50">
          <div className='flex flex-row cursor-pointer pt-0.2 '>

            <div className='flex flex-row cursor-pointer pt-0.2 '>

              <div className=' flex flex-row text-[#4F9D69] hover:scale-110 '>
                <Image src={cvIcon} alt='cvIcon' className=' w-10 ' />

                <h4 className=' sm:pt-[0.5rem] ' > CV </h4>
              </div>
            </div>

          </div>
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute z-10 mt-2 w-[8rem] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {/* Curriculum */}
            <MenuItem>
              {({ focus }: any) => (
                <Link href="https://drive.google.com/file/d/1MQq9EjBxNP0TpwQUz7CE14kLI7UnfUAz/view?usp=sharing"><h4 className=' sm:pt-[0.5rem] flex flex-row text-black ml-6 hover:font-semibold' >Curriculum</h4></Link>

              )}
            </MenuItem>
            <div className='border-b-2'></div>
            {/* Currículo */}
            <MenuItem>
              {({ focus }: any) => (
                <Link href="https://drive.google.com/file/d/1eAKYOsWAmL_1UetWN0WZnG0uNe7aoovo/view?usp=sharing"><h4 className=' sm:pt-[0.5rem] flex flex-row text-black ml-6 hover:font-semibold' >Currículo</h4></Link>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
