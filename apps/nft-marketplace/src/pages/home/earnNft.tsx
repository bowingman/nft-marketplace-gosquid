import EarnNftCard from '../../components/card/EarnNftCard';
import SubTitle from '../../components/subTitle/SubTitle';
import rectangle1 from '../../assets/images/rectangle1.png';
import rectangle2 from '../../assets/images/rectangle2.png';
import rectangle3 from '../../assets/images/rectangle3.png';
import wing1 from '../../assets/images/wing1.png';
import wing2 from '../../assets/images/wing2.png';
import wing3 from '../../assets/images/wing3.png';
import GridBackground from '../../assets/images/grid.svg';

const EarnNft = () => {
  return (
    <div className="relative">
      <img src={GridBackground} alt="" className="absolute top-[48%]" />
      <div className="container mx-auto">
        <div className="pt-[120px] flex flex-col items-center">
          <SubTitle
            title="Jump to earn nft game"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          />
          <div className="w-full flex pt-[156px] flex-col md:flex-row gap-[150px] md:gap-10 justify-center">
            <div>
              <EarnNftCard
                backImage={rectangle1}
                characterImage={wing1}
                title="solo journey"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Duis aute"
              />
            </div>
            <div>
              <EarnNftCard
                backImage={rectangle2}
                characterImage={wing2}
                title="play with other"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Duis aute "
              />
            </div>
            <div>
              <EarnNftCard
                backImage={rectangle3}
                characterImage={wing3}
                title="sobig Event"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Duis aute"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnNft;
