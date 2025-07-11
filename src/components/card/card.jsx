import React from "react";

const cards = [
  {
    img: "https://i.pinimg.com/736x/45/a4/fa/45a4fa8bf3c7726fa87ecb661787b1b5.jpg",
    price: "$48.99 | 5.0 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/30/bd/2f/30bd2fd26f94df860f94bfd3d32535af.jpg",
    price: "$48.99 | 5.0 ★",
  },
  {
    img: "https://i.pinimg.com/736x/65/e5/e1/65e5e1f76d02833e7764e0fe059addba.jpg",
    price: "$39.00 | 5.0 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/d1/ff/fb/d1fffb51206a6aac5a379623c07e0288.jpg",
    price: "$42.99 | 4.8 ★",
  },
  {
    img: "https://i.pinimg.com/1200x/b1/1f/0a/b11f0acbda6f189529cc6b537aca67fe.jpg",
    price: "$32.99 | 4.7 ★",
  },
];

function Card() {
  return (
    <div className="flex flex-wrap justify-center gap-6 bg-[#C2EFD4] p-6">
      {cards.map((item, i) => (
        <div
          key={i}
          className="relative flex flex-col rounded-2xl bg-white shadow-2xl max-w-xs w-full"
        >
          <div className="relative overflow-hidden rounded-2xl bg-transparent">
            <img
              src={item.img}
              alt="product"
              className="w-[95%] rounded-2xl mx-auto mt-4 h-[400px] object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="text-2xl font-semibold text-blue-gray-900">
              Lorem ipsum dolor
            </h4>
            <p className="mt-3 text-xl text-gray-700">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
