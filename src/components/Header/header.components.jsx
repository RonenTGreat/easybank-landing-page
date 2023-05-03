import { useState } from "react";

import logo from "../../assets/images/logo.svg";
import open from "../../assets/images/icon-hamburger.svg";
import close from "../../assets/images/icon-close.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function navHandle() {
    setToggle(!toggle);
  }

  return (
    <header className=" px-5 py-6 relative z-0 bg-white md:px-20 md:py-3 md:flex md:justify-between md:items-center">
      <div className=" flex justify-between">
        <img src={logo} alt="logo" />
        <img
          className=" md:hidden"
          src={!toggle ? open : close}
          onClick={navHandle}
          alt="menu bar"
        />
      </div>

      <nav className="hidden md:block">
        <ul className=" md:flex md:gap-5">
          <li className=" text-normal font-normal md:text-grayish-blue md:hover:text-dark-blue md:hover:border-b-4 md:hover:border-b-lime-green">
            <a href="/#">Home</a>
          </li>
          <li className=" text-normal font-normal md:text-grayish-blue md:hover:text-dark-blue md:hover:border-b-4 md:hover:border-b-lime-green">
            <a href="/#">About</a>
          </li>
          <li className=" text-normal font-normal md:text-grayish-blue md:hover:text-dark-blue md:hover:border-b-4 md:hover:border-b-lime-green">
            <a href="/#">Contact</a>
          </li>
          <li className=" text-normal font-normal md:text-grayish-blue md:hover:text-dark-blue md:hover:border-b-4 md:hover:border-b-lime-green">
            <a href="/#">Blog</a>
          </li>
          <li className=" text-normal font-normal md:text-grayish-blue md:hover:text-dark-blue md:hover:border-b-4 md:hover:border-b-lime-green">
            <a href="/#">Careers</a>
          </li>
        </ul>
      </nav>

      <a
        href="/#"
        className=" hidden md:block bg-gradient-to-r from-lime-green to-bright-cyan text-white py-3 px-7 rounded-full text-base font-bold"
      >
        Request Invite
      </a>

      {toggle ? (
        <nav className=" md:hidden absolute left-0 right-0 mx-auto w-4/5 bg-white mt-11 rounded-md shadow-xl">
          <ul className=" py-6 grid place-items-center gap-3">
            <li className=" text-lg font-bold text-dark-blue">
              <a href="/#">Home</a>
            </li>
            <li className=" text-lg font-bold text-dark-blue">
              <a href="/#">About</a>
            </li>
            <li className=" text-lg font-bold text-dark-blue">
              <a href="/#">Contact</a>
            </li>
            <li className=" text-lg font-bold text-dark-blue">
              <a href="/#">Blog</a>
            </li>
            <li className=" text-lg font-bold text-dark-blue">
              <a href="/#">Careers</a>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
