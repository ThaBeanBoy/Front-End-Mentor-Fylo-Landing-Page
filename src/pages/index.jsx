import React from "react";
import {
  Landing,
  SecondSection,
} from "../components/IndexPageComponents/IndexPageComponents";

const IndexPage = () => {
  // const myExtScript = require("https://widgets.fiverr.com/api/v1/seller/gibbs_dev?widget_id=c23d5e7d-5d00-4739-a9ef-71a1bc6a5d30");

  return (
    <>
      <Landing />
      <SecondSection />
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
        href={`${window.location.href}favicon-32x32.png`}
      />
      {/* <script
        id="fiverr-seller-widget-script-c23d5e7d-5d00-4739-a9ef-71a1bc6a5d30"
        src="https://widgets.fiverr.com/api/v1/seller/gibbs_dev?widget_id=c23d5e7d-5d00-4739-a9ef-71a1bc6a5d30"
        data-config='{"category_name":"Programming \u0026 Tech"}'
        async={true}
        defer={true}
      ></script> */}

      <title>Frontend Mentor | Fylo landing page with two column layout</title>
    </>
  );
};
