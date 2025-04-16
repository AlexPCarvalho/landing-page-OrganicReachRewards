"use client";
import { Della_Respira } from "next/font/google";

const dellaRespira = Della_Respira({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Title = () => {
  return (
    <div className="flex justify-center w-full bg-[#30503A]">
      <div
        className={`${dellaRespira.className} text-center w-full  px-4 md:px-10 xl:px-[300px] py-6 md:py-10 lg:py-12 xl:py-14 2xl:py-16 text-white`}
      >
        <div>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl pb-4 md:pb-6 lg:pb-8 xl:pb-10 2xl:pb-12 leading-tight">
            Connects brands and customers through <br /> social media.
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed">
            Boost loyalty and reduce barriers—low friction and maximum reach for
            your brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
