import React from 'react';
import SubTitle from '../../components/subTitle/SubTitle';

const Distribution = () => {
  const percents = [25, 15, 10, 15, 10, 5];
  const contents = [
    'STAKER',
    'FEATURE INVESTOR',
    'TEAM',
    'LP POOLS',
    'ECO PARTNERS',
    'MKT OPERATION',
  ];

  const setStyle = (percent: number) => {
    return { '--value': Number(percent) } as React.CSSProperties;
  };

  const results = (): JSX.Element => {
    return (
      <>
        {' '}
        {percents.map((percent, id) => (
          <div className="bg-[#1E1E1E]" key={id}>
            <div
              data-theme="mytheme"
              className="percentage font-drone text-3xl w-[200px] h-[200px] radial-progress border-[#DA458F] text-navbar bg-primary"
              style={setStyle(percent)}
            >
              <span className="content flex items-center rounded-3xl">
                {percent}%
              </span>
            </div>
            <div className="mt-[25px]">
              <span className="text-center front-drone text-[#FBC625] not-italic font-bold">
                {contents[id]}
              </span>
            </div>

            <div>
              <span className="text-center front-drone text-white not-italic font-bold text-xs">
                $25,000,000
              </span>
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="mb-[200px] flex items-center flex-col relative">
      <div className="flex flex-col items-center w-full">
        <SubTitle title="TOKEN DISTRIBUTION"></SubTitle>
      </div>
      <div className="absolute xl:right-0 sm:hidden xl:block top-[148px]">
        <img src="/assets/images/vector-1.png" alt="vector-1.png" />
      </div>
      <div className="absolute xl:left-0 sm:hidden xl:block top-[410px]">
        <img src="/assets/images/vector-2.png" alt="vector-2.png" />
      </div>
      <div className="absolute 2xl:right-[133px] sm:hidden 2xl:block top-[622px]">
        <img src="/assets/images/vector-3.png" alt="vector-3.png" />
      </div>
      <div className="absolute 2xl:left-[211px] sm:hidden 2xl:block top-[900px]">
        <img src="/assets/images/vector-4.png" alt="vector-4.png" />
      </div>

      {/* <span className="flex justify-center items-center text-5xl text-[#FBC625] not-italic font-bold">
        TOKEN DISTRIBUTION
      </span> */}
      <div className="w-[1018px] mt-[100px] grid grid-rows-2 grid-flow-col gap-16 text-center pl-5 pt-5">
        {results()}
      </div>
    </div>
  );
};

export default Distribution;
