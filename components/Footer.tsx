"use client";

import { useState } from "react";
import Link from "next/link";

import { NAV_LINKS } from "@/constants/constants";

const Footer = () => {
  const [userEmail, setUserEmail] = useState("");

  const handleSubscribe = () => {
    setUserEmail("");
  };

  return (
    <div className="py-12 px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 bg-gray-100 text-sm">
      <div className="flex flex-col md:flex-row gap-16 justify-center">
        <div className="flex justify-between w-1/2">
          <div className="flex flex-col justify-between gap-6">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-4">
              <Link href={NAV_LINKS.ABOUT}>About Us</Link>
              <Link href={NAV_LINKS.CONTACTS}>Contact Us</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Careers</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-4"></div>
            <Link href="#">All Products</Link>
            <Link href="#">Accessories</Link>
            <Link href="#">For Men</Link>
            <Link href="#">For Women</Link>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-4">
              <Link href="#">Customer Service</Link>
              <Link href="#">My Account</Link>
              <Link href="#">Find Stores</Link>
              <Link href="#">Terms & Conditions</Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 bg-white"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <button
              className="w-1/4 bg-[rgb(243,92,122)] text-white cursor-pointer"
              onClick={handleSubscribe}
            >
              JOIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
