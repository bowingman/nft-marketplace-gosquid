import Footer from '../../layout/footer';
import CommunityList from './commuinty';
import Intro from './intro';

const Home = () => {
  return (
    <div className="bg-[#1E1E1E]">
      <Intro />
      <CommunityList />
      <Footer />
    </div>
  );
};

export default Home;
