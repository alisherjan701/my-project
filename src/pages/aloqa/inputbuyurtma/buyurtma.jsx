import React, { useState } from "react";

const Buyurtma = () => {
  const [activeTab, setActiveTab] = useState("buyurtma");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ma'lumotlar yuborildi!");
  };

  return (
    <div className="w-[530px] h-[320px] mx-auto p-6 bg-white shadow-xl rounded-xl">
      <div className="flex justify-center gap-6 mb-6 text-lg font-semibold">
        <button
          onClick={() => setActiveTab("buyurtma")}
          className={`${
            activeTab === "buyurtma"
              ? "text-green-600 underline"
              : "text-gray-500"
          }`}
        >
          Buyurtma
        </button>
        <button
          onClick={() => setActiveTab("yetkazib")}
          className={`${
            activeTab === "yetkazib"
              ? "text-green-600 underline"
              : "text-gray-500"
          }`}
        >
          Yetkazib berish
        </button>
        <button
          onClick={() => setActiveTab("qaytarish")}
          className={`${
            activeTab === "qaytarish"
              ? "text-green-600 underline"
              : "text-gray-500"
          }`}
        >
          Qaytarish
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {activeTab === "buyurtma" && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Ismingiz"
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </>
        )}

        {activeTab === "yetkazib" && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Ismingiz"
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Manzilingiz"
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefon raqamingiz"
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </>
        )}

        {activeTab === "qaytarish" && (
          <>
            <textarea
              name="reason"
              placeholder="Qaytarish sababi"
              onChange={handleChange}
              className="w-full border p-2 rounded"
              rows={4}
              required
            ></textarea>
          </>
        )}

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded w-full"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default Buyurtma;