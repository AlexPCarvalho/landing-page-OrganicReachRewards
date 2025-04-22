"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Days_One } from "next/font/google";
import { useI18n } from "../i18n";


const daysOne = Days_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, changeLanguage } = useI18n();

  return (
    <nav
      className={` ${daysOne.className} flex w-full text-xl items-center justify-between bg-[#30503A] px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-3 md:py-6 xl:py-8 2xl:py-10 relative`}
    >
      <Link href="/">
        <div>
          <Image
            src="/logo.png"
            width={56}
            height={54}
            alt="OrganicReach Rewards"
            className="w-14 h-14 md:w-[56px] md:h-[52px] lg:w-[64px] lg:h-[62px] xl:w-[44px] xl:h-[42px] 2xl:w-[64px] 2xl:h-[62px] 3xl:w-[64px] 3xl:h-[62px] 4xl:w-[64px] 4xl:h-[62px]"
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
        <div className="flex items-center gap-3">
          <button
            onClick={() => changeLanguage("pt-BR")}
            aria-label="Português"
            className="rounded-full bg-white p-1 shadow-md border-2 border-[#30503A] focus:outline-none focus:ring-2 focus:ring-[#30503A] transition-all"
          >
            <Image
              src="/flagBrazil.svg"
              alt="Português"
              width={32}
              height={32}
              className="w-6 h-6 2xl:h-6 2xl:w-6 xl:w-5 xl:h-5 rounded-full"
            />
          </button>
          <button
            onClick={() => changeLanguage("en-US")}
            aria-label="English"
            className="rounded-full bg-white p-1 shadow-md border-2 border-[#30503A] focus:outline-none focus:ring-2 focus:ring-[#30503A] transition-all"
          >
            <Image
              src="/flagEUA.svg"
              alt="English"
              width={32}
              height={32}
              className="w-6 h-6  2xl:h-6 2xl:w-6 xl:w-5 xl:h-5 rounded-full"
            />
          </button>
        </div>

        <Link
          href="https://app.organicreachrewards.com/"
          className="bg-white px-[16px] py-[12px] md:px-[16px] md:py-[12px] xl:px-[10px] xl:py-[8px] 2xl:py-[14px] 2xl:px-[18px] rounded-lg text-[#63783F] text-[18px] md:text-[18px] xl:text-[15px] 2xl:text-[18px] w-full md:w-auto text-center"
        >
          {t("nav.signIn")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
