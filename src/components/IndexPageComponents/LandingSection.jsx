import React from "react";
import MiniForm from "./miniForm";

const Landing = () => {
  return (
    <section
      id="landing"
      className="flex max-w-[1280px] flex-col items-center px-[16px] 
          landing-breakpoint:mx-auto landing-breakpoint:mt-[88px] landing-breakpoint:mb-[172px] landing-breakpoint:flex-row-reverse landing-breakpoint:justify-between landing-breakpoint:px-[32px]"
    >
      <img
        src="./illustration-1.svg"
        alt="hero image"
        className="mt-[140px] mb-[60px] w-[100%] max-w-[440px] landing-breakpoint:my-0 landing-breakpoint:max-w-[614px]"
      />
      <main>
        <h1 className="mb-[40px] max-w-[536px] text-center text-3xl font-bold landing-breakpoint:text-left">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="mb-[40px] max-w-[536px] text-center landing-breakpoint:text-left">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>

        <MiniForm
          btnText="Get Started"
          className="actionables-breakpoint:39px mb-[128px]"
        />
      </main>
    </section>
  );
};

export default Landing;
