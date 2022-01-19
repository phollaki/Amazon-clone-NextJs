import Image from 'next/image';
import React from 'react';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { selectItems } from '../slices/basketSlice';
import { useSelector } from 'react-redux';

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const basket = useSelector(selectItems);

  return (
    <header className='sticky top-0 z-50'>
      <div className='flex items-center justify-between py-1 flex-grow bg-amazon_blue'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            onClick={() => router.push('/')}
            src='https://links.papareact.com/f90'
            objectFit='contain'
            className='cursor-pointer'
            width={150}
            height={40}
          />
        </div>
        <div className='hidden sm:flex overflow-hidden items-center h-10 rounded-md bg-yellow-500 hover:bg-yellow-600 flex-grow cursor-pointer max-w-lg'>
          <p className='hidden bg-gray-200 h-12 md:flex items-center px-2'>
            All
          </p>
          <input
            type='text'
            className='p-2 h-full w-6 flex-grow flex-shrink focus:outline-none px-4'
          />
          <SearchIcon className='p-4 h-12' />
        </div>
        <div className='border-[1px] border-transparent text-white flex items-center text-sm space-x-6 mx-6 whitespace-nowrap'>
          <div className='link' onClick={session ? signOut : signIn}>
            <p>{session ? `Hello ${session.user.name}` : `SignIn`}</p>
            <p className='font-bold'>Account & list</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p>& Orders</p>
          </div>
          <Link href='/checkout'>
            <div className='relative link hidden sm:inline-grid'>
              <p className='bg-yellow-500 px-[4px] rounded-full text-amazon_blue absolute top-0 right-2 text-xs font-bold'>
                {basket?.length || 0}
              </p>
              <ShoppingCartIcon className='text-white h-8' />
              <p>Basket</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='flex items-center space-x-3 bg-amazon_blue-light text-white p-1 pl-3 text-sm'>
        <p className='flex items-center link flex-row'>
          <MenuIcon className='h-5 mr-1 ' />
          All
        </p>
        <p className='link'>Best Sellers</p>
        <p className='link'>Amazon Basics</p>
        <p className='link'>Today's Deals</p>
        <p className='link hidden md:inline-grid'>New Releases</p>
        <p className='link hidden md:inline-grid'>Customer Service</p>
        <p className='link hidden md:inline-grid'>Books</p>
        <p className='link hidden md:inline-grid'>PC & Video Games</p>
        <p className='link hidden md:inline-grid'>Gift Ideas</p>
      </div>
    </header>
  );
}

export default Header;
