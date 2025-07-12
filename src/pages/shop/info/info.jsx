import React from "react";

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
];

const DressInfoCard = () => {
  return (
    <div className=" min-h-screen py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-[#224F34] mb-8">
        Ko‘ylaklar haqida ma’lumot
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {dressInfos.map((dress, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-[#224F34] mb-2">
              {dress.title}
            </h3>
            <p className="text-gray-700 text-sm">{dress.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DressInfoCard;