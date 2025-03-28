"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex z-10 fixed w-full text-xl items-center justify-between bg-stone-50 px-6 py-4 font-bold">
      <div>
        <Image
          src="/logoB.png"
          width={150}
          height={90}
          alt="Organic Reach Rewards"
        />
      </div>

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
          <Link href="/signIn" className="text-lime-700 font-bold">
            Sign In
          </Link>
          <Link
            href="/signUp"
            className="font-bold bg-lime-700 px-4 py-2 rounded-lg text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <Link href="/signIn" className="text-lime-700 font-bold">
          Sign In
        </Link>
        <Link
          href="/signUp"
          className="font-bold bg-lime-700 px-4 py-2 rounded-lg text-white"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
