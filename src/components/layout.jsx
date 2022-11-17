import React, { useState } from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

import logo from "./logo.svg";
import hamburger from "./hamburger.svg";
import close from "./close.svg";

const links = [
  {
    title: "Features",
    link: "/features",
  },
  {
    title: "Team",
    link: "/team",
  },
  {
    title: "Sign In",
    link: "/sign-in",
  },
];

const NavLinks = links.map(({ title, link }, index) => (
  <Link
    key={index}
    to={link}
    className={`py-[8px] first:pt-0 last:pb-0 last:pr-0 hover:decoration-[#bf5050] min-desktop-width:pr-[34px]`}
  >
    {title}
  </Link>
));

function Layout({ children }) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div id="App" className="min-h-screen w-screen">
      <header className="sticky top-0 left-0 mx-auto flex w-screen max-w-[1280px] items-center justify-between bg-[white] p-[32px]">
        <Link to="/">
          <img src={logo} alt="logo image" className="sm:w-auto w-[116px]" />
        </Link>

        <nav className="peer-desktop-nav hidden min-desktop-width:block">
          {NavLinks}
        </nav>

        <button
          className="block cursor-pointer min-desktop-width:hidden"
          onClick={() => setShowMobileNav(true)}
        >
          <img
            src={hamburger}
            alt="hamburger icon"
            width="32px"
            height="32px"
          />
        </button>
      </header>

      <main>{children}</main>

      {showMobileNav ? (
        <div
          id="mobile-nav-wrapper"
          className="fixed top-0 left-0 z-10 h-screen w-screen bg-light-gray/50 min-desktop-width:hidden"
        >
          <main className="absolute top-0 right-0 flex h-screen min-w-[200px] flex-col items-end bg-light-grayish-blue pt-[32px] pr-[32px]">
            <button
              className="mb-[32px]"
              onClick={() => setShowMobileNav(false)}
            >
              <img src={close} alt="close image" width="32px" height="32px" />
            </button>

            <ul className="flex flex-col items-end">{NavLinks}</ul>
          </main>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Layout;
