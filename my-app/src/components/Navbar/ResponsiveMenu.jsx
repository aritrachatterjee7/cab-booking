import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import { Navlinks } from './Navbar';

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? 'left-0' : '-left-full'
      } fixed bottom-0 top-0 z-20 flex flex-col bg-white dark:bg-dark dark:text-white px-8 pb-6 pt-16 text-black duration-300 md:hidden rounded-r-xl shadow-md w-[60%]`}
    >
      <div>
        {/* user top section */}
        <div className="flex items-center gap-3 mb-8">
          <FaUserCircle className="text-5xl" />
          <div>
            <h1>Hello user</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
      </div>
      {/* navigation links section */}
      <nav className="flex-grow flex flex-col items-start">
        <ul className="w-full">
          {Navlinks.map(({ id, name, link }) => (
            <li key={id} className="py-4 w-full">
              <Link
                href={link}
                className="text-xl font-medium text-black dark:text-white duration-300 block w-full text-left"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveMenu;
