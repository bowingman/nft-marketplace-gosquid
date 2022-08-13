import React from 'react';

import Nav from '../layout/Nav';
import NewArrivalComponent from '../components/NewArrivalComponent';
import TokenDistributionComponent from '../components/TokenDistributionComponent';
import PlayerItem from '../components/PlayerItem';
import CommunityItem from '../components/CommunityItem';
import SocialItem from '../components/SocialItem';

const Home = () => {
  return (
    <div className="bg-[#1E1E1E]">
      <div className="home-back left-0 top-0 w-[100%]"></div>
      <Nav></Nav>
      <div className="relative w-[100%] h-[275px]">
        <div className="absolute w-[100%] h-[300px] left-0 top-[-25px] bg-[url('/assets/images/yellowbg.png')] text-center">
          <div className="container m-auto flex items-center justify-between">
            <div>
              <img
                src="/assets/images/NewArribal.png"
                alt="New Arrival.png"
                className="w-full"
              />
            </div>
            <NewArrivalComponent
              title={'THE DJ'}
              imageUrl={'/assets/images/person_1.png'}
            />
            <NewArrivalComponent
              title={'ASSASIN'}
              imageUrl={'/assets/images/person_2.png'}
            />
            <NewArrivalComponent
              title={'LEON GUY'}
              imageUrl={'/assets/images/person_3.png'}
            />
            <NewArrivalComponent
              title={'MAFIA ENGLAND'}
              imageUrl={'/assets/images/person_4.png'}
            />
            <NewArrivalComponent
              title={'BASKETBALL GIRL'}
              imageUrl={'/assets/images/person_5.png'}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1018px] h-[814px] m-auto ">
        <TokenDistributionComponent
          name={'STAKER'}
          progress={25}
          price={'$25.000.000'}
        />
      </div>
      <div className="container m-auto mb-[120px]">
        <div className="flex ">
          <div className="ml-[80px] mt-[210px]">
            <p className="font-drone bold text-yellow text-[80px]">PLAY</p>
            <p className="font-drone bold text-yellow text-[80px]">RIGHT</p>
            <p className="font-drone bold text-yellow text-[80px]">KNOW</p>
          </div>
          <img
            src="/assets/images/person_7.png"
            alt="person_7.png"
            width="541px"
          />
          <div className="mt-[210px]">
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
      <div className="bg-[url('/assets/images/communitybg.png')] w-full h-[210px] flex items-center px-[122px] justify-between">
        <CommunityItem imageUrl={'/assets/images/Frame (1).png'} />
        <CommunityItem imageUrl={'/assets/images/CoinMarketCapp.png'} />
        <CommunityItem imageUrl={'/assets/images/Pancake swap.png'} />
        <CommunityItem imageUrl={'/assets/images/image 10.png'} />
        <CommunityItem imageUrl={'/assets/images/Frame.png'} />
        <CommunityItem imageUrl={'/assets/images/Eth.png'} />
      </div>
      <div className="mx-[358px] flex justify-between">
        <SocialItem
          imageUrl={'/assets/images/Facebook.png'}
          name="FACEBOOK"
          description="GOSQUID"
        />
        <SocialItem
          imageUrl={'/assets/images/Twitter.png'}
          name="TWITTER"
          description="GOSQUID"
        />
        <SocialItem
          imageUrl={'/assets/images/Tele.png'}
          name="TELEGRAM"
          description="GOSQUID"
        />
        <SocialItem
          imageUrl={'/assets/images/Discord.png'}
          name="DISCORD"
          description="GOSQUID"
        />
      </div>
    </div>
  );
};

export default Home;
