"use client";

import React from "react";
import LineCharts from "./lineCharts";

const Dashboard = () => {
  return (
    <div className="bg-[#99CE85] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[300px] py-6 lg:py-[100]">
      <div className="">
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          {/* Card de porcentagem */}
          <div className="bg-[#689E54] w-full lg:w-[740px] p-6 text-[#FBFFF6] flex flex-col">
            <div className="flex flex-col lg:flex-row w-full pt-[30] pb-[60] items-center lg:pl-[108]">
              <div className="text-5xl md:text-7xl lg:text-[150px] font-bold">
                28%
              </div>

              <div className="text-center lg:text-left lg:pl-[20] text-lg lg:text-[24px]">
                <p className="lg:mb-[-10]">of customers</p>
                <p className="lg:mb-[-10]">mention</p>
                <p>your page</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 lg:mt-0">
              <div className="bg-[#689E54] rounded-2xl border border-solid border-[#8FC07C] p-4 text-center">
                <div className="text-lg">Total Mentions</div>
                <div className="text-4xl md:text-5xl lg:text-7xl font-bold">
                  549
                </div>
              </div>

              <div className="bg-[#689E54] rounded-2xl p-4 border border-solid border-[#8FC07C] text-center">
                <div className="text-lg">Total Customers</div>
                <div className="text-4xl md:text-5xl lg:text-7xl font-bold">
                  210
                </div>
              </div>
            </div>
          </div>

          {/* Card de ranking */}
          <div className="bg-[#689E54] w-full lg:w-[560] text-[#FBFFF6]">
            <h2 className="text-xl lg:text-[21.09px] text-center pb-6 lg:pb-[45] pt-4 lg:pt-[27.42]">
              Ranking of People Who Mentioned the Most
            </h2>

            <div className="relative flex items-end justify-center">
              {/* Podium */}
              <div className="bottom-0 gap-2 lg:gap-[8.5] flex items-end justify-center">
                {/* 4th Place */}
                <div className="w-1/6">
                  <div className="flex flex-col items-center mb-2">
                    <div className="w-10 h-10 lg:w-[52.91] lg:h-[50.62] bg-[#FBFFF6] rounded-full mb-2"></div>
                    <p className="text-[#FBFFF6] text-xs lg:text-[10.55px] text-center">
                      @carlos
                    </p>
                  </div>
                  <div className="bg-[#FBFFF6] h-16 lg:h-[86.48] w-full lg:w-[88.19] border border-solid border-gray-300 flex items-center justify-center">
                    <span className="text-[#689E54] text-xl lg:text-[32px] font-bold">
                      4º
                    </span>
                  </div>
                </div>

                {/* 2nd Place */}
                <div className="w-1/6">
                  <div className="flex flex-col items-center mb-2">
                    <div className="w-10 h-10 lg:w-[52.91] lg:h-[50.62] bg-[#FBFFF6] rounded-full mb-2"></div>
                    <p className="text-[#FBFFF6] text-xs lg:text-[10.55px] text-center">
                      @amanda
                    </p>
                  </div>
                  <div className="bg-[#FBFFF6] h-28 lg:h-[146.59] w-full lg:w-[88.19] border border-solid border-gray-300 flex items-center justify-center">
                    <span className="text-[#689E54] text-xl lg:text-[32px] lg:mt-[-44] font-bold">
                      2º
                    </span>
                  </div>
                </div>

                {/* 1st Place */}
                <div className="w-1/6">
                  <div className="flex flex-col items-center mb-2">
                    <div className="w-10 h-10 lg:w-[52.91] lg:h-[50.62] bg-[#FBFFF6] rounded-full mb-2"></div>
                    <p className="text-[#FBFFF6] text-xs lg:text-[10.55px] text-center">
                      @renata
                    </p>
                  </div>
                  <div className="bg-[#FBFFF6] h-36 lg:h-[202.48] w-full lg:w-[88.19] border border-solid border-gray-300 flex items-center justify-center">
                    <span className="text-[#689E54] text-xl lg:text-[32px] lg:mt-[-50] font-bold">
                      1º
                    </span>
                  </div>
                </div>

                {/* 3rd Place */}
                <div className="w-1/6">
                  <div className="flex flex-col items-center mb-2">
                    <div className="w-10 h-10 lg:w-[52.91] lg:h-[50.62] bg-[#FBFFF6] rounded-full mb-2"></div>
                    <p className="text-[#FBFFF6] text-xs lg:text-[10.55px] text-center">
                      @victor
                    </p>
                  </div>
                  <div className="bg-[#FBFFF6] h-24 lg:h-[136.04] w-full lg:w-[88.19] border border-solid border-gray-300 flex items-center justify-center">
                    <span className="text-[#689E54] text-xl lg:text-[32px] font-bold">
                      3º
                    </span>
                  </div>
                </div>

                {/* 5th Place */}
                <div className="w-1/6">
                  <div className="flex flex-col items-center mb-2">
                    <div className="w-10 h-10 lg:w-[52.91] lg:h-[50.62] bg-[#FBFFF6] rounded-full mb-2"></div>
                    <p className="text-[#FBFFF6] text-xs lg:text-[10.55px] text-center">
                      @alex
                    </p>
                  </div>
                  <div className="bg-[#FBFFF6] h-12 lg:h-[72.77] w-full lg:w-[88.19] border border-solid border-gray-300 flex items-center justify-center">
                    <span className="text-[#689E54] text-xl lg:text-[32px] font-bold">
                      5º
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Podium base */}
            <div className="mx-4 lg:mx-[30] h-3 lg:h-[14.76] bg-[#FBFFF6] border border-solid border-gray-200 mb-6 lg:mb-[42]"></div>
          </div>
        </div>

        <LineCharts />
      </div>
    </div>
  );
};

export default Dashboard;
