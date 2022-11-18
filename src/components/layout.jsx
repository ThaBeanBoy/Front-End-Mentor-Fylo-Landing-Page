import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// import logo from "./logo.svg";
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
  {
    title: "My Fiver Gigs",
    link: "https://www.fiverr.com/gibbs_dev?up_rollout=true",
    a_tag: true,
    color: "cool",
  },
];

const NavLinks = links.map(({ title, link, a_tag, color }, index) => {
  const styling_link = `capitalize py-[8px] first:pt-0 last:pb-0 last:pr-0 hover:text-${
    color !== undefined ? color : "bright-blue"
  } min-desktop-width:pr-[34px]`;

  return !a_tag ? (
    <Link
      key={index}
      to={link}
      className="py-[8px] first:pt-0 last:pb-0 last:pr-0 hover:text-bright-blue min-desktop-width:pr-[34px]"
    >
      {title}
    </Link>
  ) : (
    <a href={link} className={styling_link}>
      {title}
    </a>
  );
});

function Layout({ children }) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div id="App" className="min-h-screen w-screen">
      <div id="wrapper" className="sticky top-0 left-0 bg-[white]">
        <header className="mx-auto flex w-screen max-w-[1280px] items-center justify-between p-[32px]">
          <Link to="/">
            {/* <img src={logo} alt="logo image" className="sm:w-auto w-[116px]" /> */}
            <StaticImage
              src="../images/logo.svg"
              className="w-[116px] min-desktop-width:w-auto"
              alt="logo"
            />
          </Link>

          <nav className="peer-desktop-nav hidden min-desktop-width:block">
            {NavLinks}
          </nav>

          <button
            className="block cursor-pointer min-desktop-width:hidden"
            onClick={() => setShowMobileNav(true)}
          >
            <StaticImage
              src="../images/hamburger.svg"
              width={32}
              height={32}
              alt="mobile navigation opening icon"
            />
          </button>
        </header>
      </div>

      <main>{children}</main>

      {showMobileNav ? (
        <div
          id="mobile-nav-wrapper"
          className="fixed top-0 left-0 z-10 h-screen w-screen bg-light-gray/50 min-desktop-width:hidden"
          onClick={() => console.log("outside clicked")}
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
