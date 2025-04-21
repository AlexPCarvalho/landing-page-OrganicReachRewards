"use client";

import { useI18n } from "@/app/i18n";
import Image from "next/image";

const Offer = () => {
  const { t } = useI18n();

  return (
    <>
      <div className="border-solid  border-stone-700 border-t">
        <h1 className="text-6xl pt-20 pb-10 font-bold ">
          {t("careers.offer.title")}
        </h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6  px-4 sm:px-6 md:px-12 py-12 ">
          <div className="flex justify-center">
            <Image
              src="/health.png"
              width={600}
              height={600}
              alt="Health and Wellbeing"
              className="rounded-3xl w-full max-w-[600px] h-auto"
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl text-lime-900 font-bold mb-4">
              {t("careers.offer.title1")}
            </h2>
            <p className="text-gray-800 text-2xl">{t("careers.offer.text1")}</p>

            <ul className="list-disc text-2xl pl-15  text-gray-500">
              <li className="pb-3">{t("careers.offer.1list1")}</li>
              <li className="pb-3">{t("careers.offer.1list2")}</li>
              <li className="pb-3">{t("careers.offer.1list3")}</li>
              <li className="pb-3">{t("careers.offer.1list4")}</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 md:px-12 py-12">
        <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-lime-900 ">
            {t("careers.offer.title2")}
          </h2>
          <p className="text-gray-800 text-2xl">{t("careers.offer.text2")}</p>
          <ul className="list-disc text-2xl pl-15  text-gray-500">
            <li className="pb-3">{t("careers.offer.2list1")}</li>
            <li className="pb-3">{t("careers.offer.2list2")}</li>
            <li className="pb-3">{t("careers.offer.2list3")}</li>
            <li className="pb-3">{t("careers.offer.2list4")}</li>
          </ul>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <Image
            src="/compensation.png"
            width={600}
            height={600}
            alt="Compensation and Support"
            className="rounded-3xl w-full max-w-[600px] h-auto"
          />
        </div>
      </section>

      <section className="grid mb-10 grid-cols-1 md:grid-cols-2 gap-6  px-4 sm:px-6 md:px-12 py-12 ">
        <div className="flex justify-center">
          <Image
            src="/innovation.png"
            width={600}
            height={600}
            alt="Culture of Continuous Innovation"
            className="rounded-3xl w-full max-w-[600px] h-auto"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl text-lime-900 font-bold mb-4">
            {t("careers.offer.title3")}
          </h2>
          <p className="text-gray-800 text-2xl">{t("careers.offer.text3")}</p>

          <ul className="list-disc text-2xl pl-15  text-gray-500">
            <li className="pb-3">{t("careers.offer.3list1")}</li>
            <li className="pb-3">{t("careers.offer.3list2")}</li>
            <li className="pb-3">{t("careers.offer.3list3")}</li>
            <li className="pb-3">{t("careers.offer.3list4")}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Offer;
