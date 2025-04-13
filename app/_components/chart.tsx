"use client";

import React from "react";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const Dashboard = () => {
  // Dados para os gráficos de linha (Menções Semanais)

  const linhaData = [
    { name: "Seg", linha1: 400, linha2: 350, linha3: 60, linha4: 220 },

    { name: "Ter", linha1: 280, linha2: 400, linha3: 150, linha4: 170 },

    { name: "Qua", linha1: 400, linha2: 290, linha3: 60, linha4: 220 },

    { name: "Qui", linha1: 180, linha2: 480, linha3: 330, linha4: 160 },

    { name: "Sex", linha1: 350, linha2: 250, linha3: 80, linha4: 200 },

    { name: "Sáb", linha1: 100, linha2: 150, linha3: 400, linha4: 290 },

    { name: "Dom", linha1: 500, linha2: 310, linha3: 80, linha4: 230 },
  ];

  const nomesGraficos = [
    "Menções Semanais",

    "Total de Recompensas",

    "Total de Campanhas",
  ];

  // Dados para o gráfico de barras (Engajamento por dias)

  const barrasDiasData = [
    { name: "Seg", valor: 100 },

    { name: "Ter", valor: 450 },

    { name: "Qua", valor: 250 },

    { name: "Qui", valor: 500 },

    { name: "Sex", valor: 200 },

    { name: "Sáb", valor: 400 },

    { name: "Dom", valor: 300 },
  ];

  // Dados para o gráfico de barras (Engajamento por hora)

  const barrasHorasData = [
    { name: "07h", valor: 150 },

    { name: "08h", valor: 250 },

    { name: "09h", valor: 400 },

    { name: "10h", valor: 100 },

    { name: "11h", valor: 80 },

    { name: "12h", valor: 600 },

    { name: "13h", valor: 400 },

    { name: "14h", valor: 90 },

    { name: "15h", valor: 170 },

    { name: "16h", valor: 100 },

    { name: "17h", valor: 230 },

    { name: "18h", valor: 600 },

    { name: "19h", valor: 350 },
  ];

  // Dados para os gráficos de pizza

  const pieData = [
    { name: "Comentários", value: 35 },

    { name: "Fotos", value: 28 },

    { name: "Reels", value: 20 },

    { name: "Stories", value: 35 },
  ];

  const COLORS = ["#63783F", "#99CE85", "#fff", "#30503A"];

  // Customização de Tooltip

  const CustomTooltip: React.FC<{
    active?: boolean;

    payload?: any[];

    label?: string;
  }> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-1 text-center border text-[#000] border-gray-300 shadow-md rounded-b text-[12px] ">
          <p className="font-bold">{`${label}`}</p>

          {payload.map((entry, index) => (
            <p key={`item-${index}`} className="text-[#000]">
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }

    return null;
  };

  // Customização de Tooltip para Pie Charts

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

  return (
    <div className="bg-[#99CE85] px-[300px] py-[100]">
      <div className="">
        <div className="flex gap-4 mb-4">
          {/* Card de porcentagem */}

          <div className="bg-[#689E54] w-[740px] p-6 text-[#FBFFF6] flex flex-col">
            <div className="flex w-full items-center pl-[108]">
              <div className="text-[150px] font-bold">28%</div>

              <div className=" pl-[20] text-[24px]">
                <p className="mb-[-10]">of customers</p>

                <p className="mb-[-10]">mention</p>

                <p> your page</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#689E54] rounded-2xl border border-solid border-[#8FC07C] p-4 text-center">
                <div className="text-lg">Total Mentions</div>

                <div className="text-7xl font-bold">549</div>
              </div>

              <div className="bg-[#689E54] rounded-2xl p-4 border border-solid border-[#8FC07C] text-center">
                <div className="text-lg">Total Customers</div>

                <div className="text-7xl font-bold">210</div>
              </div>
            </div>
          </div>

          {/* Card de ranking */}

          <div className="bg-[#689E54] w-[560] text-[#FBFFF6]">
            <h2 className="text-[21.09px] text-center pb-[45] pt-[27.42] ">
              Ranking of People Who Mentioned the Most
            </h2>

            <div className="relative flex items-end justify-center ">
              {/* Podium */}

              <div className=" bottom-0 w-full flex items-end justify-center">
                {/* 4th Place */}

                <div className="w-1/6 ">
                  <div className="flex flex-col items-center mb-2">
                    <div className="w-[52.91] h-[50.62] bg-[#FBFFF6] rounded-full mb-2"></div>

                    <p className="text-[#FBFFF6] text-[10.55px] text-center">
                      @carlos
                    </p>
                  </div>

                  <div className="bg-[#FBFFF6] h-[86.48] w-[88.19] border border-solid border-gray-200 flex items-center justify-center">
                    <span className="text-[#689E54] text-[32px] font-bold">
                      4º
                    </span>
                  </div>
                </div>

                {/* 2nd Place */}

                <div className="w-1/6 ">
                  <div className="flex flex-col items-center mb-2">
                    <div className="w-[52.91] h-[50.62] bg-[#FBFFF6] rounded-full mb-2"></div>

                    <p className="text-[#FBFFF6] text-[10.55px] text-center">
                      @amanda
                    </p>
                  </div>

                  <div className="bg-[#FBFFF6] h-[146.59] w-[88.19] border border-solid border-gray-200 flex items-center justify-center">
                    <span className="text-[#689E54] text-[32px] mt-[-44] font-bold">
                      2º
                    </span>
                  </div>
                </div>

                {/* 1st Place */}

                <div className="w-1/6 ">
                  <div className="flex flex-col items-center mb-2">
                    <div className="w-[52.91] h-[50.62] bg-[#FBFFF6] rounded-full mb-2"></div>

                    <p className="text-[#FBFFF6] text-[10.55px] text-center">
                      @renata
                    </p>
                  </div>

                  <div className="bg-[#FBFFF6] h-[202.48] w-[88.19] border border-solid border-gray-200 flex items-center justify-center">
                    <span className="text-[#689E54] text-[32px] mt-[-50] font-bold">
                      1º
                    </span>
                  </div>
                </div>

                {/* 3rd Place */}

                <div className="w-1/6 ">
                  <div className="flex flex-col items-center mb-2">
                    <div className="w-[52.91] h-[50.62] bg-[#FBFFF6] rounded-full mb-2"></div>

                    <p className="text-[#FBFFF6] text-[10.55px] text-center">
                      @victor
                    </p>
                  </div>

                  <div className="bg-[#FBFFF6] h-[136.04] w-[88.19] border border-solid border-gray-200 flex items-center justify-center">
                    <span className="text-[#689E54] text-[32px] font-bold">
                      3º
                    </span>
                  </div>
                </div>

                {/* 5th Place */}

                <div className="w-1/6 ">
                  <div className="flex flex-col items-center mb-2">
                    <div className="w-[52.91] h-[50.62] bg-[#FBFFF6] rounded-full mb-2"></div>

                    <p className="text-[#FBFFF6] text-[10.55px] text-center">
                      @alex
                    </p>
                  </div>

                  <div className="bg-[#FBFFF6] h-[72.77] w-[88.19] border border-solid border-gray-200 flex items-center justify-center">
                    <span className="text-[#689E54] text-[32px] font-bold">
                      5º
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Podium base */}

            <div className=" mx-[30] h-[14.76] bg-[#FBFFF6] border border-solid border-gray-200 mb-[42] "></div>
          </div>
        </div>

        <div className=" flex gap-4">
          {/* Card gráficos de linha */}

          <div className="bg-[#689E54] w-[590] p-6 text-[#FBFFF6]">
            <div className="space-y-8">
              {nomesGraficos.map((nome, index) => (
                <div key={index}>
                  <h2 className="text-xl mb-2">{nome}</h2>

                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={linhaData}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#ccc"
                          opacity={0.3}
                        />

                        <XAxis dataKey="name" stroke="#ffffff" />

                        <YAxis
                          stroke="#ffffff"
                          ticks={[0, 50, 100, 250, 500]}
                        />

                        <Tooltip
                          content={
                            <CustomTooltip
                              active={undefined}
                              payload={undefined}
                              label={undefined}
                            />
                          }
                        />

                        <Line
                          type="monotone"
                          dataKey="linha1"
                          stroke="#ffffff"
                          strokeWidth={2}
                          dot={false}
                          activeDot={{ r: 6 }}
                        />

                        <Line
                          type="monotone"
                          dataKey="linha2"
                          stroke="#A5D6A7"
                          strokeWidth={2}
                          dot={false}
                          activeDot={{ r: 6 }}
                        />

                        <Line
                          type="monotone"
                          dataKey="linha3"
                          stroke="#C5E1A5"
                          strokeWidth={2}
                          dot={false}
                          activeDot={{ r: 6 }}
                        />

                        <Line
                          type="monotone"
                          dataKey="linha4"
                          stroke="#E6EE9C"
                          strokeWidth={2}
                          dot={false}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 ">
            {/* Card gráfico de barras por dias e horas */}

            <div className="bg-[#689E54] p-6 text-[#FBFFF6]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h2 className="text-xl mb-2">Engajamento por dias</h2>

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

                        <Bar dataKey="valor" fill="#FBFFF6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl mb-2">Engajamento por hora</h2>

                  <div className="h-48 text-[#000]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barrasHorasData}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />

                        <XAxis
                          dataKey="name"
                          stroke="#ffffff"
                          tick={{ fontSize: 10 }}
                        />

                        <YAxis
                          stroke="#ffffff"
                          ticks={[0, 50, 100, 250, 500]}
                        />

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

                        <Bar
                          name="Engajamento"
                          dataKey="valor"
                          fill="#FBFFF6"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>

            {/* Card gráficos de pizza */}

            <div className="flex-1 columns-2">
              {/* Gráfico de Engajamento por Categoria */}

              <div className="pt-[42] pl-[23] bg-[#689E54] text-[#FBFFF6]">
                <div className="">
                  <div className="flex pb-[45] gap-[44.07]">
                    <h2 className="text-[25px] text-[#FBFFF6]">
                      Engajamento <br /> por <br /> Categoria
                    </h2>

                    <div className="grid ">
                      <div className="flex items-center pl-[-23] mx-1">
                        <div className="w-3 h-3 bg-[#63783F] mr-1"></div>
                        Comentários
                      </div>

                      <div className="flex items-center mx-1">
                        <div className="w-3 h-3 bg-[#99CE85] mr-1"></div>
                        Fotos
                      </div>

                      <div className="flex items-center mx-1">
                        <div className="w-3 h-3 bg-[#fff] mr-1"></div>
                        Reels
                      </div>

                      <div className="flex items-center mx-1">
                        <div className="w-3 h-3 bg-[#30503A] mr-1"></div>
                        Stories
                      </div>
                    </div>
                  </div>

                  {/* Gráfico de Pizza */}

                  <div className="h-[305.98px] w-[305.98px] mx-auto">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Tooltip content={<PieCustomTooltip />} />

                        <Pie
                          data={pieData}
                          outerRadius={80}
                          dataKey="value"
                          nameKey="name"
                          label={({ value }) => `${value}%`}
                        >
                          {pieData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Gráfico de Recompensa por Campanha */}

              <div className="pt-[42] pl-[23] bg-[#689E54] text-[#FBFFF6]">
                <div>
                  <div className="flex pb-[45] gap-[44.07]">
                    <h2 className="text-[25px] text-[#FBFFF6]">
                      Recompensa <br /> por <br /> Campanha
                    </h2>

                    <div className="grid justify-center">
                      <div className="flex items-center pl-[-23] mx-1">
                        <div className="w-3 h-3 bg-[#63783F] mr-1"></div>
                        Comentários
                      </div>

                      <div className="flex items-center mx-1">
                        <div className="w-3 h-3 bg-[#99CE85] mr-1"></div>
                        Fotos
                      </div>

                      <div className="flex items-center mx-1">
                        <div className="w-3 h-3 bg-[#fff] mr-1"></div>
                        Reels
                      </div>

                      <div className="flex items-center mx-1">
                        <div className="w-3 h-3 bg-[#30503A] mr-1"></div>
                        Stories
                      </div>
                    </div>
                  </div>

                  {/* Gráfico de Pizza */}

                  <div className="h-[305.98px] w-[305.98px] mx-auto">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Tooltip content={<PieCustomTooltip />} />

                        <Pie
                          data={pieData}
                          outerRadius={80}
                          dataKey="value"
                          nameKey="name"
                          label={({ value }) => `${value}%`}
                        >
                          {pieData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
