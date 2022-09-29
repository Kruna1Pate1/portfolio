import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { about, social } from '../utils/Constants';

const Hero = () => {
  const el = useRef() as React.MutableRefObject<HTMLSpanElement>;

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: about.taglines,
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="w-full h-screen" id="home">
      <div className="max-w-[960px] w-full h-full p-4 mx-auto flex items-center">
        <div className="">
          <div className="text-gray-50">
            <h1 className="my-3">
              <span className="text-3xl sm:text-4xl md:text-5xl">
                Hi, I am{' '}
              </span>
              <span className="text-[#ff821c]">{about.name}</span>
            </h1>
            <h2 className="my-2">
              <span ref={el} className="font-semibold"></span>
            </h2>
          </div>

          <p className="text-gray-400 w-4/5 md:w-[66%] my-4 sm:text-xl md:text-2xl font-light">
            {about.descriptionSort}
          </p>

          <div className="mt-10">
            <ul className="flex justify-center md:justify-start gap-5 sm:gap-8 md:gap-10 ">
              {social.map((acc, index) => (
                <li key={index}>
                  <a href={acc.link} target="_blank" rel="noopener noreferrer">
                    <div className="p-3 rounded-full ring-1 ring-gray-800 bg-[#081632] shadow-sm shadow-gray-700 hover:bg-[#06286b] ease-in duration-100">
                      <acc.icon size={24} />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
