import { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [className, setClassName] = useState("");

  const handleClick = () => {
    setOpen((prev) => !prev);
    setClassName((prev) => (className === "open" ? "" : "open"));
  };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden space-x-6 md:flex">
          <a href="/#" className="hover:text-darkGrayishBlue">
            Price
          </a>
          <a href="/#" className="hover:text-darkGrayishBlue">
            Products
          </a>
          <a href="/#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="/#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="/#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        <a
          href="/#"
          className="px-6 py-2 hidden bg-brightRed text-white rounded-full baseline hover:bg-brightRedLight  md:block"
        >
          Get Started
        </a>

        <button
          id="menu-btn"
          className={
            className + " block hamburger focus:outline-none md:hidden "
          }
          onClick={handleClick}
        >
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </button>
      </div>

      <div className="md:hidden">
        <div
          id="menu"
          className={`${
            open ? "flex" : ""
          } absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 ${
            open ? "" : "hidden"
          }`}
        >
          <a href="/#" className="hover:text-darkGrayishBlue">
            Price
          </a>
          <a href="/#" className="hover:text-darkGrayishBlue">
            Products
          </a>
          <a href="/#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="/#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="/#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
