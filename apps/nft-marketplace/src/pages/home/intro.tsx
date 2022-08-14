import CustomButton from '../../components/button/CustomButton';
import ScrollButton from '../../components/button/ScrollButton';
import IntroItem from '../../components/card/IntroItem';

const Intro = () => {
  return (
    <>
      <div className="main-back flex items-center">
        <div className="max-w-[590px] ml-[160px]">
          <div>
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
              <IntroItem amount={'999.000'} name={'Active Shoulders'} />
              <IntroItem amount={'999.000'} name={'Active Shoulders'} />
              <IntroItem amount={'999.000'} name={'Active Shoulders'} />
              <IntroItem amount={'999.000'} name={'Active Shoulders'} />
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
      <ScrollButton />
    </>
  );
};

export default Intro;
