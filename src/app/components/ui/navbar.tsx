'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import { Disclosure } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import SearchBar from './search-bar';

export default function Navbar() {
  const [input, setInput] = useState('');
  const router = useRouter();


  const links = [
    { name: 'Dashboard', href: '/', pathName: '/' },
    { name: 'About', href: '/about', pathName: '/about' },
  ]

  const currentPage = usePathname();

  return (
    <Disclosure as="nav" className="bg-gray-200 dark:bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0 text-gray-700 dark:text-white font-bold font-mono">
                  <a href="/">
                    Fraud Free
                  </a>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {links.map((item) => (
                      <Link key={item.name} href={item.href} className={`px-3 py-2 text-sm font-medium 
                        ${currentPage === item.pathName ? 
                          'text-sky-600 border-b border-sky-600 hover:dark:text-gray-100 hover:text-gray-900 hover:border-b hover:border-gray-900 hover:dark:border-gray-100' : 
                          'text-gray-700  dark:text-gray-100 hover:dark:text-gray-100 hover:text-gray-900 hover:border-b hover:border-gray-900 hover:dark:border-gray-100'}
                        `}>
                        {item.name}
                      </Link>
                    ))
                    }
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <SearchBar />
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
             
              {links.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                  >
                    {item.name}
                  </Disclosure.Button>  
                ))
              }
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}