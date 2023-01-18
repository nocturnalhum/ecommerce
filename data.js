import { FaCookie } from 'react-icons/fa';
import { GiCookingGlove } from 'react-icons/gi';
import { GrWorkshop } from 'react-icons/gr';
import { MdOutlineMail } from 'react-icons/md';

const Links = [
  {
    name: 'Cookies',
    link: '/',
    icon: <FaCookie className='text-2xl md:max-lg:hidden lg:block' />,
  },
  {
    name: 'Workshops',
    link: '/',
    icon: <GrWorkshop className='text-2xl md:max-lg:hidden lg:block' />,
  },
  {
    name: 'Baking Supplies',
    link: '/',
    icon: <GiCookingGlove className='text-2xl md:max-lg:hidden lg:block' />,
  },
  {
    name: 'Contact',
    link: '/',
    icon: <MdOutlineMail className='text-2xl md:max-lg:hidden lg:block' />,
  },
];

export default Links;
