import { Della_Respira } from "next/font/google";

const dellaRespira = Della_Respira({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Content = () => {
  return (
    <div className="bg-[#30503A] text-center px-4 md:px-10 xl:px-20 2xl:px-[300px]">
      <div className={`${dellaRespira.className} py-10 md:py-16 xl:py-[50px]`}>
        <p className="text-4xl md:text-6xl xl:text-[96px] text-white leading-tight">
          Powerful Insights, Simplified.
        </p>
        <p className="text-white text-base md:text-lg xl:text-xl pt-6 md:pt-8 xl:pt-0">
          Monitor mentions, track campaign performance, and pinpoint what drives
          the most customer engagement—all in one place.
        </p>
      </div>
    </div>
  );
};

export default Content;
