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

const LineCharts = () => {
  const DateLine = [
    { name: "Mon", line1: 400, line2: 350, line3: 60, line4: 220 },
    { name: "Tue", line1: 280, line2: 400, line3: 150, line4: 170 },
    { name: "Wed", line1: 400, line2: 290, line3: 60, line4: 220 },
    { name: "Thu", line1: 180, line2: 480, line3: 330, line4: 160 },
    { name: "Fri", line1: 350, line2: 250, line3: 80, line4: 200 },
    { name: "Sat", line1: 100, line2: 150, line3: 400, line4: 290 },
    { name: "Sun", line1: 500, line2: 310, line3: 80, line4: 230 },
  ];

  const chartConfig = [
    {
      name: "Weekly Mentions",
      lines: [
        { key: "line1", name: "Stories", color: "#ffffff" },
        { key: "line2", name: "Comments", color: "#A5D6A7" },
        { key: "line3", name: "Reels", color: "#C5E1A5" },
        { key: "line4", name: "Posts", color: "#E6EE9C" },
      ],
    },
    {
      name: "Total Rewards",
      lines: [
        { key: "line1", name: "Free coffee", color: "#ffffff" },
        { key: "line2", name: "Free swag", color: "#A5D6A7" },
        { key: "line3", name: "E-book", color: "#C5E1A5" },
        { key: "line4", name: "Consulting", color: "#E6EE9C" },
      ],
    },
    {
      name: "Total Campaigns",
      lines: [
        { key: "line1", name: "Stories", color: "#ffffff" },
        { key: "line2", name: "Comments", color: "#A5D6A7" },
        { key: "line3", name: "Reels", color: "#C5E1A5" },
        { key: "line4", name: "Posts", color: "#E6EE9C" },
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
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Line Chart Card */}
      <div className="bg-[#689E54] w-full lg:w-[590px] p-4 md:p-6 text-[#FBFFF6]">
        <div className="space-y-8">
          {chartConfig.map((chart, chartIndex) => (
            <div key={chartIndex}>
              <h2 className="text-lg md:text-xl mb-2">{chart.name}</h2>
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
