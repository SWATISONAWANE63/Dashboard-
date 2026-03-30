import { TrendingUp } from "lucide-react";

export default function StatsCard({ title, value, change }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">

      <div className="flex justify-between items-center">
        <h3 className="text-gray-500">{title}</h3>
        <TrendingUp className="text-green-500" />
      </div>

      <h2 className="text-2xl font-bold mt-2">{value}</h2>

      <p className={`mt-1 ${change.includes("-") ? "text-red-500" : "text-green-500"}`}>
        {change}
      </p>

    </div>
  );
}