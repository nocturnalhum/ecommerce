import Link from 'next/link';
import { useState } from 'react';
import {
  Alex_Brush,
  Arizonia,
  Inter,
  Megrim,
  Modak,
  Monoton,
  Oi,
  Playball,
  Poiret_One,
  Train_One,
} from '@next/font/google';
import { HiBars3, HiOutlineUserCircle } from 'react-icons/hi2';
import { IoClose, IoMenu, IoMenuSharp } from 'react-icons/io5';
import { RxCookie } from 'react-icons/rx';
import { FaCookie } from 'react-icons/fa';
import { GiCookingGlove } from 'react-icons/gi';
import { GrWorkshop } from 'react-icons/gr';
import { MdOutlineMail } from 'react-icons/md';

const logoFont = Monoton({ weight: '400', subsets: ['latin'] });
const linksFont = Inter({ weight: '400', subsets: ['latin'] });

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = (prev) => setMenuOpen(!prev);
  return (
    <nav className='p-2 bg-white shadow md:flex md:items-center md:justify-between'>
      <div className='flex justify-between items-center'>
        <span className='text'>
          <Link href='/'>
            <h1
              className={`${logoFont.className} text-2xl lg:text-3xl  text-red-700`}
            >
              Sugardipity
            </h1>
          </Link>
        </span>

        <span className='text-3xl cursor-pointer md:hidden block'>
          {menuOpen ? (
            <IoClose onClick={() => setMenuOpen(!menuOpen)} />
          ) : (
            <IoMenu onClick={() => setMenuOpen(!menuOpen)} />
          )}
        </span>
      </div>
      <ul
        className={`md:flex md:items-center gap-2 md:gap-3 lg:gap-10 z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 pl-7 md:pl-0 transition-all ease-in-out duration-1000 ${
          menuOpen ? 'top-12' : 'top-[-400px] inline-block  '
        }
      `}
      >
        <li className='font-bold hover:text-cyan-700  my-4 md:my-0 md:mx-2'>
          <Link href='/'>
            <span className='flex gap-2'>
              <FaCookie className='text-2xl hidden lg:block' />
              Cookies
            </span>
          </Link>
        </li>
        <li className='font-bold hover:text-cyan-70 my-6 md:my-0 md:mx-2'>
          <Link href='/'>
            <span className='flex gap-2'>
              <GrWorkshop className='text-2xl hidden lg:block' />
              Workshops
            </span>
          </Link>
        </li>
        <li className='font-bold hover:text-cyan-700 my-6 md:my-0 md:mx-2'>
          <Link href='/'>
            {' '}
            <span className='flex gap-2'>
              <GiCookingGlove className='text-2xl hidden lg:block' />
              Baking Supplies
            </span>
          </Link>
        </li>
        <li className='font-bold hover:text-cyan-700 my-6 md:my-0 md:mx-2'>
          <Link href='/'>
            {' '}
            <span className='flex gap-2'>
              <MdOutlineMail className='text-2xl hidden lg:block' />
              Contact
            </span>
          </Link>
        </li>

        <button className='bg-blue-500 text-blue-50 duration-500 px-6 py-1  hover:bg-blue-600 rounded-md'>
          Sign In
        </button>
      </ul>
    </nav>
    // <nav className='flex flex-col h-12 justify-between bg-slate-300 items-center shadow-md px-4'>
    //   <Link href='/'>
    //     <h1
    //       className={`${logoFont.className} text-2xl md:text-3xl  text-red-700`}
    //     >
    //       Sugardipity
    //     </h1>
    //   </Link>
    //   <div
    //     className={`${linksFont.className} text-md sm:flex sm:items-center justify-center gap-2 md:gap-6`}
    //   >
    //     <Link href='/' className='font-bold hover:text-cyan-700  '>
    //       Cookies
    //     </Link>
    //     <Link href='/' className='font-bold hover:text-cyan-700  '>
    //       Workshops
    //     </Link>
    //     <Link href='/' className='font-bold hover:text-cyan-700  '>
    //       Baking Supplies
    //     </Link>
    //     <Link href='/' className='font-bold hover:text-cyan-700  '>
    //       Contact
    //     </Link>
    //   </div>
    //   <div className='flex items-center  '>
    //     <HiOutlineUserCircle className='text-2xl mr-1 hidden sm:block' />
    //     <div className='font-bold hidden md:block'>
    //       <Link href='/'>Sign In</Link>
    //     </div>
    //     <div className='flex gap-2 text-2xl sm:hidden ml-2'>
    //       <HiBars3 />
    //     </div>
    //   </div>
    // </nav>
  );
}
