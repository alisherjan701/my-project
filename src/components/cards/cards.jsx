import { motion } from "framer-motion";

const cards = [
  {
    img: "https://i.pinimg.com/1200x/10/3a/bc/103abcf45150b3726f4283fe21f4af3a.jpg",
    title: "Romantik dddddA-Line Ko'ylak",
    description:
      "Pastel rang, beldan tor, keng yubkali, yozgi bayramlar uchun mos.",
  },
  {
    img: "https://i.pinimg.com/1200x/56/1d/c5/561dc593841b6db61b768c5deadabab0.jpg",
    title: "Andom Ko‘ylak",
    description:
      "Milliy naqshlar bilan bezatilgan, nafis atlas matoli bayramona ko‘ylak.",
  },
  {
    img: "https://i.pinimg.com/1200x/30/bd/2f/30bd2fd26f94df860f94bfd3d32535af.jpg",
    title: "Maxi Boho Ko'ylak",
    description: "Chiffon matoli, keng siluet, harakat uchun yengil va qulay.",
  },
  {
    img: "https://i.pinimg.com/1200x/24/3a/49/243a49021bf2d06cc4d2ad6d3bbd0705.jpg",
    title: "Fit & Flare Klassik",
    description:
      "Belni ko'rsatadigan dizayn, pastki qismi kengaygan, har kuni kiyish uchun.",
  },
  {
    img: "https://i.pinimg.com/1200x/17/de/bd/17debd1d35e07b8970f25aa668f2932f.jpg",
    title: "Yengsiz One-Shoulder",
    description:
      "Bitta yengli zamonaviy dizayn, to'y yoki maxsus tadbirlar uchun.",
  },
  {
    img: "https://i.pinimg.com/1200x/62/50/db/6250dbcfd41e336102994cf7934596c9.jpg",
    title: "Pastel Minimalist Ko'ylak",
    description: "Oddiy, ammo nafis ko'rinish, och ranglar va yengil qatlamli.",
  },
  {
    img: "https://i.pinimg.com/1200x/4b/78/c5/4b78c5fdee0e66c70f8d880495c954c9.jpg",
    title: "Shirred Puff Sleeve Dress",
    description:
      "Elkada shirred dizayn, baland yenglar, zamonaviy yoshlar uchun trendda.",
  },
  {
    img: "https://i.pinimg.com/1200x/3b/39/25/3b3925bc0790a0dc957f9b6f5237fddd.jpg",
    title: "Gullar bilan bezatilgan Ko'ylak",
    description:
      "Yorqin gullar bilan bezatilgan mato, tabiat go‘zalligi bilan uyg‘unlashgan.",
  },
  {
    img: "https://i.pinimg.com/1200x/89/a3/74/89a374fcc6c65f6646b9e731b656e53e.jpg",
    title: "Zamonaviy Midi Ko'ylak",
    description:
      "O‘rta uzunlikda, yengil kesim, ofis va kunlik kiyim sifatida mos.",
  },
  {
    img: "https://i.pinimg.com/1200x/92/02/e5/9202e52515ee86e861f7430cd6357a3b.jpg",
    title: "Ko‘pik yengli Ko‘ylak",
    description: "Hajmli yenglar va och ranglar bilan feministik uslub.",
  },
  {
    img: "https://i.pinimg.com/1200x/56/1d/c5/561dc593841b6db61b768c5deadabab0.jpg",
    title: "Saten Atlas Ko‘ylak",
    description: "Yaltiroq saten mato, oqshom tadbirlari uchun ideal.",
  },
  {
    img: "https://i.pinimg.com/1200x/de/dd/d5/deddd5334812d6f9fd2a4c7c4a7a76e5.jpg",
    title: "Vintage Retro Ko‘ylak",
    description:
      "60-yillar uslubidagi naqsh va kesimlar bilan chiroyli dizayn.",
  },
  {
    img: "https://i.pinimg.com/1200x/59/cb/5f/59cb5f88961cd8fd3083c0bf3506065e.jpg",
    title: "Vintage Uslubdagi Ko'ylak",
    description:
      "Klassik gulli naqshli, retrouslubni sevuvchilar uchun mos model.",
  },
  {
    img: "https://i.pinimg.com/1200x/77/a2/52/77a2521177f6333be185daa7a0d585dd.jpg",
    title: "Tilla Yoyli Zamonaviy Ko'ylak",
    description:
      "Bayramlar uchun yorqin va zamonaviy, belda tilla yoy bilan bezatilgan.",
  },
  {
    img: "https://i.pinimg.com/1200x/27/b8/8c/27b88c68e8fc8cb9c08bb09b5ad804e8.jpg",
    title: "Kundalik Pastel Ko'ylak",
    description: "Oddiy dizayn, pastel ranglar, har kuni kiyish uchun qulay.",
  },
  {
    img: "https://i.pinimg.com/736x/71/7a/df/717adf6712f5525f8e9293215a93a7f9.jpg",
    title: "Bo‘ydoq Ko’ylak",
    description:
      "To‘y yoki fotiha uchun mos, oq rangda, nafis atlas matodan tikilgan.",
  },
  {
    img: "https://i.pinimg.com/1200x/ee/ee/93/eeee93991a1dc515f9c2d0492ba4da1f.jpg",
    title: "Lazer Naqshli Ko'ylak",
    description:
      "Yelkalari va etagida lazer kesimlar, zamonaviy ko'rinish uchun.",
  },
  {
    img: "https://i.pinimg.com/736x/22/62/3f/22623fc1b60a062e867360e1a26abe2d.jpg",
    title: "Yarim Keng Ko'ylak",
    description:
      "Naqshli yenglar, yarim keng siluet, issiq mavsum uchun ideal.",
  },
  {
    img: "https://i.pinimg.com/736x/ef/57/92/ef5792681bf84093d6ada608a35cfc3f.jpg",
    title: "Ko‘p Qatlamli Pastel Ko‘ylak",
    description: "Yengil va ko‘p qatlamli yubka, romantik uchrashuvlar uchun.",
  },
  {
    img: "https://i.pinimg.com/736x/49/9d/44/499d44e08585c8cce5a313edf9d6602d.jpg",
    title: "Oddiy Qulay Ko‘ylak",
    description: "Hamma joyga moslashuvchan, engil va tekis qirqimdagi model.",
  },
  {
    img: "https://i.pinimg.com/736x/87/17/62/871762c96b35179e85d80d2f00b835c4.jpg",
    title: "Dantelli Nafis Ko'ylak",
    description: "Noyob dantel bilan bezatilgan, maxsus kechalar uchun mos.",
  },
  {
    img: "https://i.pinimg.com/1200x/c9/f6/c1/c9f6c1748819c7216669379b88537d6f.jpg",
    title: "Ko‘zni Qamashtiruvchi Oq Ko‘ylak",
    description:
      "Katta yubka va chiroyli bezaklar bilan to'y uchun maxsus model.",
  },
  {
    img: "https://i.pinimg.com/1200x/30/b0/78/30b0786e2397d96012269051143086ae.jpg",
    title: "Chiziqli Klassik Ko‘ylak",
    description: "To‘g‘ri kesimdagi chiziqli naqsh, oddiy va ko‘p maqsadli.",
  },
  {
    img: "https://i.pinimg.com/1200x/8c/66/ae/8c66ae6a557fe8d05813722090aac828.jpg",
    title: "Bejartilgan Pastel Ko‘ylak",
    description: "Yumshoq ranglar va o‘rtacha uzunlik, oddiy tadbirlar uchun.",
  },
  {
    img: "https://i.pinimg.com/1200x/10/8b/59/108b59a304e6d347fe099d7a12fe4f6e.jpg",
    title: "Minimalist Summer Dress",
    description: "Yozgi mavsum uchun soddaligi bilan ajralib turadigan dizayn.",
  },
  {
    img: "https://i.pinimg.com/736x/ff/c6/17/ffc617dc0e798d3c3f5ebe3efaab4a6b.jpg",
    title: "Elegant Ko‘ylak",
    description: "Oddiy dizayn, nafis siluet, bayram tadbirlari uchun.",
  },
  {
    img: "https://i.pinimg.com/1200x/1c/95/6f/1c956f9e9087bd2ad00735882bdf5350.jpg",
    title: "Tilla Atlas Ko‘ylak",
    description: "Atlas matodan tikilgan, tilla naqshli tantanali kiyim.",
  },
  {
    img: "https://i.pinimg.com/1200x/d8/fd/40/d8fd4091da881f1b48be47af741da125.jpg",
    title: "Klassik Bezakli Ko‘ylak",
    description: "Turli bezaklar bilan boyitilgan nafis ko‘ylak.",
  },
  {
    img: "https://i.pinimg.com/1200x/74/8f/3c/748f3c8b4876e7d661c7d660967681f8.jpg",
    title: "Lazer Naqshli Midi Ko‘ylak",
    description: "To‘g‘ri kesim, lazer naqshli zamonaviy ko‘ylak.",
  },
  {
    img: "https://i.pinimg.com/1200x/8e/79/a4/8e79a4d6e72b6274b4000f28d18fb02d.jpg",
    title: "Yumshoq Gulli Ko‘ylak",
    description: "Gulli pastel naqshli, har kuni kiyish uchun qulay.",
  },
  {
    img: "https://i.pinimg.com/736x/be/9f/e3/be9fe3fd1a1290e540259b1351c146bf.jpg",
    title: "Yumshoq Ko‘p Qatlamli Ko‘ylak",
    description: "Hajmli yubka bilan chiroyli kesim, yoz uchun mos.",
  },
  {
    img: "https://i.pinimg.com/736x/ef/01/bd/ef01bd4b5d140ea785a3a6a95c5cba50.jpg",
    title: "Qishda kiyish uchun pastel ko‘ylak",
    description: "Qalin matodan tikilgan, zamonaviy kesimli dizayn.",
  },
];

export default function Cards() {
  return (
    <div className="min-h-screen bg-[#C2EFD4] p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            whileHover={{
              scale: 1.05,
              y: -8,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="flex flex-col rounded-2xl bg-white shadow-2xl w-full"
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
