import { FaCookie } from 'react-icons/fa';
import { GiCookingGlove } from 'react-icons/gi';
import { GrWorkshop } from 'react-icons/gr';
import { MdOutlineMail } from 'react-icons/md';

const Links = [
  {
    name: 'Cookies',
    link: '/cookies',
    icon: <FaCookie />,
  },
  {
    name: 'Workshops',
    link: '/workshop',
    icon: <GrWorkshop />,
  },
  {
    name: 'Baking Supplies',
    link: '/supplies',
    icon: <GiCookingGlove />,
  },
  {
    name: 'Contact',
    link: '/contact',
    icon: <MdOutlineMail />,
  },
];

export default Links;
