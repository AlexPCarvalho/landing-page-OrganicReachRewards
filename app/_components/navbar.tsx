"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Days_One } from "next/font/google";

const daysOne = Days_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={` ${daysOne.className} flex w-full text-xl items-center justify-between bg-[#30503A] px-[300] py-[40] `}
    >
      <Link href="/">
        <div>
          <Image
            src="/logo.png"
            width={94}
            height={92}
            alt="OrganicReach Rewards"
          />
        </div>
      </Link>

      <button
        className="md:hidden text-lime-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-stone-50 md:bg-transparent shadow-md md:shadow-none p-5 md:p-0 md:items-center md:gap-10 md:flex-1 md:justify-center`}
      >
        <div className="flex flex-col  md:hidden items-center  gap-4 mt-4">
          <Link
            href="/signUp"
            className="font-bold bg-white px-4 py-2 rounded-lg text-[#63783F]"
          >
            Sing in / Sing Up
          </Link>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <Link
          href="/signUp"
          className="font-bold bg-white px-[26] py-[16]  text-[#63783F]"
        >
          Sing in / Sing Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
