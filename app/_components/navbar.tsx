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
      className={` ${daysOne.className} flex w-full text-xl items-center justify-between bg-[#30503A] px-4 md:px-10 xl:px-[300px] py-6 md:py-10 xl:py-[40px] relative`}
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
        } md:flex flex-col md:flex-row absolute md:static top-20 left-0 w-full md:w-auto bg-[#FBFFF6] md:bg-transparent shadow-lg md:shadow-none p-6 md:p-0 items-center gap-6 md:gap-10 z-50`}
      >
        <Link
          href="https://app.organicreachrewards.com/"
          className=" bg-white px-[26px] py-[16px] md:px-[26px] md:py-[16px] rounded-lg text-[#63783F] text-[24px] w-full md:w-auto text-center"
        >
          Sign in / Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
