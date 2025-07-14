import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Looking() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:3001/orders");
      setOrders(res.data);
    } catch (err) {
      console.error("Xatolik:", err);
      setError("Ma'lumotlarni olishda xatolik yuz berdi.");
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Haqiqatan ham o‘chirmoqchimisiz?");
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:3001/orders/${id}`);
      setOrders((prev) => prev.filter((order) => order.id !== id));
    } catch (err) {
      console.error("O‘chirishda xatolik:", err);
      alert("O‘chirishda xatolik yuz berdi.");
    }
  };

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
    <div className="min-h-screen p-8 ">
      <button
      onClick={() => navigate("/admin")}
      className="group flex items-center gap-2 bg-green-200 font-bold px-4 py-2 rounded-full shadow-md hover:shadow-lg mb-6 text-[#224F34] transition"
    >
      <ArrowLeft
        size={18}
        className="transform transition-transform duration-300 group-hover:-translate-x-1"
      />
      Ortga
    </button>

      <h2 className="text-3xl font-bold text-center text-[#224F34] mb-10">
        Barcha Buyurtmalar
      </h2>

      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {orders.map((order) => (
          <div
            key={order.id}
            className="relative bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <button
              onClick={() => handleDelete(order.id)}
              className="absolute top-3 right-3 text-red-500 hover:text-red-700"
              title="Buyurtmani o‘chirish"
            >
              <Trash2 size={20} />
            </button>

            <img
              src={order.image}
              alt={order.product}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-[#224F34]">
              {order.product}
            </h3>
            <p className="text-sm text-gray-700 mt-1">Narxi: {order.price}</p>
            <p className="text-sm text-gray-700 mt-1">Miqdori: {order.quantity}</p>
            <p className="text-sm text-gray-700 mt-1">
              Mijoz: {order.firstName} {order.lastName}
            </p>
            <p className="text-sm text-gray-700 mt-1">Telefon: {order.phone}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Looking;
