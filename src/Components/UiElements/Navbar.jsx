import React, { useContext } from "react";
import { Link } from "react-router";
import { Theme } from "../../Context/Theme";
import { MdDarkMode,MdOutlineDarkMode  } from "react-icons/md";
export default function Navbar() {
  const [isDark,changetheme] = useContext(Theme);
  return (
    <nav
      className={`${isDark?"bg-gray-950 text-gray-100":"bg-gray-300 text-black"} sticky top-0 z-10 opacity-95 flex items-center justify-between p-1 md:p-4`}
    >
      <div className={`almendra font-extrabold  md:text-3xl `}>Renusagar</div>
      <div className="flex items-center justify-center text-xs md:text-lg  gap-3">
        <Link className="nav-btn" to="/">Home</Link>
        <Link className="nav-btn" to="/">Power & Industry</Link>
        <Link className="nav-btn" to="/">Explore</Link>
        <Link className="nav-btn" to="/">About</Link>
      </div>
      <div className="flex items-center text-xs md:text-lg justify-center gap-3">
        <button type="button" className={`${isDark?"border-white":"border-black"} hover:scale-105 border boader-8 rounded-4xl`} onClick={changetheme}>{isDark?<MdDarkMode size={25} color="yellow" ></MdDarkMode>:<MdOutlineDarkMode  size={25} color="black"></MdOutlineDarkMode >}</button>
        <Link to="/">
            LogIn-{">"}
        </Link>
      </div>
    </nav>
  );
}
