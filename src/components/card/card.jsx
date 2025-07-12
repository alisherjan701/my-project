import React, { useState } from "react";
import { Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "An'anaviy o'zbek ko'ylagi",
    description: "An'anaviy kashta bilan bezatilgan nafis ipak ko'ylak",
    price: "$299",
    image: "https://i.pinimg.com/236x/2d/e6/5d/2de65d4bce51e7b43a2abe6169571a45.jpg",
  },
  {
    id: 2,
    name: "Kashtalangan chapan",
    description: "Oltin ip bilan bezatilgan dabdabali marosim kiyimi",
    price: "$459",
    image: "https://i.pinimg.com/236x/11/83/72/118372ba2f6922ee77b0de1da3d0c262.jpg",
  },
  {
    id: 3,
    name: "Suzani nimcha",
    description: "An'anaviy suzani naqshlari bilan qo'lda tikilgan nimcha",
    price: "$189",
    image: "https://i.pinimg.com/236x/6c/26/91/6c26911b72c139ad58c95ffe8778d5cf.jpg",
  },
  {
    id: 4,
    name: "Ipak ro'mol",
    description: "An'anaviy naqshlar bilan bezatilgan premium ipak ro'mol",
    price: "$79",
    image: "https://i.pinimg.com/736x/ed/78/04/ed78047983d58a91bcb5a0f8156eaabd.jpg",
  },
];

const Card = () => {
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (productId) => {
    setLikedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-[#C2EFD4] px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <button
                onClick={() => toggleLike(product.id)}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition"
              >
                <Heart
                  className={`w-5 h-5 ${
                    likedProducts.includes(product.id)
                      ? "fill-red-500 text-red-500"
                      : "text-gray-700"
                  }`}
                />
              </button>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#224F34] mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-700">
                  {product.price}
                </span>
                <button className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                  Kolleksiya
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
