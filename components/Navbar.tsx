import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { CgMenu, CgClose } from 'react-icons/cg';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="fixed w-full h-16 bg-[#0d1117] shadow-xl z-50">
      {/* Desktop menu */}
      <nav className="flex justify-between items-center w-full h-full px-3 md:px-16">
        <Image
          src="/images/logo.png"
          alt="Krunal Patel"
          width={94}
          height={40}
        />

        <div className="flex gap-8 items-center">
          <ul className="hidden md:flex gap-3 text-gray-400 text-lg font-normal">
            <li className=" hover:text-gray-50">
              <Link href={'/'}>
                <a>Home</a>
              </Link>
            </li>
            <li className=" hover:text-gray-50">
              <Link href={'#about'}>
                <a>About</a>
              </Link>
            </li>
            <li className=" hover:text-gray-50">
              <Link href={'#skill'}>
                <a>Skill</a>
              </Link>
            </li>
            <li className=" hover:text-gray-50">
              <Link href={'#project'}>
                <a>Project</a>
              </Link>
            </li>
            <li className=" hover:text-gray-50">
              <a href={'https://blog.krunalpatel.me/'}>Blog</a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div onClick={handleMenu} className="md:hidden cursor-pointer">
            <CgMenu size={24} />
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <nav
        className={
          menu ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            menu
              ? 'fixed left-0 top-0 p-6 h-screen bg-[#0d1117] w-[70%] sm:w-[60%] md:w-[45%] ease-out duration-500'
              : 'fixed left-[-100%] top-0 p-6 h-screen bg-[#0d1117] w-[70%] sm:w-[60%] md:w-[45%] ease-in duration-500'
          }
        >
          <div className="flex w-full justify-between items-center">
            <Image
              src="/images/logo.png"
              alt="Krunal Patel"
              width={94}
              height={40}
            />
            <div
              onClick={handleMenu}
              className="rounded-full ring-1 ring-gray-700 p-1 bg-gray-900 shadow-sm shadow-gray-500 cursor-pointer"
            >
              <CgClose size={24} />
            </div>
          </div>

          <div className="py-8">
            <ul className="flex flex-col gap-5 text-gray-400 font-normal text-xl">
              <li className="hover:text-gray-50">
                <Link href={'/'}>
                  <a>Home</a>
                </Link>
              </li>
              <li className="hover:text-gray-50">
                <Link href={'#about'}>
                  <a>About</a>
                </Link>
              </li>
              <li className="hover:text-gray-50">
                <Link href={'#skill'}>
                  <a>Skill</a>
                </Link>
              </li>
              <li className="hover:text-gray-50">
                <Link href={'#project'}>
                  <a>Project</a>
                </Link>
              </li>
              <li className="hover:text-gray-50">
                <a href={'https://blog.krunalpatel.me/'}>Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
