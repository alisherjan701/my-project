import React, { useEffect, useState } from "react";

export default function Dedline() {
  const [visible, setVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});
  const [hiddenCards, setHiddenCards] = useState({});
  const [discounts, setDiscounts] = useState([
    {
      id: 1,
      title: "Yozgi chegirma",
      desc: "Barcha yozgi ko‘ylaklarga 25% chegirma!",
      image:
        "https://i.pinimg.com/1200x/aa/da/5c/aada5c71f2f086b7c837482caf8c12c1.jpg",
      discount: "-25%",
      deadline: Date.now() + 1000 * 60 * 60,
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    image: "",
    price: "",
    discount: "",
    deadlineMinutes: "",
  });

  const handleAddDiscount = () => {
    const id = Date.now();
    const desc = `${form.discount}% chegirma bilan atigi ${form.price} so‘m!`;
    const deadline = Date.now() + form.deadlineMinutes * 60 * 1000;
    const newItem = {
      id,
      title: form.title,
      image: form.image,
      price: form.price,
      desc,
      discount: `-${form.discount}%`,
      deadline,
    };
    setDiscounts((prev) => [...prev, newItem]);
    setForm({
      title: "",
      image: "",
      price: "",
      discount: "",
      deadlineMinutes: "",
    });
  };

  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => {
      const now = Date.now();
      const updatedTime = {};
      const expiredIds = [];

      discounts.forEach((item) => {
        const diff = item.deadline - now;
        if (diff <= 0) {
          updatedTime[item.id] = "❌ Tugadi";
          expiredIds.push(item.id);
        } else {
          updatedTime[item.id] = formatTime(diff);
        }
      });

      if (expiredIds.length > 0) {
        setHiddenCards((prev) => {
          const updated = { ...prev };
          expiredIds.forEach((id) => {
            updated[id] = true;
          });
          return updated;
        });
      }

      setTimeLeft(updatedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [discounts]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 to-pink-200 p-4 md:p-6">
      <h2 className="text-4xl font-extrabold text-white text-center mb-10 drop-shadow">
        🛍 Chegirmalar & Buyurtmalar
      </h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-start flex-wrap max-w-7xl mx-auto ml-40 ">
        {/* FORM */}
        <div className="w-full md:w-[350px] bg-white shadow-lg rounded-xl p-5 mt-4">
          <h3 className="text-xl font-bold text-emerald-700 mb-3">
            ➕ Chegirma qo‘shish
          </h3>


          <input
            placeholder="Ko‘ylak nomi"
            className="w-full mb-2 p-2 border rounded text-sm"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            placeholder="Rasm URL"
            className="w-full mb-2 p-2 border rounded text-sm"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
          <input
            type="number"
            placeholder="Narxi (so‘m)"
            className="w-full mb-2 p-2 border rounded text-sm"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Chegirma (%)"
            className="w-full mb-2 p-2 border rounded text-sm"
            value={form.discount}
            onChange={(e) => setForm({ ...form, discount: e.target.value })}
          />
          <input
            type="number"
            placeholder="Dedlayn (daqiqa)"
            className="w-full mb-2 p-2 border rounded text-sm"
            value={form.deadlineMinutes}
            onChange={(e) =>
              setForm({ ...form, deadlineMinutes: e.target.value })
            }
          />
          <button
            className="w-full bg-emerald-700 text-white py-2 rounded hover:bg-emerald-900 transition text-sm disabled:opacity-50"
            onClick={handleAddDiscount}
            disabled={discounts.length >= 10}
          >
            {discounts.length >= 10
              ? "⚠️ 10 tadan oshirib bo‘lmaydi"
              : "Qo‘shish"}
          </button>
        </div>

        {/* DISCOUNT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 flex-1">
          {discounts
            .filter((d) => !hiddenCards[d.id])
            .map((item, i) => {
              const isExpired = timeLeft[item.id] === "❌ Tugadi";
              return (
                <div
                  key={item.id}
                  className={`relative bg-white rounded-3xl overflow-hidden shadow-xl transform transition-all duration-700 ease-out hover:scale-105 ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <button
                    onClick={() =>
                      setHiddenCards((prev) => ({ ...prev, [item.id]: true }))
                    }
                    className="absolute top-3 left-3 z-10 bg-red-100 hover:bg-red-500 hover:text-white text-red-700 rounded-full w-8 h-8 flex items-center justify-center font-bold shadow"
                    title="Yopish"
                  >
                    ×
                  </button>


                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-emerald-700 text-white text-sm px-3 py-1 rounded-full">
                    {item.discount}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-3 mb-76 py-1 shadow rounded-2xl">
                    ⏰ {timeLeft[item.id] || "Hisoblanmoqda..."}
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-emerald-700">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                    <button
                      disabled={isExpired}
                      className="mt-3 w-full bg-gradient-to-r text-white py-2 rounded-lg disabled:opacity-50"
                    >
                      {isExpired ? "Muddati tugagan" : ""}
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
