import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "View", value: 68 },
  { name: "Percentage", value: 23 },
  { name: "Sales", value: 9 },
];

const COLORS = ["#22c55e", "#4ade80", "#facc15"];

export default function DonutChart() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow text-center">
      
      <h3 className="font-semibold mb-4">Total View Performance</h3>

    
      <div className="relative w-full h-[250px] flex items-center justify-center">
        
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={90}
              dataKey="value"
              cx="50%"
              cy="50%"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

      
        <div className="absolute text-center">
          <p className="text-gray-500 text-sm">Total Count</p>
          <h2 className="text-2xl font-bold">565K</h2>
        </div>

      </div>

    </div>
  );
}
