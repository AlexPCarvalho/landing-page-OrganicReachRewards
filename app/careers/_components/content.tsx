"use client";

import { useI18n } from "@/app/i18n";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const Content = () => {

  const {t} = useI18n()

  return (
    <div className="container mx-auto px-4 py-16">
      <div
        className={`${poppins.className} sm:text-6xl md:text-[100px] text-5xl sm:tracking-[-6] tracking-[-3] text-lime-900 font-bold pt-40 sm:pt-40 sm:pl-20`}
      >
        <p className="pl-0  sm:pl-20 text-center sm:text-left">
          {t("careers.content.title1")}
        </p>
        <p className="pl-0 pt-5 sm:pl-20 text-center sm:text-center">
          {t("careers.content.title2")}
        </p>
      </div>
      <div>
        <p className="text-gray-600 pt-10 text-xl text-center sm:text-2xl px-4 sm:px-20">
{t("careers.content.text")}
        </p>
      </div>

      <div className="flex flex-col pb-12 items-center mb-40 gap-4 mt-10">
        <Link
          href="/jobs"
          className="font-bold text-center bg-lime-700 px-10 py-4 rounded-2xl text-[20px] text-white w-full  sm:w-auto"
        >
          {t("careers.content.button")}
        </Link>
      </div>
    </div>
  );
};

export default Content;
