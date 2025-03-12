"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { name: "Aug 15", value: 50000 },
  { name: "Sep", value: 150000 },
  { name: "Oct", value: 400000 },
  { name: "Nov", value: 900000 },
  { name: "Dec", value: 1_500_000 },
  { name: "Jan", value: 2_200_000 },
  { name: "Feb", value: 3_000_000 },
  { name: "Mar", value: 4_200_000 },
  { name: "Apr", value: 5_500_000 },
  { name: "May", value: 6_300_000 },
  { name: "Jun", value: 7_000_000 },
  { name: "Jul", value: 7_500_000 },
  { name: "Aug 13", value: 7_800_000 },
];

const Chart = () => {
  return (
    <div className=" bg-withe p-6 rounded-3xl shadow-sm h-48">
     
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-800 font-medium">Follower Growth</p>
        <div className="flex items-center gap-2 text-xs text-gray-700 mt-2">
        <span className=" px-2 py-1 rounded-lg shadow text-gray-900 flex items-center gap-1">
          <TrendingUp size={14} className="text-green-600" />
          15.500%
        </span>
        <span className="text-xs text-gray-600">compared to last year</span>
      </div>
      </div>

     
      <h2 className="text-3xl font-bold mt-1">7.750,000 Followers</h2>

    
      <div className="w-full h-24 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#4d7c0f" />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="value" fill="#4d7c0f" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>


      
    </div>
  );
};

export default Chart;