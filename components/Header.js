import Image from 'next/image';
import React from 'react';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <header className='sticky top-0 z-50'>
      <div className='flex items-center justify-between py-1 flex-grow bg-amazon_blue'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            objectFit='contain'
            className='cursor-pointer'
            width={150}
            height={40}
          />
        </div>
        <div className='hidden sm:flex items-center h-10 rounded-md bg-yellow-500 hover:bg-yellow-600 flex-grow cursor-pointer max-w-lg'>
          <input
            type='text'
            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
          />
          <SearchIcon className='p-4 h-12' />
        </div>
        <div className='border-[1px] border-transparent text-white flex items-center text-sm space-x-6 mx-6 whitespace-nowrap'>
          <div className='link'>
            <p>Hello Ákos P-Holl</p>
            <p className='font-bold'>Account & list</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p>& Orders</p>
          </div>
          <div className='relative link hidden sm:inline-grid'>
            <p className='bg-yellow-500 px-[4px] rounded-full text-amazon_blue absolute top-0 right-2 text-xs font-bold'>
              0
            </p>
            <ShoppingCartIcon className='text-white h-8' />
            <p>Basket</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
