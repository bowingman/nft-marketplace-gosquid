import React from 'react';
import { render } from 'react-dom';
import Logo from '../assets/images/logo.svg';
import World from '../assets/images/World.svg';
import CheckDown from '../assets/images/bxs-chevron-down.svg';

const MenuItem = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-row items-start p-0 gap-[10px] ${className}`}>
      <p className="font-drone font-bold text-sm leading-5 flex items-center text-center text-white">
        {name}
      </p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="nav-back absolute w-full h-[84px] left-0 top-0">
      <img
        className="absolute left-[8.33%] right-[87.29%] top-[28.57%] bottom-[28.57%]"
        alt="FullScreen"
        src={Logo}
      />
      <div className="flex flex-row items-start p-0 gap-[60px] absolute w-[741px] h-[22px] left-[304px] top-[32px]">
        <div className="flex flex-row items-center p-0 gap-[4px] ">
          <div
            className={`flex flex-col items-start p-0 gap-[10px] w-[35px] h-[22px]`}
          >
            <span className="font-drone font-bold text-sm leading-5 flex items-center text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              HOME
            </span>
            <div className="w-[16px] h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>
        </div>
        <MenuItem name={'ABOUT US'} className="w-[64px] h-[20px]" />
        <MenuItem name={'OUR TEAMS'} className="w-[73px] h-[20px]" />
        <MenuItem name={'MARKETPLACE'} className="w-[89px] h-[20px]" />
        <MenuItem name={'GOSQUID TOKEN'} className="w-[100px] h-[20px]" />
        <MenuItem name={'WHITEPAPER'} className="w-[80px] h-[20px]" />
      </div>
      <div className="absolute w-[56px] h-[24px] left-[1704px] top-[30px]">
        <div className="left-[88.75%] right-[10%] top-[35.71%] bottom-[35.71%]">
          <div className="absolute w-[16px] h-[16px] left-[4px] top-[4px]">
            <img src={World} alt="World" />
          </div>
        </div>
        <div className="left-[90.42%] right-[8.33%] top-[35.71%] bottom-[35.71%]">
          <div className="bg-white rounded-[1px]">
            <div className="absolute left-[20.83%] right-[20.32%] top-[33.33%] bottom-[30.75%]">
              <img src={CheckDown} alt="CheckDown" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
