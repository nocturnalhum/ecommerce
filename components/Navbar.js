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
    <nav className='py-3 px-3 bg-white shadow md:flex md:items-center md:justify-between'>
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
        className={`md:flex md:items-center gap-2 md:gap-3 lg:gap-8 z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 pl-7 md:pl-0 transition-all ease-in-out duration-1000 ${
          menuOpen ? 'top-12' : 'top-[-400px] inline-block  '
        }
      `}
      >
        <li className='font-bold hover:text-cyan-700  my-4 md:my-0 md:mx-2'>
          <Link href='/'>
            <span className='flex gap-2'>
              <FaCookie className='text-2xl md:max-lg:hidden lg:block' />
              Cookies
            </span>
          </Link>
        </li>
        <li className='font-bold hover:text-cyan-70 my-6 md:my-0 md:mx-2'>
          <Link href='/'>
            <span className='flex gap-2'>
              <GrWorkshop className='text-2xl md:max-lg:hidden lg:block' />
              Workshops
            </span>
          </Link>
        </li>
        <li className='font-bold hover:text-cyan-700 my-6 md:my-0 md:mx-2'>
          <Link href='/'>
            {' '}
            <span className='flex gap-2'>
              <GiCookingGlove className='text-2xl md:max-lg:hidden lg:block' />
              Baking Supplies
            </span>
          </Link>
        </li>
        <li className='font-bold hover:text-cyan-700 my-6 md:my-0 md:mx-2'>
          <Link href='/'>
            {' '}
            <span className='flex gap-2'>
              <MdOutlineMail className='text-2xl md:max-lg:hidden lg:block' />
              Contact
            </span>
          </Link>
        </li>

        <button className='bg-blue-500 text-blue-50 duration-500 px-6 py-1  hover:bg-blue-600 rounded-md'>
          Sign In
        </button>
      </ul>
    </nav>
  );
}
