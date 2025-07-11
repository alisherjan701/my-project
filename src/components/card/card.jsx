import React, { useState } from 'react';
import { Heart } from 'lucide-react';


const products = [
  {
    id: 1,
    name: {
      en: "Traditional Uzbek Dress",
      ru: "Традиционное узбекское платье",
      uz: "An'anaviy o'zbek ko'ylagi"
    },
    description: {
      en: "Elegant silk dress with traditional embroidery",
      ru: "Элегантное шелковое платье с традиционной вышивкой",
      uz: "An'anaviy kashta bilan bezatilgan nafis ipak ko'ylak"
    },
    price: "$299",
    image: "https://images.pexels.com/photos/5588018/pexels-photo-5588018.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: {
      en: "Embroidered Chapan",
      ru: "Вышитый чапан",
      uz: "Kashtalangan chapan"
    },
    description: {
      en: "Luxurious ceremonial robe with gold threading",
      ru: "Роскошное церемониальное платье с золотой нитью",
      uz: "Oltin ip bilan bezatilgan dabdabali marosim kiyimi"
    },
    price: "$459",
    image: "https://images.pexels.com/photos/8815909/pexels-photo-8815909.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: {
      en: "Suzani Vest",
      ru: "Сузани жилет",
      uz: "Suzani nimcha"
    },
    description: {
      en: "Handcrafted vest with traditional suzani patterns",
      ru: "Рукодельный жилет с традиционными узорами сузани",
      uz: "An'anaviy suzani naqshlari bilan qo'lda tikilgan nimcha"
    },
    price: "$189",
    image: "https://images.pexels.com/photos/6765371/pexels-photo-6765371.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    name: {
      en: "Silk Headscarf",
      ru: "Шелковый платок",
      uz: "Ipak ro'mol"
    },
    description: {
      en: "Premium silk scarf with traditional motifs",
      ru: "Премиальный шелковый платок с традиционными мотивами",
      uz: "An'anaviy naqshlar bilan bezatilgan premium ipak ro'mol"
    },
    price: "$79",
    image: "https://images.pexels.com/photos/5849573/pexels-photo-5849573.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

// Tarjimalar
const content = {
  en: { button: 'Collection' },
  ru: { button: 'Коллекция' },
  uz: { button: 'Kolleksiya' }
};

// Asosiy komponent
const Card = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (productId) => {
    setLikedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="p-8 bg-gradient-to-br from-orange-50 to-amber-100 min-h-screen">
      <div className="flex justify-end mb-6 space-x-2">
        {['en', 'ru', 'uz'].map((lang) => (
          <button
            key={lang}
            onClick={() => setCurrentLang(lang)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              currentLang === lang ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name[currentLang]}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <button
                onClick={() => toggleLike(product.id)}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                <Heart
                  className={`w-5 h-5 ${
                    likedProducts.includes(product.id)
                      ? 'fill-red-500 text-red-500'
                      : 'text-gray-600'
                  }`}
                />
              </button>
            </div>

            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name[currentLang]}
              </h4>
              <p className="text-gray-600 text-sm mb-4">{product.description[currentLang]}</p>

              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">{product.price}</span>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                  {content[currentLang].button}
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
