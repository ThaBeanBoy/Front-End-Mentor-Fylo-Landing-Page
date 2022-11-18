import React, { useState } from "react";

export default function MiniForm({
  className,
  btnText,
  errTextColor,
  column,
  breakpoint,
}) {
  // Setting default values
  errTextColor = errTextColor !== undefined ? errTextColor : "err";
  column = column !== undefined ? column : false;
  breakpoint = breakpoint !== undefined ? breakpoint : "actionables-breakpoint";

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

  return (
    <form
      className={`flex max-w-[536px] flex-col ${
        column ? "" : `${breakpoint}:flex-row`
      } ${className}`}
    >
      <div
        id="input-wrapper"
        className={`mb-[22px] ${breakpoint}:mb-0 ${breakpoint}:mr-[16px] ${breakpoint}:flex-1`}
      >
        <input
          type="text"
          placeholder="Enter your email..."
          className={`w-[100%] rounded-md border border-solid border-${
            theresInputErr ? ["red"] : "desaturated-blue"
          } p-[20px] text-very-dark-blue`}
          onChange={(e) => setInputString(e.target.value)}
        />
        <p
          id="err-message"
          className={`mt-[8px] pl-[20px] text-[12px] text-${errTextColor} ${breakpoint}:absolute`}
        >
          {theresInputErr ? "Please check your email" : ""}
        </p>
      </div>
      <button
        onClick={validateInput}
        className={`rounded-md bg-bright-blue py-[20px] text-[white] 
                  hover:brightness-150 hover:drop-shadow-xl 
                  ${breakpoint}:mb-0 ${breakpoint}:w-[200px]`}
      >
        {btnText}
      </button>
    </form>
  );
}
