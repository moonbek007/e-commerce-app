"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCartIcon, UserIcon } from "lucide-react";

import { NAV_LINKS } from "@/constants/constants";

const NavIcons = () => {
  const [isLoggedIn] = useState(false);
  const [isProfileOpen, setProfileIsOpen] = useState(false);

  const [counter] = useState(0);

  const handleLogout = () => {
    if (isLoggedIn) {
      console.log("Log out");
    }
  };

  const handleToggleProfile = () => {
    setProfileIsOpen((prevState) => !prevState);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <div className="relative cursor-pointer flex items-center">
        <button className="cursor-pointer">
          <ShoppingCartIcon className="w-5 h-5" />
        </button>
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-[rgb(243,92,122)] rounded-full text-white text-sm flex items-center justify-center">
          {counter}
        </div>
      </div>

      {!isLoggedIn ? (
        <Link href={NAV_LINKS.LOGIN} className="cursor-pointer">
          <UserIcon className="w-5 h-5" />
        </Link>
      ) : (
        <button className="cursor-pointer" onClick={handleToggleProfile}>
          <UserIcon className="w-5 h-5" />
        </button>
      )}
      {isLoggedIn && isProfileOpen && (
        <div className="absolute p-3 rounded-md top-8 right-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <button className="cursor-pointer" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default NavIcons;
