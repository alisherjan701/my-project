import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function AdminLayout() {
  const location = useLocation();

  return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-700 to-purple-200 p-8">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out;
          }
        `}
      </style>

    <div className="min-h-screen flex">
      <aside className="w-64  shadow-md p-6 bg-green-300 rounded-[20px] flex flex-col space-y-6">
        <h2 className="text-2xl font-bold text-green-900">Admin Panel</h2>
        
        <nav className="flex flex-col space-y-3">
          <Link
            to="/admin/orders"
            className="text-lg font-bold hover:text-white text-green-900 "
          >
            📦 Buyurtmalar
          </Link>

          <Link
            to="/admin/dedline"
            className="text-lg font-bold hover:text-white text-green-900 "
          >
            ⏰ Chegirmalar
          </Link>

          <Link
            to="/"
            className="text-md text-red-500 hover:underline mt-auto"
          >
            ← Bosh sahifaga qaytish
          </Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gradient-to-br  p-8">
        <Outlet />
      </main>
    </div>
    </div>
  );
}

export default AdminLayout;
