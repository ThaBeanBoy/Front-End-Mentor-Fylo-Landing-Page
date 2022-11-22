import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

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
    title: "My LinkedIn",
    link: "https://www.linkedin.com/in/tineyi-g-chipoyera-0948b9193/",
    a_tag: true,
    bln_blank: true,
  },
];

const NavLinks = links.map(({ title, link, a_tag, bln_blank }, index) => {
  const styling_link =
    "capitalize py-[8px] first:pt-0 last:pb-0 last:pr-0 hover:text-bright-blue min-desktop-width:pr-[34px]";

  return !a_tag ? (
    <Link
      key={index}
      to={link}
      className="py-[8px] first:pt-0 last:pb-0 last:pr-0 hover:text-bright-blue min-desktop-width:pr-[34px]"
    >
      {title}
    </Link>
  ) : (
    <a href={link} className={styling_link} target={bln_blank ? "_blank" : ""}>
      {title}
    </a>
  );
});

export default function TopAndNavigation() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <div id="header-wrapper" className="sticky top-0 left-0 z-40 bg-[white]">
        <header className="mx-auto flex w-screen max-w-[1280px] items-center justify-between py-[32px] px-[16px] min-desktop-width:px-[32px]">
          <Link to="/">
            <StaticImage
              src="../../images/logo.svg"
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
              src="../../images/hamburger.svg"
              width={32}
              height={32}
              alt="mobile navigation opening icon"
            />
          </button>
        </header>
      </div>

      {showMobileNav ? (
        <div
          id="mobile-nav-wrapper"
          className="fixed top-0 left-0 z-50 h-screen w-screen bg-light-gray/50 min-desktop-width:hidden"
        >
          <main className="absolute top-0 right-0 flex h-screen min-w-[200px] flex-col items-end bg-light-grayish-blue pt-[32px] pr-[32px]">
            <button
              className="mb-[32px]"
              onClick={() => setShowMobileNav(false)}
            >
              <StaticImage
                src="../../images/close.svg"
                alt="close image"
                width={32}
                height={32}
              />
            </button>

            <ul className="flex flex-col items-end">{NavLinks}</ul>
          </main>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
