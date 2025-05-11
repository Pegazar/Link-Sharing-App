import React, { useState, useEffect } from "react";
import Logo from "../assets/logo-devlinks-large.svg";
import { Link, useLocation } from "react-router-dom";
import { LinkIcon, ProfileIcon } from "../assets/svg/svgicons";
import Preview from "../assets/preview.svg"
import LogoMobile from "../assets/logo-mobile.svg"

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 z-20 xl:relative flex justify-between items-center bg-white rounded-none xl:rounded-xl p-6 border-b xl:border-0 border-gray-200">
      <div>
        <img className="w-32 h-auto hidden md:block" src={Logo} alt="Logo" />
        <img className="block md:hidden" src={LogoMobile} alt="Mobile Logo" />
      </div>
      <div className="flex items-center justify-center gap-7">
        <Link
          to="/links"
          className={`group flex items-center gap-2 px-5 py-2 rounded-md ${activeLink === "/links"
              ? "bg-[#EFEBFF] text-[#633CFF]"
              : "text-[#737373] hover:bg-[#EFEBFF]"
            }`}
        >
          <LinkIcon
            className={`transition-colors ${activeLink === "/links"
                ? "text-[#633CFF]"
                : "text-[#737373] group-hover:text-[#633CFF]"
              }`}
          />
          <span className="font-semibold group-hover:text-[#633CFF] transition-colors hidden md:block">
            Links
          </span>
        </Link>

        <Link
          to="/profile"
          className={`group flex items-center gap-2 px-5 py-2 rounded-md transition-colors ${activeLink === "/profile"
              ? "bg-[#EFEBFF] text-[#633CFF]"
              : "text-[#737373] hover:bg-[#EFEBFF]"
            }`}
        >
          <ProfileIcon
            className={`transition-colors ${activeLink === "/profile"
                ? "text-[#633CFF]"
                : "text-[#737373] group-hover:text-[#633CFF]"
              }`}
          />
          <span className="font-semibold group-hover:text-[#633CFF] transition-colors hidden md:block">
            Profile Details
          </span>
        </Link>
      </div>
      <Link
        to="/preview"
        className="inline-flex items-center justify-center border border-[#633CFF] text-[#633CFF] font-semibold px-6 py-2 rounded-lg hover:bg-[#EFEBFF] active:scale-95 transition-all duration-150"
      >
        <span className="hidden md:block">Preview</span>
        <img className="block md:hidden w-5 h-5" src={Preview} alt="Preview icon" />
      </Link>
    </div>
  );
};

export default Navbar;
