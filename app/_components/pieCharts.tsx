"use client";

import React from "react";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

import { useEffect, useState } from "react";
import { useI18n } from "../i18n";

const PieCharts = () => {
  const { t } = useI18n();

  const [radius, setRadius] = useState(140); // padrão para 2xl

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width >= 1280 && width < 1536) {
        // xl
        setRadius(90); // menor
      } else {
        // 2xl ou acima
        setRadius(140); // padrão
      }
    };

    updateRadius(); // define ao montar
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);


  const pieData1 = [
    { name: t("chart.pie.1name1"), value: 35 },
    { name: t("chart.pie.1name2"), value: 28 },
    { name: t("chart.pie.1name3"), value: 20 },
    { name: t("chart.pie.1name4"), value: 35 },
  ];

  const pieData2 = [
    { name: t("chart.pie.2name1"), value: 40 },
    { name: t("chart.pie.2name2"), value: 30 },
    { name: t("chart.pie.2name3"), value: 15 },
    { name: t("chart.pie.2name4"), value: 15 },
  ];

  const COLORS = ["#63783F", "#99CE85", "#fff", "#30503A"];

  const PieCustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: { name: string; value: number; color: string }[];
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-300 shadow-md text-[#30503A] rounded text-xs">
          <p style={{ color: payload[0].color }}>
            {`${payload[0].name}: ${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  interface LabelProps {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  }

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: LabelProps) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const color = COLORS[index % COLORS.length];
    const isLight = color === "#99CE85" || color === "#fff";

    return (
      <text
        x={x}
        y={y}
        fill={isLight ? "#000" : "#FBFFF6"}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={20}
        fontWeight="bold"
        className="xl:text-[18px] 2xl:text-[25px] text-[20px] 2xl:leading-[30px] leading-[20px]"
      >
        {(percent * 100).toFixed(0)}%
      </text>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {[
        { title: t("chart.pie.1title"), data: pieData1 },
        { title: t("chart.pie.2title"), data: pieData2 },
      ].map((item, idx) => (
        <div
          key={idx}
          className="py-[44.07px]  px-[2px] bg-[#689E54] text-[#FBFFF6] w-full lg:w-1/2"
        >
          <div>
            <div className="flex 2xl:pb-[45px] xl:pb-[75px] gap-[44px] flex-col md:flex-row">
              <h2 className="text-[25px] pl-[10px] xl:text-[16px] 2xl:text-[25px] leading-tight whitespace-pre-line">
                {item.title}
              </h2>

              <div className="grid pr-[10] gap-1">
                {item.data.map((data, i) => (
                  <div key={i} className="flex text-[15px]  items-center">
                    <div
                      className="w-3 h-3 xl:w-2 xl:h-2 2xl:w-3 2xl:h-3  mx-2"
                      style={{ backgroundColor: COLORS[i % COLORS.length] }}
                    ></div>
                    {data.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[305.98px] w-[305.98px] 2xl:h-[305.98px] 2xl:w-[305.98px] xl:h-[230] xl:w-[230] rounded-full mx-auto">
              <ResponsiveContainer>
                <PieChart>
                  <Tooltip content={<PieCustomTooltip />} />
                  <Pie
                    data={item.data}
                    outerRadius={radius}
                    dataKey="value"
                    nameKey="name"
                    labelLine={false}
                    label={renderCustomizedLabel}
                  >
                    {item.data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        className=""
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PieCharts;
