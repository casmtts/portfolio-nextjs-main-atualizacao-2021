'use client'

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import cvIcon from '../../../public/images/curriculum-vitae-portfolio-svgrepo-com.svg'

const CV_LINKS = [
  { label: 'Curriculum', href: 'https://drive.google.com/file/d/1MQq9EjBxNP0TpwQUz7CE14kLI7UnfUAz/view?usp=sharing' },
  { label: 'Currículo', href: 'https://drive.google.com/file/d/1eAKYOsWAmL_1UetWN0WZnG0uNe7aoovo/view?usp=sharing' },
] as const

export default function DropdownCV() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex w-full items-center justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-inset hover:bg-gray-50">
        <div className="flex flex-row items-center text-[#4F9D69] transition-transform hover:scale-110">
          <Image src={cvIcon} alt="" className="w-10" />
          <span className="pt-1">CV</span>
        </div>
        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
      </MenuButton>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="py-1">
            {CV_LINKS.map(({ label, href }) => (
              <MenuItem key={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-black hover:font-semibold"
                >
                  {label}
                </Link>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
