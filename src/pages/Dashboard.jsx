import Topbar from "../components/Topbar";
import StatsCard from "../components/StatsCard";
import RevenueChart from "../components/RevenueChart";
import TransactionList from "../components/TransactionList";
import DonutChart from "../components/DonutChart";
import UpdateCard from "../components/UpdateCard";
import SalesChart from "../components/SalesChart";

export default function Dashboard() {
  return (
    <div className="flex-1 bg-gray-100 p-8 space-y-6">

      {/* Top Navigation */}
      <Topbar />

      {/* Update Card */}
      <div className="mt-6">
        <UpdateCard />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <StatsCard title="Net Income" value="$193,000" change="+35%" />
        <StatsCard title="Total Return" value="$32,000" change="-24%" />
        <StatsCard title="Total Sales" value="$120,000" change="+20%" />
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-3 gap-6 mt-6">

        {/* LEFT SIDE */}
        <div className="col-span-2 space-y-6">
          <TransactionList />
          <RevenueChart />
          <SalesChart />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <DonutChart />
        </div>

      </div>

    </div>
  );
}