import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Rectangle,
} from "recharts";

const data = [
  {
    name: "Week 1",
    infected: 4000,
    healthy: 2400,
    amt: 2400,
  },
  {
    name: "Week 2",
    infected: 3000,
    healthy: 1398,
    amt: 2210,
  },
  {
    name: "Week 3",
    infected: 2000,
    healthy: 9800,
    amt: 2290,
  },
  {
    name: "Week 4",
    infected: 2780,
    healthy: 3908,
    amt: 2000,
  },
  {
    name: "Week 5",
    infected: 1890,
    healthy: 4800,
    amt: 2181,
  },
  {
    name: "Week 6",
    infected: 2390,
    healthy: 3800,
    amt: 2500,
  },
  {
    name: "Week 7",
    infected: 3490,
    healthy: 4300,
    amt: 2100,
  },
];

const data2 = [
  { name: "Area covered", value: 700 },
  { name: "Area left", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F"];

const Financial = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="font-bold text-light-text-clr text-3xl mb-4">
        STATISTICS
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
       

        <div className="flex flex-col items-center justify-center  gap-4 bg-sidebar-bg rounded-md py-4 px-2 w-[300px] lg:w-ful">
          <h1 className="font-bold text-light-text-clr text-xl mb-4">Area Covered</h1>
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
                {data.map((entry, index) => (
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


        <div className="flex flex-col items-center justify-center gap-4 bg-sidebar-bg rounded-md py-4 px-2 w-[300px] lg:w-full">
        <h1 className="font-bold text-light-text-clr text-xl mb-4">Disease Statistics</h1>
          <ResponsiveContainer width={330} height={300}>
            <BarChart
              width={'100%'}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="healthy"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="infected"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
          <button className=" bg-main-bg hover:bg-hover-bg transition-colors duration-75 ease-in px-4 py-2 rounded-md w-full">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Financial;
