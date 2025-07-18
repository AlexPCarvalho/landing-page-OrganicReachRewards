"use client";

import React from "react";
import Image from "next/image";
import LineCharts from "./lineCharts";
import { useI18n } from "../i18n";

const Dashboard = () => {

  const { t } = useI18n();
  return (
<div className="flex justify-center items-center bg-[#99CE85] min-h-screen w-full">
      <div className="px-4 md:px-10 py-6 md:py-10 xl:py-12 2xl:py-14">
        <div className="w-full max-w-screen-xl px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[220px] 2xl:px-[100px] 3xl:px-[500px] 4xl:px-[600px]mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            {/* Card de porcentagem */}
            <div className="bg-[#689E54] flex-1 w-full p-4 sm:p-6 text-[#FBFFF6] flex flex-col">
              <div className="flex flex-col lg:flex-row w-full pt-4 lg:pt-6 xl:pt-10 2xl:pt-8 pb-6 lg:pb-8 xl:pb-20 2xl:pb-12 items-center lg:pl-6 xl:pl-[15]  2xl:pl-10">
                <div className="text-5xl md:text-6xl lg:text-7xl xl:text-[100px] 2xl:text-[150px] font-bold">
                  28%
                </div>

                <div className="text-center lg:text-left lg:pl-4 xl:pl-10 2xl:pl-8 text-lg lg:text-xl xl:text-[20px] 2xl:text-[24px]">
                  <p className="lg:mb-[-5px] xl:mb-[-7px] 2xl:mb-[-10px]">
                    {t("chart.text1")}
                  </p>
                  <p className="lg:mb-[-5px] xl:mb-[-7px] 2xl:mb-[-10px]">
                    {t("chart.text2")}
                  </p>
                  <p>{t("chart.text3")}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 lg:mt-0">
                <div className="bg-[#689E54] rounded-2xl border border-solid border-[#8FC07C] p-4 text-center">
                  <div className="text-lg xl:text-[18px] 2xl:text-2xl">
                    {t("chart.title")}
                  </div>
                  <div className="text-4xl md:text-5xl lg:text-6xl xl:text-[50px] 2xl:text-7xl font-bold">
                    549
                  </div>
                </div>

                <div className="bg-[#689E54] rounded-2xl p-4 border border-solid border-[#8FC07C] text-center">
                  <div className="text-lg xl:text-[18px] 2xl:text-2xl">
                    {t("chart.subtitle")}
                  </div>
                  <div className="text-4xl md:text-5xl lg:text-6xl xl:text-[50px] 2xl:text-7xl font-bold">
                    210
                  </div>
                </div>
              </div>
            </div>

            {/* Card de ranking */}
            <div className="bg-[#689E54] w-full lg:w-auto lg:flex-1  text-[#FBFFF6]">
              <h2 className="text-lg md:text-xl px-[30px] text-center pb-4 lg:pb-6 xl:pb-8 pt-4 lg:pt-6">
                {t("chart.ranking")}
              </h2>

              <div className="relative flex items-end justify-center px-2 sm:px-4 md:px-6 lg:px-8">
                {/* Podium */}
                <div className="bottom-0 gap-2 md:gap-3 lg:gap-4 xl:gap-2 2xl:gap-1 flex items-end justify-center w-full">
                  {/* 4th Place */}
                  <div className="w-1/6">
                    <div className="flex flex-col items-center mb-2">
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 overflow-hidden rounded-full mb-2">
                        <Image
                          src="/user1.png"
                          alt="User avatar"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="bg-[#FBFFF6] h-12 sm:h-16 lg:h-20 xl:h-24 2xl:h-32 w-full border border-solid border-gray-300 flex items-center justify-center">
                      <span className="text-[#689E54] text-lg sm:text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl font-bold">
                        4º
                      </span>
                    </div>
                  </div>

                  {/* 2nd Place */}
                  <div className="w-1/6">
                    <div className="flex flex-col items-center mb-2">
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 overflow-hidden rounded-full mb-2">
                        <Image
                          src="/user2.png"
                          alt="User avatar"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="bg-[#FBFFF6] h-20 sm:h-28 lg:h-32 xl:h-40 2xl:h-48 w-full border border-solid border-gray-300 flex items-center justify-center">
                      <span className="text-[#689E54] text-lg sm:text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl lg:mt-[-20px] xl:mt-[-30px] 2xl:mt-[-40px] font-bold">
                        2º
                      </span>
                    </div>
                  </div>

                  {/* 1st Place */}
                  <div className="w-1/6">
                    <div className="flex flex-col items-center mb-2">
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 overflow-hidden rounded-full mb-2">
                        <Image
                          src="/user3.png"
                          alt="User avatar"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="bg-[#FBFFF6] h-28 sm:h-36 lg:h-44 xl:h-52 2xl:h-64 w-full border border-solid border-gray-300 flex items-center justify-center">
                      <span className="text-[#689E54] text-lg sm:text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl lg:mt-[-30px] xl:mt-[-40px] 2xl:mt-[-50px] font-bold">
                        1º
                      </span>
                    </div>
                  </div>

                  {/* 3rd Place */}
                  <div className="w-1/6">
                    <div className="flex flex-col items-center mb-2">
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 overflow-hidden rounded-full mb-2">
                        <Image
                          src="/user4.png"
                          alt="User avatar"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="bg-[#FBFFF6] h-16 sm:h-24 lg:h-28 xl:h-36 2xl:h-44 w-full border border-solid border-gray-300 flex items-center justify-center">
                      <span className="text-[#689E54] text-lg sm:text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl font-bold">
                        3º
                      </span>
                    </div>
                  </div>

                  {/* 5th Place */}
                  <div className="w-1/6">
                    <div className="flex flex-col items-center mb-2">
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 overflow-hidden rounded-full mb-2">
                        <Image
                          src="/user5.png"
                          alt="User avatar"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="bg-[#FBFFF6] h-8 sm:h-12 lg:h-16 xl:h-20 2xl:h-28 w-full border border-solid border-gray-300 flex items-center justify-center">
                      <span className="text-[#689E54] text-lg sm:text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl font-bold">
                        5º
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Podium base */}
              <div className="mx-2 sm:mx-4 xl:mx-6 2xl:mx-8 h-2 sm:h-3 xl:h-4 2xl:h-6 bg-[#FBFFF6] border border-solid border-gray-200 mb-4 lg:mb-6 xl:mb-8 2xl:mb-10"></div>
            </div>
          </div>

          <LineCharts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
