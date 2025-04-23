
import { Della_Respira } from "next/font/google";
import { useI18n } from "../i18n";

const dellaRespira = Della_Respira({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Content = () => {

  const { t } = useI18n();
  return (
    <div className="bg-[#30503A] text-center px-4 md:px-10">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[220px] 2xl:px-[100px] 3xl:px-[500px] 4xl:px-[600px] mx-auto">
        <div className={`${dellaRespira.className} py-6 md:py-10 xl:py-12`}>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-7xl text-white leading-tight">
            {t("content.title")}
          </p>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl pt-4 md:pt-6 xl:pt-0">
            {t("content.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
