import CustomButton from '../../components/button/CustomButton';

const Intro = () => {
  return (
    <div className="main-back">
      <div className="mx-auto pl-[160px] pt-[258px]">
        <div className="w-[590px]">
          <h3 className="font-drone title-40-text text-yellow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </h3>
          <p className="paragraph-text pt-10">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="flex justify-between pt-10">
            <div>
              <p className="font-drone font-bold text-xl leading-8">$999.000</p>
              <p className="font-inter text-yellow font-medium text-sm pt-2">
                Active Shoulders
              </p>
            </div>
            <div>
              <p className="font-drone font-bold text-xl leading-8">$999.000</p>
              <p className="font-inter text-yellow font-medium text-sm  pt-2">
                Active Shoulders
              </p>
            </div>
            <div>
              <p className="font-drone font-bold text-xl leading-8">$999.000</p>
              <p className="font-inter text-yellow font-medium text-sm  pt-2">
                Active Shoulders
              </p>
            </div>
            <div>
              <p className="font-drone font-bold text-xl leading-8">$999.000</p>
              <p className="font-inter text-yellow font-medium text-sm  pt-2">
                Active Shoulders
              </p>
            </div>
          </div>
        </div>
        <div className="flex pt-20">
          <div className="pr-5">
            <CustomButton label="Play game" padding="py-[18px] px-[54px]" />
          </div>
          <div>
            <CustomButton
              model="secondary"
              label="learn more"
              padding="py-[18px] px-[54px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
