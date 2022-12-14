import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full h-16 bg-[#0d1117] z-40">
      <div className="flex justify-center items-center w-full h-full px-3 md:px-16">
        <p className="text-gray-300">
          Made with <span className="text-[#e25555] text-2xl"> &#9829; </span>
          by
          <span className="text-white"> Krunal Patel </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
