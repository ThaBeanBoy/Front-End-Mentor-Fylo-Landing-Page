import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

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
        <header className="mx-auto flex w-screen max-w-[1280px] items-center justify-between py-[32px] px-[16px] min-desktop-width:px-[32px]">
          <Link to="/">
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

      <footer className="bg-very-dark-blue px-[16px] py-[96px]">
        <StaticImage src="../images/logo-footer.svg" className="mb-[60px]" />

        <main className="flex flex-col items-start">
          <div id="social-links" className="mb-[92px] text-[white]">
            <a
              href="tel:+1-543-123-4567"
              alt="phone"
              className="mb-[32px] flex items-center"
            >
              <StaticImage
                src="../images/icon-phone.svg"
                className="mr-[28px]"
              />
              Phone: +1-543-123-4567
            </a>
            <a
              href="mailto:example@fylo.com"
              alt="email"
              className="flex items-center"
            >
              <StaticImage
                src="../images/icon-email.svg"
                className="mr-[28px]"
              />
              Phone: +1-543-123-4567
            </a>
          </div>

          <div id="link-groups" className="mb-[72px]">
            {[
              [
                {
                  title: "about us",
                  link: "/about-us",
                },
                {
                  title: "jobs",
                  link: "/jobs",
                },
                {
                  title: "press",
                  link: "/press",
                },
                {
                  title: "blog",
                  link: "/blog",
                },
              ],
              [
                {
                  title: "contact us",
                  link: "/contact-us",
                },
                {
                  title: "terms",
                  link: "/terms",
                },
                {
                  title: "privacy",
                  link: "/privacy",
                },
              ],
            ].map((group) => (
              <div id="group" className="mb-[80px] last:mb-0">
                {group.map(({ title, link }) => (
                  <Link
                    to={link}
                    className="mb-[32px] block text-[white] last:mb-0"
                  >
                    {title}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div id="social-icons" className="flex w-[100%] justify-center">
            <a
              href="#"
              className="rounded-full border border-solid border-[white] p-[8px] text-[24px] text-[white] 
                      hover:border-bright-blue hover:text-bright-blue"
            >
              <GrFacebookOption />
            </a>
            <a
              href="#"
              className="mx-[8px] rounded-full border border-solid border-[white] p-[8px] text-[24px] text-[white] 
              hover:border-bright-blue hover:text-bright-blue"
            >
              <BsTwitter />
            </a>
            <a
              href="#"
              className="rounded-full border border-solid border-[white] p-[8px] text-[24px] text-[white] 
              hover:border-bright-blue hover:text-bright-blue"
            >
              <BsInstagram />
            </a>
          </div>
        </main>
        <p class="mt-[32px] text-center text-[white]">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-moderate-cyan"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/ThaBeanBoy"
            className="text-moderate-cyan"
          >
            ThaBeanBoy
          </a>
          .
        </p>
      </footer>

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
              <StaticImage
                src="../images/close.svg"
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
    </div>
  );
}

export default Layout;
