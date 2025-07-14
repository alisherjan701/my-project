import React, { useState } from "react";
import axios from "axios";

const dressInfos = [
   {
    title: "Atlas Ko‘ylak",
    description:
      "Atlas matodan tikilgan an’anaviy o‘zbek ko‘ylagi. Yorqin ranglar va gullar bilan bezatilgan. Bayram va tantanali marosimlar uchun ideal tanlov.",
  },
  {
    title: "Boho Uslubdagi Yozgi Ko‘ylak",
    description:
      "Yengil, shifon matoli, keng kesimli ko‘ylak. Issiq ob-havo uchun mo‘ljallangan, kunlik kiyim sifatida juda qulay.",
  },
  {
    title: "Saten Kechki Libos",
    description:
      "Yaltiroq saten matodan tikilgan. Romantik uchrashuvlar yoki oqshom marosimlar uchun nafis tanlov.",
  },
  {
    title: "Minimalist Pastel Ko‘ylak",
    description:
      "Oddiy, ammo zamonaviy dizayn. Pastel ranglar bilan uyg‘unlashgan va kundalik hayot uchun mos.",
  },
  {
    title: "Vintage Ko‘ylak",
    description:
      "Retro uslubdagi gulli naqshlar bilan boyitilgan. Klassik modani sevuvchilar uchun ayni muddao.",
  },
   {
    title: "Yozgi Ko‘ylak",
    description:
      "Yengil, shifon matoli, keng kesimli ko‘ylak. Issiq ob-havo uchun mo‘ljallangan, kunlik kiyim sifatida juda qulay.",
  },
];

const DressInfoCard = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    quantity: "",
    product: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const { firstName, lastName, phone, quantity, product } = formData;

    if (!firstName || !lastName || !phone || !quantity || !product) {
      setMessage("❗ Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }

    const order = {
      id: Math.random().toString(36).substring(2, 6),
      firstName,
      lastName,
      phone,
      quantity,
      product,
      image:
        "https://i.pinimg.com/1200x/56/1d/c5/561dc593841b6db61b768c5deadabab0.jpg",
      price: "$68.50 | 5.0 ★",
    };

    try {
      await axios.post("http://localhost:3001/orders", order);
      setMessage("✅ Buyurtma muvaffaqiyatli yuborildi!");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        quantity: "",
        product: "",
      });
      setShowForm(false);
    } catch (error) {
      setMessage("❌ Xatolik yuz berdi. Qayta urinib ko‘ring.");
    }
  };

  return (
    <div className="py-10 px-4 bg-[#F9F9F9] min-h-screen">
      <h2 className="text-3xl font-bold text-center text-[#224F34] mb-10">
        Ko‘ylaklar haqida ma’lumot
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        {dressInfos.map((dress, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-[#224F34] mb-2">
              {dress.title}
            </h3>
            <p className="text-gray-700 text-sm">{dress.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#224F34] text-white px-6 py-3 rounded-xl hover:bg-[#1a3c2a] transition"
          >
            Buyurtma berish
          </button>
        ) : (
          <div className="bg-white max-w-xl mx-auto mt-6 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-[#224F34] mb-4">
              Buyurtma ma’lumotlari
            </h3>
            <input
              type="text"
              placeholder="Ismingiz"
              className="w-full p-4 shadow-md outline-none rounded-lg mb-3"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Familiyangiz"
              className="w-full p-3 shadow-md outline-none  rounded-lg mb-3"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            <input
              type="tel"
              placeholder="Telefon raqam"
              className="w-full p-3 shadow-md outline-none rounded-lg mb-3"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Miqdori"
              className="w-full p-3 shadow-md outline-none  rounded-lg mb-3"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Ko‘ylak nomi"
              className="w-full p-3 shadow-md outline-none rounded-lg mb-4"
              value={formData.product}
              onChange={(e) =>
                setFormData({ ...formData, product: e.target.value })
              }
            />
            <button
              onClick={handleSubmit}
              className="bg-[#224F34] text-white w-full py-3 rounded-lg hover:bg-[#1a3c2a] transition"
            >
              Yuborish
            </button>
            {message && (
              <p className="mt-4 text-sm text-red-600 text-center">{message}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DressInfoCard;
