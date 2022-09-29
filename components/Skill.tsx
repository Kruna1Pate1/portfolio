import Image from 'next/image';
import React from 'react';
import { frameworks, languages, tools } from '../utils/Constants';
import Title from './Title';

const Skill = () => {
  return (
    <section
      className="w-full md:h-screen p-4  flex items-center py-16"
      id="skill"
    >
      <div className="max-w-[960px] w-full mx-auto">
        <Title title="Skills" />

        <div className="my-4">
          <h3 className="my-2 text-[#ff821c]">Languages</h3>
          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-9 gap-x-4 sm:gap-x-6 md:gap-x-7">
            {languages.map((lan, index) => (
              <div key={index} className="p-2 rounded-md ">
                <Image src={lan.image} alt={lan.name} width={44} height={44} />
              </div>
            ))}
          </div>
        </div>

        <div className="my-6">
          <h3 className="my-2 text-[#ff821c]">Frameworks & Technologies</h3>
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-x-4 sm:gap-x-6 md:gap-x-7">
            {frameworks.map((fw, index) => (
              <div key={index} className="p-2 rounded-md ">
                <Image src={fw.image} alt={fw.name} width={44} height={44} />
              </div>
            ))}
          </div>
        </div>

        <div className="my-6">
          <h3 className="my-2 text-[#ff821c]">Tools</h3>
          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-9 gap-x-4 sm:gap-x-6 md:gap-x-7">
            {tools.map((tool, index) => (
              <div key={index} className="p-2 rounded-md ">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  width={44}
                  height={44}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
