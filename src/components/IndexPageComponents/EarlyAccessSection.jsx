import React from "react";
import MiniForm from "./miniForm";

const EarlyAccessSection = () => {
  return (
    <section className="bg-desaturated-blue">
      <h2>Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <MiniForm btnText="get started for free" errTextColor="[white]" />
    </section>
  );
};

export default EarlyAccessSection;
