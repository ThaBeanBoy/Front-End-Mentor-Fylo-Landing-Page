import React from "react";
import MiniForm from "./miniForm";

const EarlyAccessSection = () => {
  return (
    <section className="bg-desaturated-blue">
      <div
        id="wrapper"
        className="px[52px] mx-auto flex w-[100%] max-w-[1280px] flex-col items-center py-[84px]
        early-access-breakpoint:flex-row early-access-breakpoint:justify-between early-access-breakpoint:px-[32px] early-access-breakpoint:py-[104px]"
      >
        <main className="flex flex-col items-center text-[white] early-access-breakpoint:items-start">
          <h2 className="mb-[28px] text-2xl font-bold">
            Get early access today
          </h2>
          <p className="mb-[32px] max-w-[514px] text-center early-access-breakpoint:text-left">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </main>
        <MiniForm
          btnText="get started for free"
          errTextColor="[white]"
          column={true}
          breakpoint="early-access-breakpoint"
        />
      </div>
    </section>
  );
};

export default EarlyAccessSection;
