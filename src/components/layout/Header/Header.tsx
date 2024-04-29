'use client'
import { useState } from 'react';
import Link from 'next/link';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='flex justify-start items-center mx-auto max-w-6xl gap-5 font-font-sg font-bold'>
      <div className='flex justify-between content-center items-center gap-6'>
        <div className='mt-0 pt-0 '>
          <Link href="/">
            <img className='w-full' src="./assets/logo.png"/>
          </Link>
        </div>
      </div>

      <nav className='hidden md:block lg:flex items-center'>
        <div className='mt-4'>
          <ul className='flex justify-between gap-x-4 text-sm whitespace-nowrap mx-5'>
            <li>
              <Link href="/product" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
                Product
              </Link>
            </li>
            <li>
              <Link href="/pricing" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/company" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
                Company
              </Link>
            </li>
            <li>
              <Link href="/blog" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
            <button>Log in</button>
            <button>Try for Free</button>
        </div>
      </nav>

      <div className='md:hidden flex justify-end relative'>
        {isOpen && (
          <nav className='absolute top-9 right-0 bg-white text-custom-green shadow-md rounded-md'>
            <ul className='flex flex-col gap-y-2 text-sm'>
            <li>
              <Link href="/product" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
                Product
              </Link>
            </li>
            <li>
              <Link href="/pricing" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/company" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
                Company
              </Link>
            </li>
            <li>
              <Link href="/blog" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
                Contact
              </Link>
            </li>
            </ul>

            <div>
                <button>Log in</button>
                <button>Try for Free</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;