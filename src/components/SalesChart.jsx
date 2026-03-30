import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4500 },
  { name: "May", sales: 6000 },
];

export default function SalesChart() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      
      <h3 className="font-semibold mb-4">Sales Report</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="sales" radius={[10, 10, 0, 0]} fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}