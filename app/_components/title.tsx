import { Della_Respira } from "next/font/google";

const dellaRespira = Della_Respira({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Title = () => {
  return (
    <div
      className={`${dellaRespira.className} text-center bg-[#30503A]  px-[300] py-[120] text-white   `}
    >
      <div className="">
        <p className="text-[120px]  pb-[74] ">
          Connects brands and  customers through  social media.
        </p>

        <p className="text-[48px] ">
          Boost loyalty and reduce barriers—low friction and  maximum
          reach for your brand.
        </p>
      </div>
    </div>
  );
};

export default Title;
