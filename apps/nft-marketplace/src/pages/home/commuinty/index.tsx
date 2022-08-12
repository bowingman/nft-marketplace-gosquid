import SubTitle from 'apps/nft-marketplace/src/components/subtitle';
import Community from './community';
import { ReactComponent as FaceBookIcon } from '../../../assets/images/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/images/twitter.svg';
import { ReactComponent as TelegramIcon } from '../../../assets/images/telegram.svg';
import { ReactComponent as DiscrodIcon } from '../../../assets/images/discord.svg';

const communities = [
  {
    Icon: <FaceBookIcon />,
    title: 'FACEBOOK',
    name: 'GOSQUID',
  },
  {
    Icon: <TwitterIcon />,
    title: 'TWITTER',
    name: 'GOSQUID',
  },
  {
    Icon: <TelegramIcon />,
    title: 'TELEGRAM',
    name: 'GOSQUID',
  },
  {
    Icon: <DiscrodIcon />,
    title: 'DISCORD',
    name: 'GOSQUID',
  },
];

const CommunityList = () => {
  return (
    <>
      <SubTitle title="JOIN OUR COMMUNITY">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 md:flex-row gap-[120px] justify-center pb-[70px] w-[70%]">
            {communities.map((community) => {
              return (
                <Community
                  Icon={community.Icon}
                  title={community.title}
                  name={community.name}
                />
              );
            })}
          </div>
        </div>
      </SubTitle>
    </>
  );
};

export default CommunityList;
