"use client";

import { useI18n } from "@/app/i18n";



const Content = () => {
  const {t} = useI18n()


  return (
    <>
      <div className="text-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-7xl font-bold text-lime-900 pt-10 mb-4">
              {t("terms.title0")}
            </h1>
          </div>

          <section className="space-y-8 text-2xl border-solid pt-15 border-stone-700 border-t">
            <p>
              {t("terms.text0")}
            </p>
            <p>
              {t("terms.text0.1")}
            </p>
            <p>
              {t("terms.text0.2")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("terms.title1")}
            </h2>
            <p>
              {t("terms.text1")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("terms.title2")}
            </h2>
            <p>
              {t("terms.text2")}
            </p>

            <p>
              {t("terms.text2.1")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("terms.title3")}
            </h2>
            <p>
              {t("terms.text3")}
            </p>
            <p>
              {t("terms.text3.1")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("terms.title4")}
            </h2>
            <p>
              {t("terms.text4")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("terms.title5")}
            </h2>
            <p>
              {t("terms.text5")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("terms.title6")}
            </h2>
            <p>
              {t("terms.text6")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("terms.title7")}
            </h2>
            <p>
              {t("terms.text7")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
                {t("terms.title8")}
            </h2>
            <p>
              {t("terms.text8")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("terms.title9")}
            </h2>
            <p>
              {t("terms.text9")}
            </p>
            <p>
              {t("terms.text9.1")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("terms.title10")}
            </h2>
            <p>
              {t("terms.text10")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("terms.title11")}
            </h2>
            <p>
              {t("terms.text11")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("terms.title12")}
            </h2>
            <p>
              {t("terms.text12")}
            </p>
            <ul className="list-inside mt-4">
              <li>
                {t("terms.text12.1")} <strong>{t("terms.text12.2")}</strong>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Content;
