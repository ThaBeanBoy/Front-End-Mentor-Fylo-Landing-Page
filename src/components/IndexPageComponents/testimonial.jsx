import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Testimonial = ({ name, title, testimonee, imgAlt }) => {
  return (
    <div
      id="testimonial-card"
      className="mb-[116px] w-[100%] max-w-[404px] rounded-[8px] bg-[white] px-[38px] py-[32px] text-very-dark-blue "
    >
      <img src="./icon-quotes.svg" alt="qutaation mark" className="mb-[22px]" />
      <main>
        <p id="testimony" className="mb-[24px]">
          {testimonee}
        </p>
        <div id="person" className="flex items-center">
          <StaticImage
            className="mr-[8px] rounded-full"
            src="../../../src/images/avatar-testimonial.jpg"
            alt={imgAlt}
            placeholder="blurred"
            layout="fixed"
            width={34}
            height={34}
          />
          <div id="details">
            <h6 className="font-bold">{name}</h6>
            <p>{title}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Testimonial;
