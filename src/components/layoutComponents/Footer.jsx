import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div id="footer-wrapper" className="bg-very-dark-blue">
      <footer className=" mx-auto max-w-[1280px] px-[16px] py-[96px]">
        <StaticImage
          src="../../images/logo-footer.svg"
          className="mb-[60px]"
          alt="logo"
        />

        <main
          className="flex flex-col items-start
                   footer-breakpoint:flex-row footer-breakpoint:justify-between"
        >
          <div id="social-links" className="mb-[92px] text-[white]">
            <a
              href="tel:+1-543-123-4567"
              alt="phone"
              className="mb-[32px] flex items-center footer-breakpoint:mb-[16px]"
            >
              <StaticImage
                src="../../images/icon-phone.svg"
                className="mr-[28px]"
                alt="phone"
              />
              Phone: +1-543-123-4567
            </a>
            <a
              href="mailto:example@fylo.com"
              alt="email"
              className="flex items-center"
            >
              <StaticImage
                src="../../images/icon-email.svg"
                className="mr-[28px]"
                alt="email"
              />
              Phone: +1-543-123-4567
            </a>
          </div>

          <div id="link-groups" className="mb-[72px] footer-breakpoint:mb-0">
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
              <div id="group" className=" mb-[80px] last:mb-0">
                {group.map(({ title, link }) => (
                  <Link
                    to={link}
                    className="mb-[32px] block text-[white] last:mb-0 hover:text-bright-blue footer-breakpoint:mb-[16px]"
                  >
                    {title}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div
            id="social-icons"
            className="flex w-[100%] justify-center footer-breakpoint:w-auto"
          >
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
        <p className="mt-[64px] text-center text-[white]">
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
          {" - "}
          <a
            href="https://www.linkedin.com/in/tineyi-g-chipoyera-0948b9193/"
            className="text-moderate-cyan"
          >
            LinkedIn
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
