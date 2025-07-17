import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            GulchehraDrawer
          </h2>
          <p className="text-sm">
            Modaning so'nggi tendentsiyalarini kashf eting va bizning
            yangiligimizdan ilhom oling uslublar.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Bo‘limlar</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition">
                Bosh Sahifa
              </a>
            </li>
            <li>
              <a href="/catalog" className="hover:text-white transition">
                Katalog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Mijozlar</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Buyurtma statusi
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Yetkazib berish
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Qaytarish
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Yordam markazi
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Kontakt</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Toshkent, O‘zbekiston</li>
            <li>✉️ support@fashionista.uz</li>
            <li>📞 +998 71 123 45 67</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white transition">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition">
              Telegram
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs">
        © {new Date().getFullYear()} Fashionista. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
