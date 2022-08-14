import playImage from '../../assets/images/play-button.png';
import CustomButton from '../../components/button/CustomButton';
import PlayItem from '../../components/card/PlayItem';

const Play = () => {
  return (
    <div className="xl:grid xl:grid-cols-2 px-[160px]">
      <div className="bg-[url('/assets/images/play.png')] bg-cover sm: h-[400px] relative">
        <div className="flex bg-[#2A282F] ">
          <div className="blur flex items-center justify-center font-drone text-4xl text-[#17161A] absolute bottom-0 w-[133px] bg-[#FBC625]/[.13] h-[133px]"></div>
          <img
            src={playImage}
            className="absolute bottom-[43px] left-[50px] z-10"
            alt="palyImage.png"
          />
          <div className="pr-7 pt-6 font-inter text-4xl text-white width-9/10 text-[16px] leading-6 absolute bottom-0 bg-[#000000]/[.7] w-full h-[133px] text-right ">
            <p className="font-drone font-bold text-[32px]">
              LET'S PLAY WITH US!
            </p>
            <div className="pt-1 mt-3 px-4">
              <CustomButton label="PLAY GAME" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-3 grid-flow-col text-[black] min-height">
        <PlayItem
          bgColor="#FBC625"
          number={1}
          numberColor={'text-[#17161A]'}
          contentColor={'#17161A'}
        />
        <PlayItem
          bgColor="#3D3B44"
          number={2}
          numberColor={'text-white'}
          contentColor={'#D6D6D6'}
        />
        <PlayItem
          bgColor="#2A282F"
          number={3}
          numberColor={'text-white'}
          contentColor={'#D6D6D6'}
        />
      </div>
    </div>
  );
};

export default Play;
