"use client";

import { Della_Respira } from "next/font/google";
import { useI18n } from "../i18n";

const dellaRespira = Della_Respira({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Title = () => {
  const { t } = useI18n();

  return (
    <div className="flex justify-center w-full bg-[#30503A]">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-[100px] 2xl:px-[100px]">
        <div
          className={`${dellaRespira.className} text-center py-10 md:py-14 lg:py-20 text-white`}
        >
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-normal leading-tight">
            {t("home.title")}
          </p>

          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-relaxed">
            {t("home.subtitle")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;