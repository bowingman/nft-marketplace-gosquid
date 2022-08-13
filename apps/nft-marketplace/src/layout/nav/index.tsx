import './style.css';
import Logo from '../../assets/images/logoNG.svg';
import MenuItem from '../../components/menuItem/menuItem';

const Header = () => {
  return (
    <div className="bg-[#17161A]/[.7] fixed h-20 z-10 w-full">
      <div className="xl:mx-[160px] lg:mx-[0px]">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <img className="2xl:block sm:hidden" alt="FullScreen" src={Logo} />
            <div className="flex items-center"></div>
            <div className="flex 2xl:gap-[60px] sm:gap-[30px] mt-[8px] 2xl:ml-[60px] xl:ml-[0px] sm:ml-[30px]">
              <div
                className={`flex flex-col items-start p-0 w-[35px] h-[22px]`}
              >
                <span className="font-drone font-bold text-sm leading-5 flex items-center text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:cursor-pointer">
                  HOME
                </span>
                <div className="w-[16px] h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 z-20"></div>
              </div>
              <MenuItem name={'ABOUT US'} className="w-[64px] h-[20px]" />
              <MenuItem name={'OUR TEAMS'} className="w-[73px] h-[20px]" />
              <MenuItem name={'MARKETPLACE'} className="w-[89px] h-[20px]" />
              <MenuItem name={'GOSQUID TOKEN'} className="w-[100px] h-[20px]" />
              <MenuItem name={'WHITEPAPER'} className="w-[80px] h-[20px]" />
            </div>
          </div>
          <div className="flex items-center ml-auto">
            <button className="ml-auto mr-[40px] w-[160px] font-inter font-semibold text-white h-[40px] rounded-[4px] bg-gradient-91.47 from-[#DA458F] to-[#DA34DD]">
              Connect Wallet
            </button>

            <img
              src="/assets/images/bxs-chevron-down.svg"
              alt="bxs-chevron-down.svg"
              className="hover:cursor-pointer"
            />
            <img
              src="/assets/images/world.svg"
              className="pl-4 hover:cursor-pointer"
              alt="world.svg"
            />
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
