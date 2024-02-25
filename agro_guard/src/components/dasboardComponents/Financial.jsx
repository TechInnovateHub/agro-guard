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
            FINANCIAL STATISTICS
        </h1>
      <div>
          <LineChart
            width={900}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            {" "}
            <CartesianGrid stroke="#77767b" strokeDasharray="5 5" />
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
      </div>
    </div>
  );
};

export default Financial;
