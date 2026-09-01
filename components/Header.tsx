import Link from "next/link";

import SearchBar from "@/components/SearchBar";

import { NAV_LINKS } from "@/constants/constants";

const Header = () => {
  return (
    <header className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-2xl tracking-wide">E-Buy</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href={NAV_LINKS.HOME}>Home</Link>
            <Link href={NAV_LINKS.CATALOGUE}>Catalogue</Link>
            <Link href={NAV_LINKS.ABOUT}>About</Link>
            <Link href={NAV_LINKS.CONTACTS}>Contacts</Link>
          </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
