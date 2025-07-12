import React from "react";

const Card1 = () => {
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
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 bg-[#C2EFD4] p-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="group relative flex flex-col rounded-2xl bg-white max-w-xs w-full shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
        >
          {/* Rasm qismi */}
          <div className="relative overflow-hidden rounded-2xl bg-transparent">
            <img
              src={item.img}
              alt={`item-${index}`}
              className="w-[95%] rounded-2xl mx-auto mt-4 h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Matn qismi */}
          <div className="p-6">
            <h4 className="text-xl font-semibold text-[#224F34] mb-2">
              O'zbekcha Atlas Kiyim
            </h4>
            <p className="text-gray-700 text-sm">
              {item.price} | 5.0 ★
            </p>
          </div>

          {/* Foydalanuvchilar qismi */}
          <div className="flex items-center justify-between p-6 pt-0">
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
