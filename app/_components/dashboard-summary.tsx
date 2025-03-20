import Chart from "./chart";

const DashboardSummary = () => {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row  rounded-3xl h-auto">
      <div className="flex-1 grid sm:grid-cols-1 md:grid-cols-2 gap-6 p-4">
        <div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="rounded-3xl flex-1 flex items-center justify-center">
              <img
                src="/metrics.jpg"
                alt="metrics"
                className="w-full h-64 md:h-80 object-cover rounded-3xl"
              />
            </div>

            <div className="rounded-3xl flex-1 flex items-center justify-center">
              <img
                src="/pizza.jpg"
                alt="Photo of a pizza"
                className="w-full h-64 md:h-80 object-cover rounded-3xl"
              />
            </div>
          </div>

          <div className="items-center bg-stone-50 rounded-3xl m-2 h-auto">
            <Chart />
          </div>
        </div>

        <div className="bg-stone-50 rounded-3xl p-6 flex flex-col justify-between h-full shadow-md">
          <div>
            <h2 className="text-5xl font-bold text-gray-900">85%</h2>
            <p className="text-gray-500 mt-2 text-lg">
              of customers share their visits on Instagram
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-100 p-4 rounded-2xl text-center">
              <p className="text-sm text-gray-600">Total Rewards</p>
              <h3 className="text-2xl font-semibold text-gray-900">
                $12,450 USD
              </h3>
            </div>
            <div className="bg-gray-100 p-4 rounded-2xl text-center">
              <p className="text-sm text-gray-600">Posts Created</p>
              <h3 className="text-2xl font-semibold text-gray-900">
                15.8K Stories & Posts
              </h3>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-6">
            <div className="flex flex-col items-center">
              <span className="text-3xl">📸</span>
              <p className="text-sm text-gray-500">Publications</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl">🎟️</span>
              <p className="text-sm text-gray-500">Accumulated Tickets</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl">🎁</span>
              <p className="text-sm text-gray-500">Rewards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary;
