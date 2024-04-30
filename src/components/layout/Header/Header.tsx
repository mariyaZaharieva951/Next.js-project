'use client'
import { useState } from 'react';
import Link from 'next/link';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='flex justify-start items-center mx-auto max-w-6xl gap-12 font-custom-font m-5'>
      <div className='flex justify-between content-center items-center gap-6 py-2'>
        <div className=''>
          <Link href="/">
            <img className='w-full' src="./assets/logo.png"/>
          </Link>
        </div>
      </div>

      <nav className='gap-12 ml-10 hidden md:block lg:flex items-center content-center text-sm py-2'>
        <div className=''>
          <ul className='flex justify-between gap-x-4  whitespace-nowrap mx-5'>
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

        <div className='flex justify-between gap-12 ml-12 pl-12 text-xs font-bold'>
            <button className='border-2 bg-white rounded py-2 px-4'>Log in</button>
            <button className='border-2 bg-white rounded py-2 px-4 text-white-text bg-button-bg'>Try for Free</button>
        </div>
      </nav>

      {/* <div className='md:hidden flex justify-end relative'>
        {isOpen && (
          <nav className='absolute top-9 right-0 bg-white text-custom-bg shadow-md rounded-md'>
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
      </div> */}
    </header>
  );
};

export default Header;