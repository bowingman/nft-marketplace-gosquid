import svg from '../../assets/images/logo.svg';
import './style.css';
const Footer = () => {
  return (
    <div className="bg-[#17161A] px-40 pt-[60px] pb-[40px]">
      <div className="flex flex-wrap justify-between relative">
        <div className="h-[90px] w-[40%]">
          <img src={svg} alt="" />
        </div>
        <div className="w-[40%]">
          <h4 className="title-20-text">NAVIGATION</h4>
          <div className="flex flex-row header-16-medium-text mt-[40px]">
            <div className="mr-[40px]">
              <p>Home</p>
              <p>About us</p>
              <p>Our team</p>
            </div>
            <div className="mr-[40px]">
              <p>Whitepaper</p>
              <p>Marketplace</p>
              <p>Roadmap</p>
            </div>
            <div className="mr-[40px]">
              <p>FAQs</p>
              <p>News</p>
              <p>Community</p>
            </div>
          </div>
          <div className="mt-[72px]">
            <h4 className="title-20-text mb-[32px]">
              SUBSCRIBE TO RECEIVE OUR LATEST UPDATE
            </h4>
            <form action="#" className="flex flex-col md:flex-row gap-5">
              <input
                type="text"
                className="rounded border-white border-[1px] bg-[#17161A] focus-visible:border-white px-[20px] py-[12px] caption-12-medium-text w-[100%]"
                placeholder="Your email address"
              />
              <button
                className="bg-gradient-to-r from-[#DA458F] to-[#DA34DD] px-[40px] py-[10px] rounded"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="lg:absolute lg:bottom-0 xl:relative">
          <h4 className="title-20-text">CONTACT US</h4>
          <div className="flex flex-row items-center gap-[9px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0ZM11.9298 11.3933L11.8765 11.4467C11.0621 12.2558 9.79639 12.3942 8.82648 11.78C6.95716 10.6157 5.37819 9.04011 4.20982 7.17332C3.59565 6.20342 3.73398 4.93766 4.54315 4.12332L4.59648 4.06999C4.76432 3.9018 4.998 3.81655 5.2347 3.83713C5.47141 3.85771 5.68686 3.98203 5.82315 4.17665L6.91315 5.73665C7.13836 6.05481 7.10028 6.4892 6.82315 6.76332L6.75982 6.82999C6.55896 7.02501 6.51765 7.33215 6.65982 7.57332C7.09187 8.2988 7.69938 8.90402 8.42648 9.33332C8.66765 9.47549 8.97479 9.43417 9.16982 9.23332L9.23648 9.16999C9.5106 8.89286 9.94499 8.85478 10.2632 9.07999L11.8232 10.17C12.0166 10.3063 12.1401 10.5211 12.1607 10.7569C12.1813 10.9927 12.0968 11.2255 11.9298 11.3933Z"
                fill="white"
              />
            </svg>
            <span className="header-16-medium-text">0378-785-855</span>
          </div>
          <div className="flex flex-row items-center gap-[9px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.0952 0H1.90476C0.852791 0 0 0.852791 0 1.90476V11.0476C0 12.0996 0.852791 12.9524 1.90476 12.9524H3.80952V15.2381C3.81081 15.5453 3.99643 15.8216 4.28029 15.939C4.56415 16.0564 4.89073 15.9918 5.10857 15.7752L7.93143 12.9524H14.0952C15.1472 12.9524 16 12.0996 16 11.0476V1.90476C16 0.852791 15.1472 0 14.0952 0ZM9.52381 8.95238H4.57143C4.15064 8.95238 3.80952 8.61126 3.80952 8.19048C3.80952 7.76969 4.15064 7.42857 4.57143 7.42857H9.52381C9.9446 7.42857 10.2857 7.76969 10.2857 8.19048C10.2857 8.61126 9.9446 8.95238 9.52381 8.95238ZM11.4286 5.52381H4.57143C4.15064 5.52381 3.80952 5.18269 3.80952 4.7619C3.80952 4.34112 4.15064 4 4.57143 4H11.4286C11.8494 4 12.1905 4.34112 12.1905 4.7619C12.1905 5.18269 11.8494 5.52381 11.4286 5.52381Z"
                fill="white"
              />
            </svg>

            <span className="header-16-medium-text">support@gosquid.io</span>
          </div>
        </div>
      </div>
      <hr className="my-[40px]" />
      <div className="flex flex-row justify-between">
        <div>
          <span>©2022 GoSquid. All Rights reserved.</span>
        </div>
        <div className="flex flex-row header-16-medium-text gap-[60px]">
          <span>Security</span>
          <span>Legal</span>
          <span>Privacy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
