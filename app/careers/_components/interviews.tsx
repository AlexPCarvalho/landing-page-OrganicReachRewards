"use client";

import { useI18n } from "@/app/i18n";

const Interviews = () => {
  const { t } = useI18n();
  return (
    <>
      <div className="container border-solid pt-20 pb-10 border-stone-700 border-t mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column: Title */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              {t("careers.interviews.title")}
            </h1>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-3 text-2xl space-y-8 text-gray-700">
            <p>{t("careers.interviews.text0")}</p>
            <p>{t("careers.interviews.text1")}</p>
            <p>{t("careers.interviews.text2")}</p>
            <p>{t("careers.interviews.text3")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interviews;
