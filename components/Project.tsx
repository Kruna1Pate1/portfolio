import Image from 'next/image';
import React from 'react';
import Title from './Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { projects } from '../utils/Constants';

const Project = () => {
  return (
    <section className="w-full  p-4  flex items-center py-16" id="project">
      <div className="max-w-[960px] w-full mx-auto">
        <Title title="Projects" />

        {/* <div> */}
        <Swiper
          breakpoints={{
            // when window width is >= 320px
            320: {
              width: 320,
              slidesPerView: 1,
              spaceBetween: 50
            },
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1.5,
              spaceBetween: 30
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2
            }
          }}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
        >
          {projects.map((p) => (
            <SwiperSlide key={p.id} className="pb-10 sm:pb-8">
              <div className="ring-1 ring-gray-800 p-3 m-1 sm:m-4 h-[480px] w-[320px] sm:w-[348px] shadow-md shadow-gray-700 rounded-xl  group hover:bg-gradient-to-r from-purple-500 to-teal-500">
                <div className="w-full h-2/5 relative">
                  <Image
                    className="rounded"
                    src={p.image}
                    alt={p.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="mt-2 flex-grow">
                  <h3 className="text-center">{p.title}</h3>
                  <p className="text-gray-300 font-light text-sm text-justify overflow-clip line-clamp-4 leading-5">
                    {p.description}
                  </p>
                  <div className="my-2">
                    <span className="font-bold text-lg">Tech Stack:</span>
                    <ul className=" overflow-clip line-clamp-3 leading-5">
                      {p.techstack.map((tech, index) => (
                        <li
                          key={index}
                          className="inline-flex mr-2 text-gray-300 font-normal"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 w-full">
                    <ul className="flex justify-center gap-x-5">
                      {p.source.map((s, index) => (
                        <li key={index}>
                          <a
                            href={s.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="p-2 rounded-full ring-1 ring-gray-800 bg-[#081632] shadow-sm shadow-gray-700 hover:bg-[#06286b] ease-in duration-100">
                              <s.icon size={26} />
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Project;
