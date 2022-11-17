import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

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
          className="hidden mobile:block"
        />

        <div
          id="content-container"
          className="flex flex-col items-center bg-light-grayish-blue px-[16px]"
        >
          <img
            src="./illustration-2.svg"
            alt="second illustration"
            className="mb-[132px] w-[100%] max-w-[440px]"
          />
          <main className="flex flex-col items-center">
            <h2 className="mb-[44px] max-w-[440px] text-center text-2xl font-bold">
              Stay productive, wherever you are
            </h2>
            {[
              "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.",
              "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!",
            ].map((paragraph) => (
              <p className="mb-[32px] max-w-[440px] text-desaturated-blue last:mb-[60px]">
                {paragraph}
              </p>
            ))}
            <Link
              to="/works"
              className="mb-[56px] border-b-2 border-solid border-moderate-cyan pb-[8px] text-moderate-cyan"
            >
              <p className="mr-[8px] inline">See how Fylo works</p>{" "}
              <img src="./icon-arrow.svg" alt="arrow icon" className="inline" />
            </Link>

            <div
              id="testimonial-card"
              className="mb-[116px] max-w-[404px] rounded-[8px] bg-[white] px-[38px] py-[32px] text-very-dark-blue "
            >
              <img
                src="./icon-quotes.svg"
                alt="qutaation mark"
                className="mb-[22px]"
              />
              <main>
                <p id="testimony" className="mb-[24px]">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div id="person" className="flex items-center">
                  {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
                  <div
                    id="dummy-image"
                    className="mr-[8px] h-[34px] w-[34px] rounded-full bg-desaturated-blue"
                  ></div>
                  <div id="details">
                    <h6 className="font-bold">Kyle Burton</h6>
                    <p>Founder & CEO, Huddle</p>
                  </div>
                </div>
              </main>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
