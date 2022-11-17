import React from "react";

const Testimonial = ({ name, title, testimonee }) => {
  return (
    <div
      id="testimonial-card"
      className="mb-[116px] w-[404px] rounded-[8px] bg-[white] px-[38px] py-[32px] text-very-dark-blue "
    >
      <img src="./icon-quotes.svg" alt="qutaation mark" className="mb-[22px]" />
      <main>
        <p id="testimony" className="mb-[24px]">
          {testimonee}
        </p>
        <div id="person" className="flex items-center">
          {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
          <div
            id="dummy-image"
            className="mr-[8px] h-[34px] w-[34px] rounded-full bg-desaturated-blue"
          ></div>
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
