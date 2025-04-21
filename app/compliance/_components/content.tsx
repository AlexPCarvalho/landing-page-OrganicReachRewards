"use client";

import React from "react";
import { Anton } from "next/font/google";
import { useI18n } from "@/app/i18n";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Compliance = () => {
  const { t } = useI18n();
  return (
    <div className="text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1
            className={`${anton.className} text-7xl font-bold text-lime-900 pt-10 mb-4`}
          >
            {t("compliance.title0")}
          </h1>
        </div>

        <section className="space-y-8 text-2xl border-solid pt-15 border-stone-700 border-t">
          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("compliance.title1")}
          </h2>
          <p>{t("compliance.text1")}</p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("compliance.title2")}
          </h2>
          <p>{t("compliance.text2")}</p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("compliance.title3")}
          </h2>
          <p>{t("compliance.text3")}</p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-xl">
            <li>{t("compliance.list3.1")}</li>
            <li>{t("compliance.list3.2")}</li>
            <li>{t("compliance.list3.3")}</li>
            <li>{t("compliance.list3.4")}</li>
          </ul>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("compliance.title4")}
          </h2>
          <p>{t("compliance.text4")}</p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-xl">
            <li>{t("compliance.list4.1")}</li>
            <li>{t("compliance.list4.2")}</li>
            <li>{t("compliance.list4.3")}</li>
          </ul>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("compliance.title5")}
          </h2>
          <p>{t("compliance.text5")}</p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-xl">
            <li>{t("compliance.list5.1")}</li>
            <li>{t("compliance.list5.2")}</li>
            <li>{t("compliance.list5.3")}</li>
          </ul>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("compliance.title6")}
          </h2>
          <p>{t("compliance.text6")}</p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-xl">
            <li>{t("compliance.list6.1")}</li>
            <li>{t("compliance.list6.2")}</li>
            <li>{t("compliance.list6.3")}</li>
          </ul>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("compliance.title7")}
          </h2>
          <p>{t("compliance.text7")}</p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("compliance.title8")}
          </h2>
          <p>{t("compliance.text8")}</p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            {t("compliance.title9")}
          </h2>
          <p>{t("compliance.text9")}</p>
        </section>
      </div>
    </div>
  );
};

export default Compliance;
