import { Della_Respira } from "next/font/google";

const dellaRespira = Della_Respira({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Title = () => {
  return (
    <div
      className={`${dellaRespira.className} text-center bg-[#30503A] px-4 md:px-10 xl:px-[300px] py-10 md:py-20 xl:py-[120px] text-white`}
    >
      <div>
        <p className="text-3xl md:text-5xl xl:text-[120px] pb-6 md:pb-12 xl:pb-[74px] leading-tight">
          Connects brands and customers through <br/> social media.
        </p>

        <p className="text-lg md:text-2xl xl:text-[48px] leading-relaxed">
          Boost loyalty and reduce barriers—low friction and maximum
          reach for your brand.
        </p>
      </div>
    </div>
  );
};

export default Title;