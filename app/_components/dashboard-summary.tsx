import Chart from "./chart";

const DashboardSummary = () => {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row p-4 rounded-3xl h-auto">
      <div className="flex-1 grid sm:grid-cols-1 md:grid-cols-2 gap-6 p-4">
        <div>
          <div className="flex flex-col md:flex-row justify-between h-auto">
            
            <div className="rounded-3xl w-full md:w-2xl m-2 flex items-center justify-center">
              <img
                src="/metrics.jpg"
                alt="metrics"
                className="w-full h-auto object-cover object-top rounded-3xl"
              />
            </div>

            
            <div className="bg-gray-500 p-6 md:p-12 rounded-3xl m-2 w-full md:w-2xl"></div>
          </div>

          
          <div className="items-center rounded-3xl m-2 h-auto">
            <Chart />
          </div>
        </div>

        
        <div className="bg-gray-500 mt-2 h-64 md:h-96 rounded-3xl"></div>
      </div>
    </div>
  );
};

export default DashboardSummary;