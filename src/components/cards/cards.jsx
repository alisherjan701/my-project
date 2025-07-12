import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    img: "https://i.pinimg.com/1200x/10/3a/bc/103abcf45150b3726f4283fe21f4af3a.jpg",
    title: "Romantik A-Line Ko'ylak",
    description: "Pastel rang, beldan tor, keng yubkali, yozgi bayramlar uchun mos.",
    price: "$48.99 | 5.0 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/30/bd/2f/30bd2fd26f94df860f94bfd3d32535af.jpg",
    title: "Maxi Boho Ko'ylak",
    description: "Chiffon matoli, keng siluet, harakat uchun yengil va qulay.",
    price: "$52.49 | 5.0 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/24/3a/49/243a49021bf2d06cc4d2ad6d3bbd0705.jpg",
    title: "Fit & Flare Klassik",
    description: "Belni ko'rsatadigan dizayn, pastki qismi kengaygan, har kuni kiyish uchun.",
    price: "$44.00 | 4.9 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/17/de/bd/17debd1d35e07b8970f25aa668f2932f.jpg",
    title: "Yengsiz One-Shoulder",
    description: "Bitta yengli zamonaviy dizayn, to'y yoki maxsus tadbirlar uchun.",
    price: "$59.99 | 5.0 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/62/50/db/6250dbcfd41e336102994cf7934596c9.jpg",
    title: "Pastel Minimalist Ko'ylak",
    description: "Oddiy, ammo nafis ko'rinish, och ranglar va yengil qatlamli.",
    price: "$38.75 | 4.8 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/4b/78/c5/4b78c5fdee0e66c70f8d880495c954c9.jpg",
    title: "Shirred Puff Sleeve Dress",
    description: "Elkada shirred dizayn, baland yenglar, zamonaviy yoshlar uchun trendda.",
    price: "$46.20 | 4.7 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/3b/39/25/3b3925bc0790a0dc957f9b6f5237fddd.jpg",
    title: "Gullar bilan bezatilgan Ko'ylak",
    description: "Yorqin gullar bilan bezatilgan mato, tabiat go‘zalligi bilan uyg‘unlashgan.",
    price: "$41.80 | 4.9 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/89/a3/74/89a374fcc6c65f6646b9e731b656e53e.jpg",
    title: "Zamonaviy Midi Ko'ylak",
    description: "O‘rta uzunlikda, yengil kesim, ofis va kunlik kiyim sifatida mos.",
    price: "$43.99 | 4.7 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/92/02/e5/9202e52515ee86e861f7430cd6357a3b.jpg",
    title: "Ko‘pik yengli Ko‘ylak",
    description: "Hajmli yenglar va och ranglar bilan feministik uslub.",
    price: "$49.95 | 5.0 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/56/1d/c5/561dc593841b6db61b768c5deadabab0.jpg",
    title: "Saten Atlas Ko‘ylak",
    description: "Yaltiroq saten mato, oqshom tadbirlari uchun ideal.",
    price: "$54.60 | 4.8 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/de/dd/d5/deddd5334812d6f9fd2a4c7c4a7a76e5.jpg",
    title: "Vintage Retro Ko‘ylak",
    description: "60-yillar uslubidagi naqsh va kesimlar bilan chiroyli dizayn.",
    price: "$39.00 | 4.6 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/59/cb/5f/59cb5f88961cd8fd3083c0bf3506065e.jpg",
    title: "Vintage Uslubdagi Ko'ylak",
    description: "Klassik gulli naqshli, retrouslubni sevuvchilar uchun mos model.",
    price: "$50.99 | 4.9 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/77/a2/52/77a2521177f6333be185daa7a0d585dd.jpg",
    title: "Tilla Yoyli Zamonaviy Ko'ylak",
    description: "Bayramlar uchun yorqin va zamonaviy, belda tilla yoy bilan bezatilgan.",
    price: "$64.00 | 5.0 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/27/b8/8c/27b88c68e8fc8cb9c08bb09b5ad804e8.jpg",
    title: "Kundalik Pastel Ko'ylak",
    description: "Oddiy dizayn, pastel ranglar, har kuni kiyish uchun qulay.",
    price: "$36.75 | 4.8 ★",
  },
  {
    img: "https://i.pinimg.com/736x/71/7a/df/717adf6712f5525f8e9293215a93a7f9.jpg",
    title: "Bo‘ydoq Ko’ylak",
    description: "To‘y yoki fotiha uchun mos, oq rangda, nafis atlas matodan tikilgan.",
    price: "$89.99 | 5.0 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/ee/ee/93/eeee93991a1dc515f9c2d0492ba4da1f.jpg",
    title: "Lazer Naqshli Ko'ylak",
    description: "Yelkalari va etagida lazer kesimlar, zamonaviy ko'rinish uchun.",
    price: "$58.40 | 4.9 ★",
  },
  {
    img: "https://i.pinimg.com/736x/22/62/3f/22623fc1b60a062e867360e1a26abe2d.jpg",
    title: "Yarim Keng Ko'ylak",
    description: "Naqshli yenglar, yarim keng siluet, issiq mavsum uchun ideal.",
    price: "$42.99 | 4.7 ★",
  },
  {
    img: "https://i.pinimg.com/736x/ef/57/92/ef5792681bf84093d6ada608a35cfc3f.jpg",
    title: "Ko‘p Qatlamli Pastel Ko‘ylak",
    description: "Yengil va ko‘p qatlamli yubka, romantik uchrashuvlar uchun.",
    price: "$49.20 | 4.8 ★",
  },
  {
    img: "https://i.pinimg.com/736x/49/9d/44/499d44e08585c8cce5a313edf9d6602d.jpg",
    title: "Oddiy Qulay Ko‘ylak",
    description: "Hamma joyga moslashuvchan, engil va tekis qirqimdagi model.",
    price: "$33.00 | 4.6 ★",
  },
  {
    img: "https://i.pinimg.com/736x/87/17/62/871762c96b35179e85d80d2f00b835c4.jpg",
    title: "Dantelli Nafis Ko'ylak",
    description: "Noyob dantel bilan bezatilgan, maxsus kechalar uchun mos.",
    price: "$66.90 | 5.0 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/c9/f6/c1/c9f6c1748819c7216669379b88537d6f.jpg",
    title: "Ko‘zni Qamashtiruvchi Oq Ko‘ylak",
    description: "Katta yubka va chiroyli bezaklar bilan to'y uchun maxsus model.",
    price: "$72.10 | 5.0 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/30/b0/78/30b0786e2397d96012269051143086ae.jpg",
    title: "Chiziqli Klassik Ko‘ylak",
    description: "To‘g‘ri kesimdagi chiziqli naqsh, oddiy va ko‘p maqsadli.",
    price: "$35.00 | 4.5 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/8c/66/ae/8c66ae6a557fe8d05813722090aac828.jpg",
    title: "Bejartilgan Pastel Ko‘ylak",
    description: "Yumshoq ranglar va o‘rtacha uzunlik, oddiy tadbirlar uchun.",
    price: "$37.20 | 4.7 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/10/8b/59/108b59a304e6d347fe099d7a12fe4f6e.jpg",
    title: "Minimalist Summer Dress",
    description: "Yozgi mavsum uchun soddaligi bilan ajralib turadigan dizayn.",
    price: "$36.75 | 4.6 ★",
<<<<<<< HEAD
  },
  {
    img: "https://i.pinimg.com/1200x/10/8b/59/108b59a304e6d347fe099d7a12fe4f6e.jpg",
    title: "Pastel Minimalist Ko'ylak",
    description: "Yozgi mavsum uchun soddaligi bilan ajralib turadigan dizayn.",
    price: "$36.75 | 4.6 ★",
  },
  {
    img: "https://i.pinimg.com/736x/ff/c6/17/ffc617dc0e798d3c3f5ebe3efaab4a6b.jpg",
    title: "Romantik A-Line Ko'ylak",
    description: "Yozgi mavsum uchun soddaligi bilan ajralib turadigan dizayn.",
    price: "$36.75 | 4.6 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/1c/95/6f/1c956f9e9087bd2ad00735882bdf5350.jpg",
    title: "Vintage Uslubdagi Ko'ylak",
    description: "Yozgi mavsum uchun soddaligi bilan ajralib turadigan dizayn.",
    price: "$36.75 | 4.6 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/d8/fd/40/d8fd4091da881f1b48be47af741da125.jpg",
    title: "Yozgi mavsum uchun soddaligi bilan ajralib turadigan dizayn.",
    description: "Yozgi mavsum uchun soddaligi bilan ajralib turadigan dizayn.",
    price: "$36.75 | 4.6 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/74/8f/3c/748f3c8b4876e7d661c7d660967681f8.jpg",
    title: "Lazer Naqshli Ko'ylak",
    description: "Yozgi mavsum uchun soddaligi bilan ajralib turadigan dizayn.",
    price: "$36.75 | 4.6 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/8e/79/a4/8e79a4d6e72b6274b4000f28d18fb02d.jpg",
    title: "Chiziqli Klassik Ko‘ylak",
    description: "Yozgi mavsum uchun soddaligi bilan ajralib turadigan dizayn.",
    price: "$36.75 | 4.6 ★",
  },
  {
    img: "https://i.pinimg.com/736x/be/9f/e3/be9fe3fd1a1290e540259b1351c146bf.jpg",
    title: "Ko‘p Qatlamli Pastel Ko‘ylak",
    description: "Yozgi mavsum uchun soddaligi bilan ajralib turadigan dizayn.",
    price: "$36.75 | 4.6 ★",
  },
  {
    img: "https://i.pinimg.com/736x/ef/01/bd/ef01bd4b5d140ea785a3a6a95c5cba50.jpg",
    title: "Kundalik Pastel Ko'ylak",
    description: "Yozgi mavsum uchun soddaligi bilan ajralib turadigan dizayn.",
    price: "$36.75 | 4.6 ★",
  },
];

const randomCards = Array.from({ length: 0 }).map((_, i) => ({
  img: `https://source.unsplash.com/random/400x500?sig=${i + 100}`,
  title: "Mahsulot nomi",
  description: "Tavsifi mavjud emas.",
  price: `$${(34 + i).toFixed(2)} | ${(4 + (i % 2) * 0.5).toFixed(1)} ★`,
}));

const cards = [...customCards, ...randomCards]; // umumiy 24 ta

=======
  }
];

>>>>>>> 5f6fd7ec9a68f80260bac7aa4075f18df1a7df38
function Cards() {
  return (
    <div className="min-h-screen bg-[#C2EFD4] p-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
<<<<<<< HEAD
        {cards.map((item, i) => (
          <div
            key={i}
            className="flex flex-col rounded-2xl bg-white w-full shadow-2xl toggle"
          >
            <div className="overflow-hidden rounded-2xl bg-transparent shadow-2xl toggle">
              <img
                src={item.img}
                alt={item.title}
                className="w-[95%] rounded-2xl mx-auto mt-4 h-[300px] object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-blue-gray-900">
                {item.title}
              </h4>
              <p className="text-sm mt-1 text-gray-600">{item.description}</p>
              <p className="mt-2 text-base text-gray-800 font-semibold">
                {item.price}
              </p>
            </div>
          </div>
        ))}
=======
        {cards.map((item, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="flex flex-col rounded-2xl bg-white shadow-2xl w-full cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl bg-transparent">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[95%] rounded-2xl mx-auto mt-4 h-[300px] object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-blue-gray-900">
                  {item.title}
                </h4>
                <p className="text-sm mt-1 text-gray-600">{item.description}</p>
                <p className="mt-2 text-base text-gray-800 font-semibold">
                  {item.price}
                </p>
              </div>
            </motion.div>
          );
        })}
>>>>>>> 5f6fd7ec9a68f80260bac7aa4075f18df1a7df38
      </div>
    </div>
  );
}

export default Cards;
