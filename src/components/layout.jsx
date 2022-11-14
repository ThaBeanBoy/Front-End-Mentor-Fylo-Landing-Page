import React, { useState } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

import logo from './logo.svg';
import hamburger from './hamburger.svg';
import close from './close.svg';

const links = [
  {
    title: 'Features',
    link: '/features',
  },
  {
    title: 'Team',
    link: '/team',
  },
  {
    title: 'Sign In',
    link: '/sign-in',
  },
];

const NavLinks = links.map(({ title, link }) => (
  <Link
    to={link}
    className={`min-desktop-width:pr-[34px] py-[8px] last:pb-0 first:pt-0 last:pr-0 hover:decoration-[#bf5050]`}
  >
    {title}
  </Link>
));

function Layout({ children }) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div id='App' className='w-screen min-h-screen'>
      <header className='flex items-center justify-between p-[32px] max-w-[1280px] mx-auto'>
        <Link to='/'>
          <img src={logo} alt='logo image' className='w-[116px] sm:w-auto' />
        </Link>

        <nav className='peer-desktop-nav hidden min-desktop-width:block'>
          {NavLinks}
        </nav>

        <button
          className='cursor-pointer block min-desktop-width:hidden'
          onClick={() => setShowMobileNav(true)}
        >
          <img
            src={hamburger}
            alt='hamburger icon'
            width='32px'
            height='32px'
          />
        </button>
      </header>

      <main>{children}</main>

      {showMobileNav ? (
        <motion.div
          id='mobile-nav-wrapper'
          className='fixed top-0 left-0 w-screen h-screen bg-light-gray/50 z-10 min-desktop-width:hidden'
        >
          <motion.main className='absolute top-0 right-0 h-screen min-w-[200px] bg-light-grayish-blue flex flex-col items-end pt-[32px] pr-[32px]'>
            <button
              className='mb-[32px]'
              onClick={() => setShowMobileNav(false)}
            >
              <img src={close} alt='close image' width='32px' height='32px' />
            </button>

            <ul className='flex flex-col items-end'>{NavLinks}</ul>
          </motion.main>
        </motion.div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Layout;
