import Footer from '../../layout/footer';
import CommunityList from './commuinty';
import Intro from './intro';
import EarnNft from './earnNft';

const Home = () => {
  return (
    <div className="bg-[#1E1E1E]">
      <Intro />
      <EarnNft />
      <CommunityList />
      <Footer />
    </div>
  );
};

export default Home;
