import Link from 'next/link';
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

const logoFont = Monoton({ weight: '400', subsets: ['latin'] });
const linksFont = Inter({ weight: '400', subsets: ['latin'] });

export default function Navbar() {
  return (
    <nav className='flex h-12 justify-between bg-slate-300 items-center shadow-md px-4'>
      <Link
        href='/'
        className={`${logoFont.className} text-3xl  text-red-700   `}
      >
        Sugardipity
      </Link>
      <div className={linksFont.className}>
        <Link href='/' className='p-2'>
          Cookies
        </Link>
        <Link href='/' className='p-2'>
          Workshops
        </Link>
        <Link href='/' className='p-2'>
          Baking Supplies
        </Link>
        <Link href='/' className='p-2'>
          About
        </Link>
        <Link href='/' className='p-2'>
          Login
        </Link>
      </div>
    </nav>
  );
}
