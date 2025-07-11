import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
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

        <div>
          <h3 className="font-semibold mb-3">Меню</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Сеты
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Пицца
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Пиде и Лаваш
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Снеки
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Соусы
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Салаты
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Напитки
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Сладкая пицца
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Информация</h3>
          <ul className="space-y-1">
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
                Акци
              </a>
            </li>
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

        <div className="w-[200px] h-[200px]">
          <h3 className="font-semibold mb-3">Следите за нами</h3>
          <div>
            <img src="https://choparpizza.uz/googleReady.svg" alt="" />
          </div>
          <div>
            <img src="https://choparpizza.uz/appleReady.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-10">
        © 2025 Все права защищены
      </div>
    </footer>
  );
};

export default Footer;
