import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Monday", price: 2400, amt: 2400 },
  { name: "Tuesday", price: 1000, amt: 800 },
  { name: "Wednesday", price: 500, amt: 2000 },
  { name: "Thursday", price: 800, amt: 1500 },
  { name: "Friday", price: 1500, amt: 600 },
];


const Financial = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-light-text-clr text-3xl mb-4">
        GROWTH RATE
      </h1>
      <div className="flex flex-col lg:flex-row gap-4">
          <LineChart data={data} height={300} width={400} margin={{ right: 25, top: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#59b47f"
              activeDot={{ r: 4 }}
            />
          </LineChart>

          <button>
            View More
          </button>

      </div>
    </div>
  );
};

export default Financial;
