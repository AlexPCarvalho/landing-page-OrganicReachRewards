import Image from "next/image";
import Link from "next/link";
import { useI18n } from "../i18n";

const Footer = () => {

  const {t} = useI18n();
  return (
    <footer className="bg-[#30503A] text-white px-4 md:px-10 py-6 md:py-10 xl:py-12 2xl:py-14">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col xl:flex-row border-solid border-[#D3E9CA] border-b mx-auto pb-10 md:pb-[30px] justify-between items-center xl:items-start text-center xl:text-left gap-10 xl:gap-0 max-w-screen-xl">
          <div className="flex flex-col md:flex-row items-center justify-center xl:justify-between gap-6">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="Logo OrganicReach Rewards"
              className="w-10 h-10 md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[94px] xl:h-[92px]"
            />
            <h1 className="max-w-full xl:max-w-[600px] text-center xl:text-start text-sm md:text-base xl:text-lg font-semibold">
              {t("footer.text")}
            </h1>
          </div>

          <div className="flex flex-col justify-center text-sm md:text-base xl:text-lg font-semibold items-center gap-4">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link href="/careers">{t("footer.careers")}</Link>
              <Link href="/consumer-terms">{t("footer.terms")}</Link>
              <Link href="/privacy">{t("footer.privacy")}</Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link href="/compliance">{t("footer.compliance")}</Link>
              <Link href="/data-deletion-policy">{t("footer.deletion")}</Link>
            </div>
          </div>
        </div>

        <div className="text-center text-sm md:text-base xl:text-lg font-semibold pt-6 md:pt-10 xl:pt-12">
          <h1>{t("footer.copy")}</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
