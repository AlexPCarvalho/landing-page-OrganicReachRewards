"use client";

import React from "react";
import { Anton } from "next/font/google";
import { useI18n } from "@/app/i18n";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const DataDeletionPolicy = () => {
  const { t } = useI18n();
  return (
    <div className="text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1
            className={`${anton.className} text-7xl font-bold text-lime-900 pt-10 mb-4`}
          >
            {t("deletion.title0")}
          </h1>
        </div>

        <section className="space-y-8 text-2xl border-solid pt-15 border-stone-700 border-t">
          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("deletion.title1")}
          </h2>
          <p>
            {t("deletion.text1")}
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("deletion.title2")}
          </h2>
          <p>
            {t("deletion.text2")}
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("deletion.title3")}
          </h2>
          <ul className="list-disc list-inside space-y-2 mt-4 text-xl">
            <li>
             {t("deletion.text3")}
            </li>
            <li>
             {t("deletion.text3.1")}
            </li>
          </ul>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("deletion.title4")}
          </h2>
          <p>
            {t("deletion.text4")}
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("deletion.title5")}
          </h2>
          <p>
            {t("deletion.text5")}
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("deletion.title6")}
          </h2>
          <p>
            {t("deletion.text6")}
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("deletion.title7")}
          </h2>
          <p>
            {t("deletion.text7")}
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-xl">
            <li>
              {t("deletion.list7.1")}
            </li>
            <li>
              {t("deletion.list7.2")}
            </li>
          </ul>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("deletion.title8")}
          </h2>
          <p>
            {t("deletion.text8")}
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("deletion.title9")}
          </h2>
          <p>
            {t("deletion.text9")}
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("deletion.title10")}
          </h2>
          <p>
            {t("deletion.text10")}
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("deletion.title11")}
          </h2>
          <p>
            {t("deletion.text11")}
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("deletion.title12")}
          </h2>
          <p>
            {t("deletion.text12")}
          </p>

          
        </section>
      </div>
    </div>
  );
};

export default DataDeletionPolicy;
