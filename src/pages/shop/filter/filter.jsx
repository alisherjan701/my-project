import React, { useState } from "react";
import axios from "axios";

const Filter = () => {
  const [activeTab, setActiveTab] = useState("Sale");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const tabs = ["Sale", "Hot", "New Arrivals", "Accessories"];

  const tabContent = {
    Sale: {
      description: "Tanlangan mahsulotlarga katta chegirmalar. Cheklangan vaqt davomida!",
     images: [
        "https://i.pinimg.com/1200x/73/11/e9/7311e90987f18bf769555abf2d45b860.jpg",
        "https://i.pinimg.com/736x/df/db/f1/dfdbf1c3e9a93392cd541375bd7a0dba.jpg",
        "https://i.pinimg.com/736x/7c/57/1e/7c571e72c334c7aed862dbc98898754f.jpg",
        "https://i.pinimg.com/736x/60/70/fa/6070fa9e73b5800b0241c45e1cb0c2d6.jpg",
        "https://i.pinimg.com/736x/f4/12/f9/f412f9d01b2e002bf1acd596fc97a8f1.jpg",
        "https://i.pinimg.com/1200x/3b/a8/09/3ba80975b08ecad4bf0a70789db7224a.jpg",
        "https://i.pinimg.com/736x/d0/3d/9b/d03d9bdb60c32ebb2a6ec9de4a208f8b.jpg",
        "https://i.pinimg.com/736x/38/8f/f4/388ff4d260ed9bb1d71feae229264e86.jpg",
      ],
    },
    Hot: {
      description: "Trenddagi uslublar! Modani o‘tkazib yubormang.",
       images: [
        "https://i.pinimg.com/736x/fe/45/56/fe45565606163f05ecf4bf19b820ce2b.jpg",
        "https://i.pinimg.com/736x/df/db/f1/dfdbf1c3e9a93392cd541375bd7a0dba.jpg",
        "https://i.pinimg.com/736x/60/70/fa/6070fa9e73b5800b0241c45e1cb0c2d6.jpg",
        "https://i.pinimg.com/736x/38/8f/f4/388ff4d260ed9bb1d71feae229264e86.jpg",
        "https://i.pinimg.com/736x/f4/12/f9/f412f9d01b2e002bf1acd596fc97a8f1.jpg",
        "https://i.pinimg.com/736x/7c/57/1e/7c571e72c334c7aed862dbc98898754f.jpg",
        "https://i.pinimg.com/1200x/ad/17/d4/ad17d432ac44a5a7042843a98bfdc335.jpg",
        "https://i.pinimg.com/1200x/3b/a8/09/3ba80975b08ecad4bf0a70789db7224a.jpg",
      ],
    },
    "New Arrivals": {
      description: "Yangi uslublar endigina keldi. Hozir o‘rganing.",
      images: [
        "https://i.pinimg.com/1200x/ad/17/d4/ad17d432ac44a5a7042843a98bfdc335.jpg",
        "https://i.pinimg.com/736x/7c/57/1e/7c571e72c334c7aed862dbc98898754f.jpg",
        "https://i.pinimg.com/736x/fe/45/56/fe45565606163f05ecf4bf19b820ce2b.jpg",
        "https://i.pinimg.com/736x/df/db/f1/dfdbf1c3e9a93392cd541375bd7a0dba.jpg",
        "https://i.pinimg.com/1200x/3b/a8/09/3ba80975b08ecad4bf0a70789db7224a.jpg",
        "https://i.pinimg.com/736x/38/8f/f4/388ff4d260ed9bb1d71feae229264e86.jpg",
        "https://i.pinimg.com/736x/d0/3d/9b/d03d9bdb60c32ebb2a6ec9de4a208f8b.jpg",
        "https://i.pinimg.com/736x/f4/12/f9/f412f9d01b2e002bf1acd596fc97a8f1.jpg",
      ],
    },
    Accessories: {
      description: "Ko‘rinishingizni zamonaviy aksessuarlar bilan to‘ldiring.",
     images: [
        "https://i.pinimg.com/736x/f4/12/f9/f412f9d01b2e002bf1acd596fc97a8f1.jpg",
        "https://i.pinimg.com/736x/38/8f/f4/388ff4d260ed9bb1d71feae229264e86.jpg",
        "https://i.pinimg.com/736x/d0/3d/9b/d03d9bdb60c32ebb2a6ec9de4a208f8b.jpg",
        "https://i.pinimg.com/1200x/88/16/40/88164032e495b5dbb4d7a1090d6f7573.jpg",
        "https://i.pinimg.com/1200x/ea/77/96/ea77964dd7ba5afe50d4e7d284f7072f.jpg",
        "https://i.pinimg.com/1200x/ea/fc/f4/eafcf4cf6d205d3d3ed9737980cd8005.jpg",
        "https://i.pinimg.com/1200x/73/11/e9/7311e90987f18bf769555abf2d45b860.jpg",
        "https://i.pinimg.com/736x/60/70/fa/6070fa9e73b5800b0241c45e1cb0c2d6.jpg",
      ],
    },
  };

  const handleSubmit = async () => {
    if (!userName.trim()) {
      setMessage("Iltimos, ismingizni kiriting.");
      return;
    }

    try {
      await axios.post("http://localhost:3001/orders", {
        name: userName,
        category: activeTab,
      });

      setMessage("Buyurtma muvaffaqiyatli yuborildi ✅");
      setUserName("");
    } catch (error) {
      setMessage("Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-[#F3F6F5]">
      {/* Tabs */}
      <div className="flex gap-4 justify-center text-lg mb-6 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-xl transition-all ${
              activeTab === tab
                ? "bg-white text-emerald-600 font-bold shadow-md"
                : "text-gray-600 hover:text-[#224F34]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tavsif */}
      <div className="text-center text-gray-700 text-base mb-8 max-w-xl mx-auto">
        {tabContent[activeTab].description}
      </div>

      {/* Rasm kartalari */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {tabContent[activeTab].images.slice(0, 8).map((url, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
          >
            <img
              src={url}
              alt={`dress-${i}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold text-[#224F34]">
                Chiroyli ko‘ylak {i + 1}
              </h2>
              <p className="text-sm text-gray-600">
                Nafis mato, zamonaviy dizayn va ayollik uyg‘unligi.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
