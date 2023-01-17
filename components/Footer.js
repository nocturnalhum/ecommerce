import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { HiEnvelope } from 'react-icons/hi2';
import { Monoton } from '@next/font/google';

const logoFont = Monoton({ weight: '400', subsets: ['latin'] });

export default function Footer() {
  return (
    <>
      <div className='flex flex-col justify-center items-center h-56 bg-gray-700 shadow-inner py-12'>
        <logo className={`${logoFont.className} text-red-700 text-4xl mb-6`}>
          Sugardipity
        </logo>
        <div className='flex mb-4'>
          <div className='border-2 p-3 mx-2 rounded-full    '>
            <Link href='https://www.facebook.com/sugardipity'>
              <FaFacebook className='text-2xl text-white ' />
            </Link>
          </div>
          <div className='border-2  p-3  mx-2  rounded-full'>
            <Link href='https://www.facebook.com/sugardipity'>
              <HiEnvelope className='text-2xl text-gray-100 ' />
            </Link>
          </div>
        </div>
        <div className='text-gray-100'>
          Copyright © 2023 Sugardipity. All rights reserved.
        </div>
      </div>
    </>
  );
}
