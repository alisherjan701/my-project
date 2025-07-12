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
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-2xl rounded-2xl border border-gray-200">
      {/* Tabs */}
      <div className="flex justify-between mb-6 border-b border-gray-200">
        {["buyurtma", "yetkazib", "qaytarish"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 flex-1 text-center capitalize font-semibold text-sm sm:text-base transition-all ${
              activeTab === tab
                ? "border-b-2 border-green-600 text-green-700"
                : "text-gray-500 hover:text-green-600"
            }`}
          >
            {tab === "buyurtma"
              ? "Buyurtma"
              : tab === "yetkazib"
              ? "Yetkazib berish"
              : "Qaytarish"}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {activeTab === "buyurtma" && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Ismingiz"
              onChange={handleChange}
              className="input-style outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="input-style outline-none"
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
              className="input-style outline-none"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Manzilingiz"
              onChange={handleChange}
              className="input-style outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefon raqamingiz"
              onChange={handleChange}
              className="input-style outline-none"
              required
            />
          </>
        )}

        {activeTab === "qaytarish" && (
          <textarea
            name="reason"
            placeholder="Qaytarish sababi"
            onChange={handleChange}
            className="input-style outline-none resize-none h-28"
            required
          ></textarea>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-all"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default Buyurtma;
