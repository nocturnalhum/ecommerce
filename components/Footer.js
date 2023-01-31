import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { HiEnvelope } from 'react-icons/hi2';
import { Monoton } from '@next/font/google';

const logoFont = Monoton({ weight: '400', subsets: ['latin'] });

export default function Footer() {
  return (
    <>
      <div className='fixed left-0 bottom-0 flex flex-col justify-center items-center h-28 w-full bg-gray-700 shadow-inner'>
        <div className={`${logoFont.className} text-red-700 text-2xl mb-1 `}>
          Sugardipity
        </div>
        <div className='flex mb-2'>
          <div className='border-2 p-1 mx-2 rounded-full    '>
            <Link href='https://www.facebook.com/sugardipity'>
              <FaFacebook className='text-xl text-white ' />
            </Link>
          </div>
          <div className='border-2 p-1 mx-2 rounded-full'>
            <Link href='/contact'>
              <HiEnvelope className='text-xl text-gray-100 ' />
            </Link>
          </div>
        </div>
        <div className='text-gray-100 text-xs'>
          Copyright © 2023 Sugardipity. All rights reserved.
        </div>
      </div>
    </>
  );
}
