import { useState } from "react"

import logo from "../../assets/images/logo.svg"
import open from "../../assets/images/icon-hamburger.svg"
import close from "../../assets/images/icon-close.svg"

const Header = () => {
    const [toggle, setToggle] = useState(false);
    
    function navHandle(){
       setToggle(!toggle);
    }

    return ( 
        <header className=" px-5 py-6 relative z-0 bg-white">
            <div className=" flex justify-between">
                <img src={logo} alt="logo" />
                <img src={!toggle ? open : close} onClick={navHandle} alt="menu bar" />
            </div>

            {toggle ? <nav className=" absolute left-2 px-[8.6rem] bg-white mt-11 rounded-md shadow-xl">
                <ul className=" py-6 grid place-items-center gap-3">
                    <li className=" text-lg font-bold text-dark-blue"><a href="/#">Home</a></li>
                    <li className=" text-lg font-bold text-dark-blue"><a href="/#">About</a></li>
                    <li className=" text-lg font-bold text-dark-blue"><a href="/#">Contact</a></li>
                    <li className=" text-lg font-bold text-dark-blue"><a href="/#">Blog</a></li>
                    <li className=" text-lg font-bold text-dark-blue"><a href="/#">Careers</a></li>
                </ul>
            </nav>:
            ""
            }
        </header>
     );
}
 
export default Header;