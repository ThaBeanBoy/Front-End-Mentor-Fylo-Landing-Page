import React, { useState } from "react";
import SecondSection from "./SecondSection";

export default function MiniForm({
  btnText,

  secondSection,
}) {
  // Setting default values
  secondSection = secondSection !== undefined ? secondSection : false;

  // States
  const [inputString, setInputString] = useState("");
  const [theresInputErr, setTheresInputErr] = useState(false);

  // Validation function
  const validateInput = (e) => {
    e.preventDefault();
    const inputTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      inputString
    );
    setTheresInputErr(!inputTest);
  };

  // Stylings
  const styling_form = secondSection
    ? "flex w-[100%] max-w-[514px] flex-col early-access-breakpoint:items-end"
    : "flex max-w-[536px] flex-col actionables-breakpoint:mb-[130px] actionables-breakpoint:flex-row";

  const styling_inputWrapper = secondSection
    ? "static mb-[16px] w-[100%]"
    : "static mb-[22px] actionables-breakpoint:mb-0 actionables-breakpoint:mr-[16px] actionables-breakpoint:flex-1";

  const styling_input = SecondSection
    ? "w-[100%] rounded-md border border-solid border-desaturated-blue p-[20px]"
    : "w-[100%] rounded-md border border-solid border-desaturated-blue p-[20px]";

  const stying_errMessage = secondSection
    ? "mt-[8px] pl-[20px] text-[12px] text-[white] early-access-breakpoint:absolute"
    : "mt-[8px] pl-[20px] text-[12px] text-err actionables-breakpoint:absolute";

  const styling_buttonStyling = secondSection
    ? "rounded-md bg-bright-blue py-[20px] capitalize text-[white] hover:brightness-150 hover:drop-shadow-xl early-access-breakpoint:mb-0 early-access-breakpoint:w-[200px]"
    : "mb-[130px] rounded-md bg-bright-blue py-[20px] capitalize text-[white] hover:brightness-150 hover:drop-shadow-xl actionables-breakpoint:mb-0 actionables-breakpoint:w-[200px]";

  return (
    <form className={styling_form}>
      <div id="input-wrapper" className={styling_inputWrapper}>
        <input
          type="text"
          placeholder="Enter your email..."
          className={styling_input}
          onChange={(e) => setInputString(e.target.value)}
        />
        <p id="err-message" className={stying_errMessage}>
          {theresInputErr ? "Please check your email" : ""}
        </p>
      </div>
      <button onClick={validateInput} className={styling_buttonStyling}>
        {secondSection ? "get started for free" : "get started"}
      </button>
    </form>
  );
}
