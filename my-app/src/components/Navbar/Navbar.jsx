import React from 'react';
import Link from 'next/link';
import DarkMode from './DarkMode';
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';

// Define the Navlinks array
export const Navlinks = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'About', link: '/about' },
  { id: 3, name: 'Services', link: '/services' },
  { id: 4, name: 'Contact', link: '/contact' },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300'>
      <div className="container py-2 md:py-0">
        <div className='flex items-center justify-between'>
          {/* logo section */}
          <Link href="/" className='text-3xl font-bold'>
            <span>Cab</span>
            <span className='text-primary'>hub</span>
          </Link>
          {/* desktop menu section */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6'>
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className='py-4'>
                  <Link href={link} className='text-lg font-medium text-black dark:text-white py-2 px-4 rounded-full hover:bg-primary duration-300'>
                    {name}
                  </Link>
                </li>
              ))}
              {/* dark mode feature */}
              <DarkMode />
            </ul>
          </div>
          {/* mobile menu section */}
          <div className='md:hidden flex items-center gap-4'>
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
