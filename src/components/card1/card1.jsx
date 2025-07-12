import React from "react";

const items = [
  {
    img: "https://i.pinimg.com/736x/45/a4/fa/45a4fa8bf3c7726fa87ecb661787b1b5.jpg",
    price: "$48.99",
  },
  {
    img: "https://i.pinimg.com/1200x/30/bd/2f/30bd2fd26f94df860f94bfd3d32535af.jpg",
    price: "$48.99",
  },
  {
    img: "https://i.pinimg.com/736x/65/e5/e1/65e5e1f76d02833e7764e0fe059addba.jpg",
    price: "$39.00",
  },
  {
    img: "https://i.pinimg.com/1200x/d1/ff/fb/d1fffb51206a6aac5a379623c07e0288.jpg",
    price: "$42.99",
  },
  {
    img: "https://i.pinimg.com/1200x/b1/1f/0a/b11f0acbda6f189529cc6b537aca67fe.jpg",
    price: "$32.99",
  },
  {
    img: "https://i.pinimg.com/736x/f4/12/f9/f412f9d01b2e002bf1acd596fc97a8f1.jpg",
    price: "$32.99",
  }, 
   {
    img: "https://i.pinimg.com/236x/11/83/72/118372ba2f6922ee77b0de1da3d0c262.jpg",
    price: "$32.99",
  }, {
    img: "https://i.pinimg.com/236x/6c/26/91/6c26911b72c139ad58c95ffe8778d5cf.jpg",
    price: "$32.99",
  }, {
    img: "https://i.pinimg.com/1200x/24/3a/49/243a49021bf2d06cc4d2ad6d3bbd0705.jpg",
    price: "$32.99",
  }, {
    img: "https://i.pinimg.com/1200x/17/de/bd/17debd1d35e07b8970f25aa668f2932f.jpg",
    price: "$32.99",
  },
];

const Card1 = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 bg-[#C2EFD4] p-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="group relative flex flex-col rounded-2xl bg-white max-w-xs w-full shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
        >
          {/* Rasm */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={item.img}
              alt={`item-${index}`}
              className="w-[95%] rounded-2xl mx-auto mt-4 h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Matn */}
          <div className="p-6">
            <h4 className="text-xl font-semibold text-[#224F34] mb-1">
              O'zbekcha Atlas Kiyim
            </h4>
            <p className="text-gray-700 text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-lg font-bold text-blue-700">
              {item.price} | 5.0 ★
            </p>
          </div>

          {/* Foydalanuvchi rasmi */}
          <div className="flex items-center justify-between px-6 pb-4">
            <div className="flex items-center space-x-3">
              <img
                alt="user1"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
              <img
                alt="user2"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card1;
