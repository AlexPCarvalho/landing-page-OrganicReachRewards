import Chart from "./chart";

const DashboardSummary = () => {
  return (
    <div className="bg-gray-100 flex p-4 rounded-3xl h-115  ">
      <div className="flex-1  grid grid-cols-2 grid-rows-1 gap-6  p-4">
        <div>
          <div className="flex justify-between h-48">
            <div className="rounded-3xl w-2xl m-2 flex items-center justify-center">
              <img
                src="/metrics.jpg"
                alt="metrics"
                className="w-full h-full object-cover object-top rounded-3xl"
              />
            </div>
            <div className="bg-gray-500 p-12 rounded-3xl m-2 w-2xl"></div>
          </div>
          <div className=" items-center rounded-3xl m-2 h-48">
            <Chart />
          </div>
        </div>

        <div className="bg-gray-500 mt-2 h-96 rounded-3xl"></div>
      </div>
    </div>
  );
};

export default DashboardSummary;
