"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import BarCharts from "./barCharts";
import { useI18n } from "../i18n";

const LineCharts = () => {

  const { t } = useI18n();

  const DateLine = [
    { name: t("chart.line.date1"), line1: 400, line2: 350, line3: 60, line4: 220 },
    { name: t("chart.line.date2"), line1: 280, line2: 400, line3: 150, line4: 170 },
    { name: t("chart.line.date3"), line1: 400, line2: 290, line3: 60, line4: 220 },
    { name: t("chart.line.date4"), line1: 180, line2: 480, line3: 330, line4: 160 },
    { name: t("chart.line.date5"), line1: 350, line2: 250, line3: 80, line4: 200 },
    { name: t("chart.line.date6"), line1: 100, line2: 150, line3: 400, line4: 290 },
    { name: t("chart.line.date7"), line1: 500, line2: 310, line3: 80, line4: 230 },
  ];

  const chartConfig = [
    {
      name: t("chart.1title"),
      lines: [
        { key: "line1", name: t("chart.1line1"), color: "#ffffff" },
        { key: "line2", name: t("chart.1line2"), color: "#A5D6A7" },
        { key: "line3", name: t("chart.1line3"), color: "#C5E1A5" },
        { key: "line4", name: t("chart.1line4"), color: "#E6EE9C" },
      ],
    },
    {
      name: t("chart.2title"),
      lines: [
        { key: "line1", name: t("chart.2line1"), color: "#ffffff" },
        { key: "line2", name: t("chart.2line2"), color: "#A5D6A7" },
        { key: "line3", name: t("chart.2line3"), color: "#C5E1A5" },
        { key: "line4", name: t("chart.2line4"), color: "#E6EE9C" },
      ],
    },
    {
      name: t("chart.3title"),
      lines: [
        { key: "line1", name: t("chart.3line1"), color: "#ffffff" },
        { key: "line2", name: t("chart.3line2"), color: "#A5D6A7" },
        { key: "line3", name: t("chart.3line3"), color: "#C5E1A5" },
        { key: "line4", name: t("chart.3line4"), color: "#E6EE9C" },
      ],
    },
  ];

  const CustomTooltip = ({
    active,
    payload,
    label,
    chartIndex,
  }: TooltipProps<ValueType, NameType> & { chartIndex: number }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 text-[#000] border rounded text-xs shadow">
          <p className="font-bold">{label}</p>
          {payload.map((entry, index) => {
            const lineName = chartConfig[chartIndex].lines.find(
              (line) => line.key === entry.dataKey
            )?.name;
            return entry.value ? (
              <p key={index}>{`${lineName}: ${entry.value}`}</p>
            ) : null;
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex  xl:w-[840px] 2xl:w-full flex-col w-full lg:flex-row gap-4">
      {/* Line Chart Card */}
      <div className="bg-[#689E54] w-full 4lg:w-[590px] xl:w-[3000px] 2xl:w-[590px] p-4 md:p-6 text-[#FBFFF6]">
        <div className="space-y-8">
          {chartConfig.map((chart, chartIndex) => (
            <div key={chartIndex}>
              <h2 className="text-lg xl:text-[16px] 2xl:text-lg md:text-xl mb-2">{chart.name}</h2>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={DateLine}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#ccc"
                      opacity={0.3}
                    />
                    <XAxis dataKey="name" stroke="#ffffff" />
                    <YAxis stroke="#ffffff" ticks={[0, 50, 100, 250, 500]} />
                    <Tooltip
                      content={(props) => (
                        <CustomTooltip {...props} chartIndex={chartIndex} />
                      )}
                    />
                    {chart.lines.map((line, index) => (
                      <Line
                        key={index}
                        type="monotone"
                        name={line.name}
                        dataKey={line.key}
                        stroke={line.color}
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 6 }}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bar Charts */}
      <BarCharts />
    </div>
  );
};

export default LineCharts;
