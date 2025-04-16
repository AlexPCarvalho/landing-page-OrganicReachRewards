"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  TooltipProps,
} from "recharts";

import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import PieCharts from "./pieCharts";

const barrasDiasData = [
  { name: "Mon", value: 100 },
  { name: "Tue", value: 450 },
  { name: "Wed", value: 250 },
  { name: "Thu", value: 500 },
  { name: "Fri", value: 200 },
  { name: "Sat", value: 400 },
  { name: "Sun", value: 300 },
];

const barrasHorasData = [
  { name: "07h", value: 150 },
  { name: "08h", value: 250 },
  { name: "09h", value: 400 },
  { name: "10h", value: 100 },
  { name: "11h", value: 80 },
  { name: "12h", value: 600 },
  { name: "13h", value: 400 },
  { name: "14h", value: 90 },
  { name: "15h", value: 170 },
  { name: "16h", value: 100 },
  { name: "17h", value: 230 },
  { name: "18h", value: 600 },
  { name: "19h", value: 350 },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 text-[#000] border rounded text-xs shadow">
        <p className="font-bold">{label}</p>
        {payload.map((entry, index) =>
          entry.name && entry.value ? (
            <p key={index}>{`${entry.name}: ${entry.value}`}</p>
          ) : null
        )}
      </div>
    );
  }
  return null;
};

const BarCharts = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Bar Chart Card */}
      <div className="bg-[#689E54] p-4 md:p-6 text-[#FBFFF6]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Chart by Days */}
          <div>
            <h2 className="text-lg md:text-xl mb-2">Engagement by Days</h2>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barrasDiasData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="name" stroke="#ffffff" />
                  <YAxis stroke="#ffffff" ticks={[0, 50, 250, 500]} />
                  <Tooltip
                    content={
                      <CustomTooltip
                        active={undefined}
                        payload={undefined}
                        label={undefined}
                      />
                    }
                  />
                  <Legend />
                  <Bar dataKey="value" fill="#FBFFF6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart by Hours */}
          <div>
            <h2 className="text-lg md:text-xl mb-2">Engagement by Hours</h2>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barrasHorasData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis
                    dataKey="name"
                    stroke="#ffffff"
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis stroke="#ffffff" ticks={[0, 50, 100, 250, 500]} />
                  <Tooltip
                    content={
                      <CustomTooltip
                        active={undefined}
                        payload={undefined}
                        label={undefined}
                      />
                    }
                  />
                  <Legend />
                  <Bar name="Engagement" dataKey="value" fill="#FBFFF6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Pie Charts */}
      <PieCharts />
    </div>
  );
};

export default BarCharts;
