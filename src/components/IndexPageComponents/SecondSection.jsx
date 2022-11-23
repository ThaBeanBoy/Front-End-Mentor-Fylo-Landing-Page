import React from "react";
import { Link } from "gatsby";
import Testimonial from "./testimonial";
import { StaticImage } from "gatsby-plugin-image";

const kylesTestimonee =
  "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.";
const paragraphs = [
  "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.",
  "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!",
];

const SecondSection = () => {
  return (
    <>
      <section className="">
        <StaticImage
          src="../../images/bg-curve-mobile.svg"
          alt="curved background"
          className="mobile:hidden"
        />
        <StaticImage
          src="../../images/bg-curve-desktop.svg"
          alt="curved background"
          className="hidden w-screen mobile:block"
        />

        <div id="content-wrapper" className="bg-light-grayish-blue">
          <div
            id="content"
            className="flex w-[100%] max-w-[1280px] flex-col 
            items-center justify-between px-[16px] second-section-breakpoint:mx-auto second-section-breakpoint:flex-row-reverse second-section-breakpoint:items-center second-section-breakpoint:px-[32px]"
          >
            <StaticImage
              src="../../images/illustration-2.svg"
              alt="second illustration"
              className="mb-[132px] w-[100%] max-w-[440px] second-section-breakpoint:mb-0 second-section-breakpoint:max-w-[535px]"
            />
            <main
              className="flex w-[100%] flex-col items-center
              second-section-breakpoint:items-start"
            >
              <h2 className="mb-[44px] w-[100%] max-w-[440px] text-center text-2xl font-bold">
                Stay productive, wherever you are
              </h2>
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-[32px] w-[100%] max-w-[440px] text-desaturated-blue last:mb-[60px]
                  second-section-breakpoint:mb-[24px] second-section-breakpoint:max-w-[513px] second-section-breakpoint:last:mb-[24px]"
                >
                  {paragraph}
                </p>
              ))}
              <Link
                to="/works"
                className="mb-[56px] border-b-2 border-solid border-moderate-cyan pb-[8px] text-moderate-cyan hover:brightness-125
                second-section-breakpoint:mb-[44px]"
              >
                <p className="mr-[8px] inline">See how Fylo works</p>{" "}
                <img
                  src="./icon-arrow.svg"
                  alt="arrow icon"
                  className="inline"
                />
              </Link>

              <Testimonial
                name="Kyle Burton"
                title="Founder & CEO, Huddle"
                testimonee={kylesTestimonee}
                imgAlt="Kyle Burton img"
              />
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
