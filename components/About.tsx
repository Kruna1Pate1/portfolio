import React from 'react';
import { about } from '../utils/Constants';
import Title from './Title';

const About = () => {
  return (
    <section
      className="w-full md:h-screen p-4 flex items-center py-16"
      id="about"
    >
      <div className="max-w-[960px] w-full mx-auto">
        <Title title="About" />

        <div className="md:grid grid-col-3 gap-8">
          <div className="">
            <h3 className="my-4">Who I Am</h3>
            <p className=" text-gray-300 font-light text-md text-justify">
              {about.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
