import facebook from "../assets/icon-facebook.svg";
import youtube from "../assets/icon-youtube.svg";
import twitter from "../assets/icon-twitter.svg";
import pintrest from "../assets/icon-pinterest.svg";
import insta from "../assets/icon-instagram.svg";
import logoWhite from "../assets/logo-white.svg";
const ATag = ({ src }) => {
  return (
    <a href="/#">
      <img src={src} alt="img" className="h-8" />
    </a>
  );
};

const Footer = () => {
  const imgSrc = [facebook, youtube, twitter, pintrest, insta];
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>

          <div>
            <img src={logoWhite} className="h-8" alt="" />
          </div>

          <div className="flex justify-center space-x-5">
            {imgSrc.map((src, index) => (
              <ATag src={src} key={index} />
            ))}
          </div>
        </div>

        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="/#" className="hover:text-brightRed">
              Home
            </a>
            <a href="/#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="/#" className="hover:text-brightRed">
              Products
            </a>
            <a href="/#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="/#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="/#" className="hover:text-brightRed">
              Community
            </a>
            <a href="/#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
