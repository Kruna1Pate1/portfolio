import React from 'react';

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <div className="py-6">
      <div className="w-16 h-2 mb-6 rounded-full bg-gradient-to-r from-purple-500 to-teal-500"></div>
      <h1 className="tracking-wider">{title}</h1>
    </div>
  );
};

export default Title;
