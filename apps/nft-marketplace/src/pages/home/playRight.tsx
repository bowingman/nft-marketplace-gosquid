import PlayerItem from '../../components/card/PlayerItem';
import CustomButton from '../../components/button/CustomButton';

const playRight = () => {
  return (
    <div className="container m-auto mb-[120px] play-right-back sm:flex sm:justify-center 2xl:block">
      <div className="flex mb-[90px]">
        <div className="flex flex-col">
          <div className="ml-[80px] 2xl:mt-[210px] sm:mt-[50px]">
            <p className="font-drone bold text-yellow text-[80px]">PLAY</p>
            <p className="font-drone bold text-yellow text-[80px]">RIGHT</p>
            <p className="font-drone bold text-yellow text-[80px]">NOW</p>
            <div className="py-[18px] px-[54]px">
              <CustomButton label="PLAY GAME" padding="py-[10px] px-[54px]" />
            </div>
          </div>
        </div>
        <div className="2xl:absolute flex 2xl:bottom-[0px] 2xl:left-[285px]">
          <img
            src="/assets/images/person_7.png"
            alt="person_7.png"
            className="2xl:block sm:hidden"
            width="541px"
          />
          <div className="2xl:mt-[160px] mx-[109px] font-drone">
            <div className="flex text-white w-[505px]">
              <div className="leading-6 font-medium font-drone text-base ml-[60px] mr-[38px] my-[8px]">
                #
              </div>
              <div className="flex items-center w-[150px]">
                <div className="leading-6 font-medium font-drone text-base pl-2">
                  PLAYER
                </div>
              </div>
              <div className="leading-6 font-medium font-drone text-base mx-[45px] my-[8px] flex">
                WINNINGS
              </div>
            </div>
            <PlayerItem
              id={1}
              player={'lid**********'}
              winnings={'19 466.92'}
              borderColor="#DA458F"
              avatarUrl={'/assets/images/avatar1.png'}
            />
            <PlayerItem
              id={2}
              player={'abc**********'}
              winnings={'19 466.92'}
              borderColor="#D6D6D6"
              avatarUrl={'/assets/images/avatar2.png'}
              opacity={'opacity-80'}
            />
            <PlayerItem
              id={3}
              player={'jon**********'}
              winnings={'19 466.92'}
              borderColor="#89888B"
              avatarUrl={'/assets/images/avatar3.png'}
              opacity={'opacity-60'}
            />
            <PlayerItem
              id={4}
              player={'won**********'}
              winnings={'19 466.92'}
              borderColor="#3A3841"
              avatarUrl={'/assets/images/avatar4.png'}
              opacity={'opacity-40'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default playRight;
