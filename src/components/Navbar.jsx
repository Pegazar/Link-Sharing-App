import React, { useState, useEffect } from "react";
import Logo from "../assets/logo-devlinks-large.svg";
import { Link, useLocation } from "react-router-dom";
import { LinkIcon, ProfileIcon } from "../assets/svg/svgicons";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex justify-between items-center bg-white rounded-xl p-6">
      <div>
        <img className="w-36 h-auto" src={Logo} alt="Logo" />
      </div>
      <div className="flex items-center justify-center gap-7">
        <Link
          to="/links"
          className={`group flex items-center gap-2 px-5 py-3 rounded-md ${
            activeLink === "/links"
              ? "bg-[#EFEBFF] text-[#633CFF]"
              : "text-[#737373] hover:bg-[#EFEBFF]"
          }`}
        >
          <LinkIcon
            className={`transition-colors ${
              activeLink === "/links"
                ? "text-[#633CFF]"
                : "text-[#737373] group-hover:text-[#633CFF]"
            }`}
          />
          <span className="font-semibold group-hover:text-[#633CFF] transition-colors">
            Links
          </span>
        </Link>

        <Link
          to="/profile"
          className={`group flex items-center gap-2 px-5 py-3 rounded-md transition-colors ${
            activeLink === "/profile"
              ? "bg-[#EFEBFF] text-[#633CFF]"
              : "text-[#737373] hover:bg-[#EFEBFF]"
          }`}
        >
          <ProfileIcon
            className={`transition-colors ${
              activeLink === "/profile"
                ? "text-[#633CFF]"
                : "text-[#737373] group-hover:text-[#633CFF]"
            }`}
          />
          <span className="font-semibold group-hover:text-[#633CFF] transition-colors">
            Profile Details
          </span>
        </Link>
      </div>
      <Link
        to="/preview"
        className="border border-[#633CFF] text-[#633CFF] font-semibold px-6 py-3 rounded-lg hover:bg-[#EFEBFF] transition-colors"
      >
        Preview
      </Link>
    </div>
  );
};

export default Navbar;
