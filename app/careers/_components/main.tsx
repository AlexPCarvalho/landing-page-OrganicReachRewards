"use client";

import { useI18n } from "@/app/i18n";

const Main = () => {
  const { t } = useI18n();

  return (
    <>
      <div className="container border-solid pt-20 pb-10 border-stone-700 border-t mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column: Title */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              {t("careers.main.title0")}
            </h1>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-3 text-2xl space-y-8 text-gray-700">
            <p>{t("careers.main.text0")}</p>

            <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl">
                {t("careers.main.title1")}
              </h3>
              <p>{t("careers.main.text1")}</p>
            </div>

            <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl">
                {t("careers.main.title2")}
              </h3>
              <p>{t("careers.main.text2")}</p>
            </div>

            <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl">
                {t("careers.main.title3")}
              </h3>
              <p>{t("careers.main.text3")}</p>
            </div>

            <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl">
                {t("careers.main.title4")}
              </h3>
              <p>{t("careers.main.text4")}</p>
            </div>
            <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl">
                {t("careers.main.title5")}
              </h3>
              <p>{t("careers.main.text5")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
