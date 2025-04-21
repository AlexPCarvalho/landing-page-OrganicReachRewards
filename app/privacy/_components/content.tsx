"use client";

import { useI18n } from "@/app/i18n";

const Content = () => {
  const { t } = useI18n();
  return (
    <>
      <div className="text-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-7xl font-bold text-lime-900 pt-10 mb-4">
              {t("privacy.title0")}
            </h1>
          </div>

          <section className="space-y-8 text-2xl border-solid pt-15 border-stone-700 border-t">
            <p>
              {t("privacy.text0")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("privacy.title1")}
            </h2>
            <p>{t("privacy.text1")}</p>

            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>
                {t("privacy.list1.1")}
              </li>
              <li>
                {t("privacy.list1.2")}
              </li>
            </ul>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("privacy.title2")}
            </h2>
            <p>{t("privacy.text2")}</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>
                {t("privacy.list2.1")}
              </li>
              <li>
                {t("privacy.list2.2")}
              </li>
              <li>
                {t("privacy.list2.3")}
              </li>
              <li>
                {t("privacy.list2.4")}
              </li>
            </ul>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("privacy.title3")}
            </h2>
            <p>
              {t("privacy.text3")}
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>
                {t("privacy.list3.1")}
              </li>
            </ul>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("privacy.title4")}
            </h2>
            <p>
              {t("privacy.text4")}
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>
                {t("privacy.list4.1")}
              </li>
              <li>
                {t("privacy.list4.2")}
              </li>
              <li>
                {t("privacy.list4.3")}
              </li>
            </ul>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("privacy.title5")}
            </h2>
            <p>
              {t("privacy.text5")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("privacy.title6")}
            </h2>
            <p>
              {t("privacy.text6")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("privacy.title7")}
            </h2>
            <p>
              {t("privacy.text7")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("privacy.title8")}
            </h2>
            <p>
              {t("privacy.text8")}
            </p>

            <h2 className="text-5xl font-semibold text-lime-900 mt-8">
              {t("privacy.title9")}
            </h2>
            <p>
              {t("privacy.text9")}
            </p>
            <ul className="list-inside mt-4">
              <li>
                {t("privacy.text9.1")} <strong>{t("privacy.text9.2")}</strong>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Content;
