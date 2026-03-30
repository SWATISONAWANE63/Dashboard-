import {
  LayoutDashboard,
  Folder,
  MessageSquare,
  CreditCard,
  Settings,
  Shield,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-green-900 text-white p-5 flex flex-col">

      {/* Logo */}
      <h2 className="text-xl font-bold mb-10">Siohioma</h2>

      {/* Menu */}
      <div className="space-y-6">

        {/* Main */}
        <div>
          <p className="text-sm text-green-300 mb-2">MAIN</p>
          <div className="space-y-3">

            <div className="flex items-center gap-3 p-2 rounded-lg bg-green-700 cursor-pointer">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-800 cursor-pointer">
              <Folder size={18} />
              <span>Project</span>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-800 cursor-pointer">
              <MessageSquare size={18} />
              <span>Messages</span>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-800 cursor-pointer">
              <CreditCard size={18} />
              <span>Transactions</span>
            </div>

          </div>
        </div>

        {/* Settings */}
        <div>
          <p className="text-sm text-green-300 mb-2">SETTINGS</p>
          <div className="space-y-3">

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-800 cursor-pointer">
              <Settings size={18} />
              <span>General</span>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-800 cursor-pointer">
              <Shield size={18} />
              <span>Security</span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}