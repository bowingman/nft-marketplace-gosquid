import PlayerItem from '../../components/card/PlayerItem';

const playRight = () => {
  return (
    <div className="container m-auto mb-[120px]">
      <div className="flex ">
        <div className="ml-[80px] mt-[210px]">
          <p className="font-drone bold text-yellow text-[80px]">PLAY</p>
          <p className="font-drone bold text-yellow text-[80px]">RIGHT</p>
          <p className="font-drone bold text-yellow text-[80px]">NOW</p>
        </div>
        <img
          src="/assets/images/person_7.png"
          alt="person_7.png"
          width="541px"
        />
        <div className="mt-[160px]">
          <div className="flex text-white mx-[80px] justify-between">
            <div className="leading-6 font-medium font-inter text-base mx-[60px] my-[8px]">
              #
            </div>
            <div className="flex items-center">
              <div className="leading-6 font-medium font-inter text-base pl-2">
                PLAYER
              </div>
            </div>
            <div className="leading-6 font-medium font-inter text-base mx-[75px] my-[8px] flex">
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
          />
          <PlayerItem
            id={3}
            player={'jon**********'}
            winnings={'19 466.92'}
            borderColor="#89888B"
            avatarUrl={'/assets/images/avatar3.png'}
          />
          <PlayerItem
            id={4}
            player={'won**********'}
            winnings={'19 466.92'}
            borderColor="#3A3841"
            avatarUrl={'/assets/images/avatar4.png'}
          />
        </div>
      </div>
    </div>
  );
};

export default playRight;
