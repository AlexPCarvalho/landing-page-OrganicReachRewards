
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
      <div className="max-w-screen-xl mx-auto">
        <div className={`${dellaRespira.className} py-6 md:py-10 xl:py-12`}>
          <p className="text-2xl md:text-4xl xl:text-8xl text-white leading-tight">
            {t("content.title")}
          </p>
          <p className="text-white text-sm md:text-base xl:text-[22px] pt-4 md:pt-6 xl:pt-0">
            {t("content.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
