import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Testimonial from "../testimonial";

const kylesTestimonee =
  "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.";
const paragraphs = [
  "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.",
  "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!",
];

const SecondSection = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "avatar-testimonial.jpg" }) {
        childrenImageSharp {
          fixed(width: 34, height: 34) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  console.log(data.file.childrenImageSharp);

  return (
    <>
      <section className="">
        <img
          src="./bg-curve-mobile.svg"
          alt="curved background"
          className="mobile:hidden"
        />
        <img
          src="./bg-curve-desktop.svg"
          alt="curved background"
          className="hidden w-screen mobile:block"
        />

        <div id="content-wrapper" className=" bg-light-grayish-blue">
          <div
            id="content"
            className="mx-auto flex max-w-[1280px] flex-col 
            items-center justify-between px-[16px] second-section-breakpoint:mx-[32px] second-section-breakpoint:flex-row-reverse second-section-breakpoint:items-center"
          >
            <img
              src="./illustration-2.svg"
              alt="second illustration"
              className="mb-[132px] w-[100%] max-w-[440px] second-section-breakpoint:mb-0 second-section-breakpoint:max-w-[535px]"
            />
            <main
              className="flex flex-col items-center
              second-section-breakpoint:items-start"
            >
              <h2 className="mb-[44px] max-w-[440px] text-center text-2xl font-bold">
                Stay productive, wherever you are
              </h2>
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-[32px] max-w-[440px] text-desaturated-blue last:mb-[60px]
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
              />
            </main>
          </div>
        </div>

        {/* Put this code anywhere in the body of your page where you want the badge to show up. */}
      </section>
    </>
  );
};

export default SecondSection;
