import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

const IndexPage = () => {
  const [inputString, setInputString] = useState('');
  const [showingSubMessage, setShowSubMessage] = useState(false);

  const validateInput = () => {
    const inputTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      inputString
    );
    setShowSubMessage(!inputTest);
  };

  useEffect(() => {
    console.log(inputString);
  }, [inputString]);

  return (
    <>
      <section
        id='landing'
        className='px-[16px] landing-breakpoint:px-[32px] flex flex-col items-center 
        landing-breakpoint:flex-row-reverse max-w-[1280px] landing-breakpoint:mx-auto landing-breakpoint:mt-[88px] landing-breakpoint:mb-[172px] landing-breakpoint:justify-between'
      >
        <img
          src='./illustration-1.svg'
          alt='hero image'
          className='w-[100%] mt-[140px] mb-[60px] landing-breakpoint:my-0 max-w-[440px] landing-breakpoint:max-w-[614px]'
        />
        <main>
          <h1 className='text-3xl font-bold text-center mb-[40px] landing-breakpoint:text-left max-w-[536px]'>
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className='text-center mb-[40px] landing-breakpoint:text-left max-w-[536px]'>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <div
            id='actionables'
            className='flex flex-col actionables-breakpoint:flex-row max-w-[536px] actionables-breakpoint:mb-[130px]'
          >
            <div
              id='input-wrapper'
              className='mb-[22px] actionables-breakpoint:mb-0 actionables-breakpoint:mr-[16px] actionables-breakpoint:flex-1'
            >
              <input
                type='text'
                placeholder='Enter your email...'
                className='w-[100%] p-[20px] border-desaturated-blue border border-solid rounded-md'
                onChange={(e) => setInputString(e.target.value)}
              />
              <p
                id='err-message'
                className='text-[12px] text-err pl-[20px] mt-[8px]'
              >
                {showingSubMessage ? 'Please check your email' : ''}
              </p>
            </div>
            <button
              onClick={validateInput}
              className='py-[20px] bg-bright-blue hover:brightness-150 hover:drop-shadow-xl text-[white] rounded-md mb-[130px] actionables-breakpoint:mb-0 actionables-breakpoint:w-[200px]'
            >
              Get Started
            </button>
          </div>
        </main>
      </section>
    </>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      <link
        rel='icon'
        type='image/x-icon'
        sizes='32x32'
        href={`${window.location.href}favicon-32x32.png`}
      />

      <title>Frontend Mentor | Fylo landing page with two column layout</title>
    </>
  );
};

// Making graphql schema
export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "favicon-32x32.png" }) {
      childrenImageSharp {
        fluid {
          src
          srcSet
          sizes
          tracedSVG
        }
      }
    }
  }
`;
