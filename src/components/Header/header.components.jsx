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
    <header className=" px-5 py-6 bg-white lg:px-20 lg:py-3 lg:flex lg:justify-between lg:items-center lg:relative lg:z-[1000]">
      <div className=" flex justify-between">
        <img src={logo} alt="logo" />
        <img
          className=" lg:hidden"
          src={!toggle ? open : close}
          onClick={navHandle}
          alt="menu bar"
        />
      </div>

      <nav className="hidden lg:block">
        <ul className=" lg:flex lg:gap-5">
          <li className=" text-normal font-normal lg:text-grayish-blue lg:hover:text-dark-blue lg:hover:border-hover">
            <a href="/#">Home</a>
          </li>
          <li className=" text-normal font-normal lg:text-grayish-blue lg:hover:text-dark-blue lg:hover:border-hover">
            <a href="/#">About</a>
          </li>
          <li className=" text-normal font-normal lg:text-grayish-blue lg:hover:text-dark-blue lg:hover:border-hover">
            <a href="/#">Contact</a>
          </li>
          <li className=" text-normal font-normal lg:text-grayish-blue lg:hover:text-dark-blue lg:hover:border-hover">
            <a href="/#">Blog</a>
          </li>
          <li className=" text-normal font-normal lg:text-grayish-blue lg:hover:text-dark-blue lg:hover:border-hover">
            <a href="/#">Careers</a>
          </li>
        </ul>
      </nav>

      <a
        href="/#"
        className=" hidden lg:block bg-gradient-to-r from-lime-green to-bright-cyan text-white py-3 px-7 rounded-full text-base font-bold lg:hover:opacity-70"
      >
        Request Invite
      </a>

      {toggle ? (
        <nav className=" lg:hidden absolute left-0 right-0 mx-auto w-4/5 bg-white mt-11 rounded-md shadow-xl">
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
