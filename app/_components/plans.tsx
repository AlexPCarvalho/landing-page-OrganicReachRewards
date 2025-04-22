"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "../i18n/index";

interface Plan {
  name: string;
  description: string;
  features: string[];
  price: string;
}

const Plans = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useI18n();

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const starterFeatures = [
    t("plans.starter.features.0"),
    t("plans.starter.features.1"),
    t("plans.starter.features.2"),
    t("plans.starter.features.3"),
  ];

  const proFeatures = [
    t("plans.pro.features.0"),
    t("plans.pro.features.1"),
    t("plans.pro.features.2"),
    t("plans.pro.features.3"),
    t("plans.pro.features.4"),
    t("plans.pro.features.5"),
  ];

  const enterpriseFeatures = [
    t("plans.enterprise.features.0"),
    t("plans.enterprise.features.1"),
    t("plans.enterprise.features.2"),
    t("plans.enterprise.features.3"),
    t("plans.enterprise.features.4"),
  ];

  const plans: Plan[] = [
    {
      name: t("plans.starter.name"),
      description: t("plans.starter.description"),
      features: starterFeatures,
      price: t("plans.starter.price"),
    },
    {
      name: t("plans.pro.name"),
      description: t("plans.pro.description"),
      features: proFeatures,
      price: t("plans.pro.price"),
    },
    {
      name: t("plans.enterprise.name"),
      description: t("plans.enterprise.description"),
      features: enterpriseFeatures,
      price: t("plans.enterprise.price"),
    },
  ];

  return (
    <div className="bg-[#fff] px-4 md:px-10 py-6 md:py-10 xl:py-12 2xl:py-14">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[220px] 2xl:px-[100px] 3xl:px-[500px] 4xl:px-[600px] mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold pb-10 md:pb-[60px] text-[#63783F]">
          {t("plans.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-[20px]">
          {plans.map((plan, index) => (
            <Link
              key={index}
              href={"https://app.organicreachrewards.com"}
              className={`bg-[#30503A] px-6 md:px-[36px] py-12 md:py-[58px] flex flex-col justify-between transition-transform duration-300 ${
                hoveredIndex === index
                  ? "transform scale-105 shadow-2xl"
                  : "shadow-lg"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <h3 className="text-2xl md:text-3xl xl:text-[35px] pb-6 md:pb-[20px] font-bold text-white">
                  {plan.name}
                </h3>
                <p className="text-base md:text-lg xl:text-[20px] pb-10 md:pb-[95px] font-semibold text-white">
                  {plan.description}
                </p>
                <ul className="text-white text-base md:text-lg xl:text-[20px]">
                  {plan.features.map((feature: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-4 md:gap-[20px] pb-4 md:pb-[18px]"
                    >
                      <Image
                        src="/plans.svg"
                        alt="Ícone do plano"
                        width={20}
                        height={20}
                        className="w-5 md:w-auto"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-[95px] text-white text-4xl md:text-5xl xl:text-[60px] font-bold">
                {plan.price === t("plans.enterprise.price") ? (
                  <span className="font-bold bg-[#FBFFF6] py-2 md:py-[12px] px-4 md:px-[24px] text-base md:text-[24px] text-[#30503A]">
                    {plan.price}
                  </span>
                ) : (
                  <>
                    {plan.price}
                    <p className="text-white font-light text-sm md:text-[16px]">
                      {t("plans.perMonth")}
                    </p>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
