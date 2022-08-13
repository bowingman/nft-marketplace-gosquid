import Footer from '../../layout/footer';
import CommunityList from './community';
import Intro from './intro';
import Play from './play';
import EarnNft from './earnNft';

const Home = () => {
  return (
    <div>
      <Intro />
      <EarnNft />
      <Play />
      <CommunityList />
      <Footer />
    </div>
  );
};

export default Home;
