import React, { useEffect, useState } from "react";

const images = [
  "https://i.pinimg.com/1200x/a4/c7/61/a4c761b0f662c783e913f5fde0a2a25f.jpg",
  "https://i.pinimg.com/736x/2f/0b/ad/2f0badc2eb2e5328a5a4b9b0b6292499.jpg",
  "https://i.pinimg.com/736x/61/dc/53/61dc53e7167e6b397b07ebc0e1253935.jpg",
  "https://i.pinimg.com/1200x/6d/d2/63/6dd2638e4f560a0c52a1eee4e7e1f3ac.jpg",
  "https://i.pinimg.com/1200x/b2/61/0d/b2610d64395b24309e10603e242deea7.jpg",
  "https://i.pinimg.com/1200x/59/49/32/59493292e6d4747e4dd8c1b280fa1797.jpg",
  "https://i.pinimg.com/1200x/74/5a/85/745a85689f70ef5f95ff5955dad87e37.jpg",
];

const Carusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-7xl h-[450px] mx-auto overflow-hidden rounded-xl shadow-xl">
      {/* Orqa fon - rasmni blur qilish */}
      <div className="absolute inset-0 z-0">
        <img
          src={images[currentIndex]}
          alt="Background"
          className="w-full h-full object-cover filter blur-md brightness-50"
        />
      </div>

      {/* Ustki carusel */}
      <div
        className="relative z-10 flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-full flex items-center justify-center flex-shrink-0"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carusel;
