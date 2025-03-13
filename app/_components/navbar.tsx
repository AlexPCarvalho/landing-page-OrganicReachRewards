"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-stone-50 px-6 py-4 font-bold">
      {/* LOGO (Clicável apenas no mobile) */}
      <div>
        <Link href="/" className="block md:hidden">
          <Image
            src="/logo.png"
            width={150}
            height={90}
            alt="Organic Reach Rewards"
            className="cursor-pointer"
          />
        </Link>
        <Image
          src="/logo.png"
          width={150}
          height={90}
          alt="Organic Reach Rewards"
          className="hidden md:block"
        />
      </div>

      {/* BOTÃO MENU HAMBURGUER (Mobile) */}
      <button
        className="md:hidden text-lime-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MENU (Mobile: aparece ao clicar no botão | Desktop: centralizado) */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-stone-50 md:bg-transparent shadow-md md:shadow-none p-5 md:p-0 md:items-center md:gap-10 md:flex-1 md:justify-center`}
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <Link
            href="/"
            className={`${
              pathname == "/" ? "text-lime-700" : "text-gray-500"
            } block md:inline-block py-2 px-4`}
          >
            Home
          </Link>
        </div>

        {/* BOTÕES SIGN IN / SIGN UP (No mobile dentro do menu, no desktop à direita) */}
        <div className="flex flex-col md:hidden items-center  gap-4 mt-4">
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

      {/* BOTÕES SIGN IN / SIGN UP (Sempre à direita no desktop) */}
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
