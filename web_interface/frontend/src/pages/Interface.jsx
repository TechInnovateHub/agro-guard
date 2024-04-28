import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Interface = () => {
  const robotData = {
    charge: 75, // Battery charge percentage
    position: { x: 123.45, y: 67.89 }, // Current position coordinates
    acresCovered: 10.5, // Total acres covered
  };

  const data2 = [
    { name: "Area covered", value: 700 },
    { name: "Area left", value: 300 },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <div className="bg-main-bg  rounded-lg shadow-md main-container flex flex-col gap-6 items-start justify-center">
      <div>
        <h2 className="text-3xl font-bold text-light-text-clr mb-4">
          Welcome to the Interface.
        </h2>
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Live video section */}
          <div className="video-section mb-6">
            {/* TODO: Add your live video component here */}
            <img
              src="/int-1.jpg"
              alt="placeholder"
              className="w-[600px] h-[350px] object-cover"
            />
          </div>
          {/* Robot data section */}
          <div className="robot-data-section">
            <h3 className="text-lg font-semibold text-light-text-clr mb-2">
              Robot Data
            </h3>
            <div className="flex flex-wrap gap-4">
              {/* Battery charge */}
              <div className="flex items-center bg-sidebar-bg px-5 py-4 rounded-md">
                <span className="mr-2">Charge:</span>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                <span className="ml-2">{robotData.charge}%</span>
              </div>
              {/* Current position */}
              <div className="flex items-center bg-sidebar-bg px-5 py-4 rounded-md">
                <span className="mr-2">Position:</span>
                <span>
                  ({robotData.position.x}, {robotData.position.y})
                </span>
              </div>
              {/* Acres covered */}
              <div className="flex items-center bg-sidebar-bg px-5 py-4 rounded-md">
                <span className="mr-2">Acres Covered:</span>
                <span>{robotData.acresCovered} acres</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  gap-4 bg-sidebar-bg rounded-md py-4 px-2 w-[250px] md:w-[300px] lg:w-[400px] lg:w-ful mb-5">
        <h1 className="font-bold text-light-text-clr text-xl mb-4">
          Area Covered
        </h1>
        <ResponsiveContainer width={350} height={300}>
          <PieChart width={400} height={300}>
            <Pie
              data={data2}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data2.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}{" "}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <button className=" bg-main-bg hover:bg-hover-bg transition-colors duration-75 ease-in px-4 py-2 rounded-md w-full">
          View More
        </button>
      </div>
    </div>
  );
};

export default Interface;
