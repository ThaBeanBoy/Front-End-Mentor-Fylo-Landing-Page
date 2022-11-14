import React, { useState } from 'react';
import { Link } from 'gatsby';

import logo from '../logo.svg';
import hurmburger from '../hurmburger.svg';
import close from '../close.svg';

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

function Layout({ children }) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div id='App' className='w-[100vw] min-h-[100vh]'>
      <header className='flex items-center justify-between p-[32px]'>
        <Link to='/'>
          <img src={logo} alt='logo image' className='mobile:w-[116px]' />
        </Link>

        <nav className='peer-desktop-nav hidden min-desktop-width:block'>
          {links.map(({ title, link }) => (
            <Link to={link} className='pr-[34px] last:pr-0'>
              {title}
            </Link>
          ))}
        </nav>

        <img
          src={hurmburger}
          className='cursor-pointer hidden peer-desktop-nav-visible:block'
          alt='hurmburger icon'
          width='32px'
          height='32px'
        />
      </header>

      <main>{children}</main>

      {showMobileNav ? <div id='mobile-nav'></div> : <></>}
    </div>
  );
}

export default Layout;
