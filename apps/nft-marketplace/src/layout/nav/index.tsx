import './style.css';

const Header = () => {
  return (
    <nav className="bg-[#17161A]/[.7] fixed w-full h-20 z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="hidden lg:block h-8 w-auto"
                src="/assets/images/logo.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 font-drone text-[14px]">
                <a
                  href="#"
                  className="text-white block px-3 py-2 rounded-md className font-medium focus:bg-gradient-91.47 from-[#DA458F] to-[#DA34DD]"
                >
                  HOME
                </a>

                <a
                  href="#"
                  className="text-gray-300  block px-3 py-2 rounded-md className font-medium focus:bg-gradient-91.47 from-[#DA458F] to-[#DA34DD]"
                >
                  ABOUT US
                </a>

                <a
                  href="#"
                  className="text-gray-300 block px-3 py-2 rounded-md className font-medium focus:bg-gradient-91.47 from-[#DA458F] to-[#DA34DD]"
                >
                  OUT TEAMS
                </a>

                <a
                  href="#"
                  className="text-gray-300  block px-3 py-2 rounded-md className font-medium focus:bg-gradient-91.47 from-[#DA458F] to-[#DA34DD]"
                >
                  MARKETPLACE
                </a>

                <a
                  href="#"
                  className="text-gray-300 block px-3 py-2 rounded-md className font-medium focus:bg-gradient-91.47 from-[#DA458F] to-[#DA34DD]"
                >
                  GOSQUID TOKEN
                </a>

                <a
                  href="#"
                  className="text-gray-300 block px-3 py-2 rounded-md className font-medium focus:bg-gradient-91.47 from-[#DA458F] to-[#DA34DD]"
                >
                  WHITERPAPER
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="ml-auto mr-[40px] w-[160px] font-inter font-semibold text-white h-[40px] rounded-[4px] bg-gradient-91.47 from-[#DA458F] to-[#DA34DD]">
              Connect Wallet
            </button>

            <img src="/assets/images/nav-button-1.png" />
            <img src="/assets/images/nav-button-2.png" className="pl-4" />
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
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 font-drone text-[14px]">
          <a
            href="#"
            className="text-white block px-3 py-2 rounded-md className font-medium"
            aria-current="page"
          >
            HOME
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md className font-medium"
          >
            ABOUT US
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md className font-medium"
          >
            OUT TEAMS
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md className font-medium"
          >
            MARKETPLACE
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md className font-medium"
          >
            GOSQUID TOKEN
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md className font-medium"
          >
            WHITERPAPER
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
