import Link from 'next/link';
import Links from '../data';
import { useState } from 'react';
import { Inter, Monoton } from '@next/font/google';
import { IoClose, IoMenu } from 'react-icons/io5';

const logoFont = Monoton({ weight: '400', subsets: ['latin'] });
const linksFont = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = (prev) => setMenuOpen(!prev);

  return (
    <nav className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div
          className={`${logoFont.className} font-semibold  text-2xl cursor-pointer flex items-center justify-between
      text-gray-800`}
        >
          Sugardipity
          <span className='text-3xl cursor-pointer md:hidden'>
            {menuOpen ? (
              <IoClose onClick={() => setMenuOpen(!menuOpen)} />
            ) : (
              <IoMenu onClick={() => setMenuOpen(!menuOpen)} />
            )}
          </span>
        </div>

        <ul
          className={`${
            linksFont.className
          } md:flex font-bold pl-8 md:pl-0 lg:gap-10 md:items-center md:gap-2 md:pb-0 pb-12 absolute md:static bg-gray-300 md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-700 ease-in  ${
            menuOpen ? 'top-16' : 'top-[-400px]'
          }`}
        >
          {Links.map((item) => (
            <li
              key={item.name}
              className='font-bold hover:text-cyan-700  my-8 md:my-0'
            >
              <Link href={item.link} as='image'>
                <span className='flex gap-2'>
                  {item.icon}
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
          <button className='bg-blue-500 text-blue-50 duration-500 px-6 py-1  hover:bg-blue-600 rounded-md'>
            Sign In
          </button>
        </ul>
      </div>
    </nav>
  );
}
