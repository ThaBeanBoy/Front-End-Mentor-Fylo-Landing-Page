import React from "react";
import {
  Landing,
  SecondSection,
  EarlyAccessSection,
} from "../components/IndexPageComponents/IndexPageComponents";

const IndexPage = () => {
  return (
    <>
      <Landing />
      <SecondSection />
      <EarlyAccessSection />
    </>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link
        rel="icon"
        type="image/x-icon"
        sizes="32x32"
        href={"/favicon-32x32.png"}
      />

      <title>Frontend Mentor | Fylo landing page with two column layout</title>
    </>
  );
};
