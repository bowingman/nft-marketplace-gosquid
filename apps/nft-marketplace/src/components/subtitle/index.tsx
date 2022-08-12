import React from 'react';
import ReactSm from '../../assets/images/rect-sm.svg';

interface PROPS {
  children: JSX.Element | JSX.Element[];
  title: string;
}

const SubTitle = ({ children, title }: PROPS) => {
  return (
    <div className="mt-[120px]">
      <div className="mb-[30px]">
        <h1 className="title-40-text text-center text-[#FBC625]">{title}</h1>
        <div className="flex justify-center mt-[24px]">
          <div className="w-[240px] h-[2px] bg-white"></div>
        </div>
        <div className="flex justify-center">
          <img src={ReactSm} alt="" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default SubTitle;
