import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 4000 },
  { name: "Feb", income: 3000 },
  { name: "Mar", income: 5000 },
  { name: "Apr", income: 4500 },
  { name: "May", income: 6000 },
  { name: "Jun", income: 5500 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      
    
      <h3 className="font-semibold mb-4">Revenue</h3>

      
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="income" fill="#16a34a" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}
