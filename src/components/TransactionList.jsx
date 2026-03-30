import { FaTshirt, FaMobileAlt, FaShoppingBag } from "react-icons/fa";

const transactions = [
  {
    name: "Premium T-Shirt",
    date: "Jul 12th 2024",
    status: "Completed",
    icon: <FaTshirt />,
  },
  {
    name: "Playstation 5",
    date: "Jul 12th 2024",
    status: "Pending",
    icon: <FaShoppingBag />,
  },
  {
    name: "iPhone 15 Pro Max",
    date: "Jul 12th 2024",
    status: "Completed",
    icon: <FaMobileAlt />,
  },
];

export default function TransactionList() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h3 className="font-semibold mb-4">Transaction</h3>

      {transactions.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-3 border-b last:border-none"
        >
       
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-3 rounded-lg text-green-600">
              {item.icon}
            </div>
            <div>
              <p className="font-medium">{item.name}</p>
              <span className="text-sm text-gray-400">{item.date}</span>
            </div>
          </div>

         
          <span
            className={`text-sm font-medium ${
              item.status === "Completed"
                ? "text-green-500"
                : "text-yellow-500"
            }`}
          >
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
}
