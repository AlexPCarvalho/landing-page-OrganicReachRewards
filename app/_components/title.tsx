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
      <div className="w-full px-4 md:px-10">
        <div
          className={`${dellaRespira.className} text-center w-full max-w-screen-xl mx-auto py-6 md:py-10 lg:py-12 xl:py-14 2xl:py-16 text-white`}
        >
          <div>
            <p className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl pb-4 md:pb-6 lg:pb-8 xl:pb-10 2xl:pb-12 leading-tight">
              {t("home.title")}
            </p>

            <p className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed">
              {t("home.subtitle")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
