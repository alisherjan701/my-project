import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Вкус, который объединяет!</h2>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">
              Google Play
            </a>
            <a href="#" className="hover:underline">
              App Store
            </a>
            <a href="#" className="hover:underline">
              Telegram
            </a>
          </div>
        </div>

        <div className="hidden md:block" />

        <div>
          <h3 className="font-semibold mb-3">Информация</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                О нас
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Меню
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Акции
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Следите за нами</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Доставка и оплата
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Контакты
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Присоединяйтесь к нашей команде
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
