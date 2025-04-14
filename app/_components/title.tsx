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
        className={`${dellaRespira.className} text-center w-full max-w-[1800px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 py-10 md:py-16 lg:py-20 xl:py-24 2xl:py-[120px] text-white`}
      >
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-[120px] pb-6 md:pb-8 lg:pb-10 xl:pb-12 2xl:pb-[74px] leading-tight">
            Connects brands and customers through <br/> social media.
          </p>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] leading-relaxed">
            Boost loyalty and reduce barriers—low friction and maximum
            reach for your brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;