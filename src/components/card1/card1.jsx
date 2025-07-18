import React, { useState } from "react";
import { Heart } from "lucide-react";

const items = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/45/a4/fa/45a4fa8bf3c7726fa87ecb661787b1b5.jpg",
    title: "An'anaviy Atlas Ko'ylak",
    description:
      "Yuqori sifatli atlas matosidan tayyorlangan, kundalik kiyim uchun mos.",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/1200x/30/bd/2f/30bd2fd26f94df860f94bfd3d32535af.jpg",
    title: "Yozgi Yengil Ko'ylak",
    description: "Yozgi fasl uchun yengil, havodor va qulay ko'ylak modeli.",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/736x/65/e5/e1/65e5e1f76d02833e7764e0fe059addba.jpg",
    title: "Zamonaviy Nafis Libos",
    description: "Bayramlar va to'ylar uchun mo‘ljallangan nafis ko‘ylak.",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/1200x/d1/ff/fb/d1fffb51206a6aac5a379623c07e0288.jpg",
    title: "Charm Detalli Kiyim",
    description: "Qo‘shimcha charm bezaklar bilan bezatilgan zamonaviy model.",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/1200x/b1/1f/0a/b11f0acbda6f189529cc6b537aca67fe.jpg",
    title: "Oq Atlas Ko'ylak",
    description: "Oq rangli, toza va jozibali atlas matodan tikilgan libos.",
  },
  {
    id: 6,
    img: "https://i.pinimg.com/736x/f4/12/f9/f412f9d01b2e002bf1acd596fc97a8f1.jpg",
    title: "Pushti Rang Bahor Ko‘ylagi",
    description: "Bahor mavsumiga mos pushti rangdagi chiroyli model.",
  },
  {
    id: 7,
    img: "https://i.pinimg.com/236x/11/83/72/118372ba2f6922ee77b0de1da3d0c262.jpg",
    title: "Uzun Yengli Milliy Libos",
    description: "Uzun yengli va qulay bo‘lgan milliy uslubdagi ko‘ylak.",
  },
  {
    id: 8,
    img: "https://i.pinimg.com/236x/6c/26/91/6c26911b72c139ad58c95ffe8778d5cf.jpg",
    title: "Oddiy Kunda Kiyiladigan",
    description: "Har kuni kiyish uchun oddiy, ammo did bilan tikilgan kiyim.",
  },
  {
    id: 9,
    img: "https://i.pinimg.com/1200x/24/3a/49/243a49021bf2d06cc4d2ad6d3bbd0705.jpg",
    title: "Rangli Nafis Ko‘ylak",
    description: "Yorqin rangli, ko‘zni quvontiradigan chiroyli model.",
  },
];

const CardItem = ({ id, img, liked, onLike, title, description }) => {
  return (
    <div className="group relative flex flex-col rounded-2xl bg-white max-w-xs w-full shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 animate-fadeIn">
      <div
        onClick={() => onLike(id)}
        className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md cursor-pointer"
      >
        <Heart
          className={`w-5 h-5 transition-colors duration-300 ${
            liked ? "fill-red-500 text-red-500" : "text-gray-700"
          }`}
        />
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={img}
          alt={`item-${id}`}
          className="w-[95%] rounded-2xl mx-auto mt-4 h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h4 className="text-xl font-semibold text-[#224F34] mb-1">{title}</h4>
        <p className="text-gray-700 text-sm mb-2">{description}</p>
      </div>
    </div>
  );
};

const Card1 = () => {
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (id) => {
    setLikedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
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

      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item) => (
          <CardItem
            key={item.id}
            {...item}
            liked={likedProducts.includes(item.id)}
            onLike={toggleLike}
          />
        ))}
      </div>
    </div>
  );
};

export default Card1;
