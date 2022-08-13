import Footer from '../../layout/footer';
import CommunityList from './community';
import Intro from './intro';
import Play from './play';
import EarnNft from './earnNft';
import NewArrival from './newArrival';
import PlayRight from './playRight';
import Partner from './partner';

const Home = () => {
  return (
    <div>
      <Intro />
      <NewArrival />
      <EarnNft />
      <Play />
      <PlayRight />
      <Partner />
      <CommunityList />
      <Footer />
    </div>
  );
};

export default Home;
