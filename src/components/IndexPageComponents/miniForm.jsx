import React, { useState } from "react";

export default function MiniForm({ className, btnText, errTextColor }) {
  errTextColor = errTextColor !== undefined ? errTextColor : "err";
  const [inputString, setInputString] = useState("");
  const [theresInputErr, setTheresInputErr] = useState(false);

  const validateInput = (e) => {
    e.preventDefault();
    const inputTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      inputString
    );
    setTheresInputErr(!inputTest);
  };

  return (
    <form
      id="actionables"
      className={`flex max-w-[536px] flex-col actionables-breakpoint:flex-row ${className}`}
    >
      <div
        id="input-wrapper"
        className="mb-[22px] actionables-breakpoint:mb-0 actionables-breakpoint:mr-[16px] actionables-breakpoint:flex-1"
      >
        <input
          type="text"
          placeholder="Enter your email..."
          className={`w-[100%] rounded-md border border-solid border-${
            theresInputErr ? ["red"] : "desaturated-blue"
          } p-[20px]`}
          onChange={(e) => setInputString(e.target.value)}
        />
        <p
          id="err-message"
          className={`mt-[8px] pl-[20px] text-[12px] text-${errTextColor} actionables-breakpoint:absolute`}
        >
          {theresInputErr ? "Please check your email" : ""}
        </p>
      </div>
      <button
        onClick={validateInput}
        className="rounded-md bg-bright-blue py-[20px] text-[white] 
                  hover:brightness-150 hover:drop-shadow-xl 
                  actionables-breakpoint:mb-0 actionables-breakpoint:w-[200px]"
      >
        {btnText}
      </button>
    </form>
  );
}
