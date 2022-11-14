import * as React from 'react';
import { Link } from 'gatsby';

import logo from '../logo.svg';

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
  return (
    <>
      <header className='flex items-center justify-between p-[32px]'>
        <Link to='/'>
          <img src={logo} alt='logo image' className='mobile:w-[116px]' />
        </Link>

        <nav>
          {links.map(({ title, link }) => (
            <Link to={link} className='pr-[34px] last:pr-0'>
              {title}
            </Link>
          ))}
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
