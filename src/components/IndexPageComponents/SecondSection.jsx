import React from 'react';
import { Link } from 'gatsby';

const SecondSection = () => {
  return (
    <>
      <section className=''>
        <img
          src='./bg-curve-mobile.svg'
          alt='curved background'
          className='mobile:hidden'
        />
        <img
          src='./bg-curve-desktop.svg'
          alt='curved background'
          className='hidden mobile:block'
        />

        <div
          id='content-container'
          className='bg-light-grayish-blue flex flex-col items-center px-[16px]'
        >
          <img
            src='./illustration-2.svg'
            alt='second illustration'
            className='max-w-[440px] w-[100%]'
          />
          <main className='flex flex-col items-center'>
            <h2 className='text-2xl font-bold text-center'>
              Stay productive, wherever you are
            </h2>
            <p className='text-center'>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <Link
              to='/works'
              className='text-moderate-cyan border-b-2 border-solid border-moderate-cyan pb-[8px]'
            >
              <p className='mr-[8px] inline'>See how Fylo works</p>{' '}
              <img src='./icon-arrow.svg' alt='arrow icon' className='inline' />
            </Link>

            <div id='testimonial-card' className='bg-[white]'>
              <img src='./icon-quotes.svg' alt='qutaation mark' />
              <main>
                <p id='testimony'>
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div id='person'>
                  <div id='details'>
                    <p>Kyle Burton</p>
                    <p>Founder & CEO, Huddle</p>
                  </div>
                </div>
              </main>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
