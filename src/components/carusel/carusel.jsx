import React, { useEffect, useState } from "react";

const images = [
  "https://i.pinimg.com/1200x/a4/c7/61/a4c761b0f662c783e913f5fde0a2a25f.jpg",
  "https://i.pinimg.com/1200x/95/95/18/959518dc9e99c3c0356287064a96f75e.jpg",
  "https://i.pinimg.com/736x/61/dc/53/61dc53e7167e6b397b07ebc0e1253935.jpg",
  "https://i.pinimg.com/1200x/2d/e6/5d/2de65d4bce51e7b43a2abe6169571a45.jpg",
  "https://i.pinimg.com/1200x/b2/61/0d/b2610d64395b24309e10603e242deea7.jpg",
  "https://i.pinimg.com/1200x/74/5a/85/745a85689f70ef5f95ff5955dad87e37.jpg",
  "https://i.pinimg.com/736x/ed/78/04/ed78047983d58a91bcb5a0f8156eaabd.jpg",
  "https://i.pinimg.com/736x/b4/3d/a6/b43da6dacb72f1c5a9dbe766dec2be5c.jpg",
];

const Carusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      {/* KATTAROQ ORQA FON */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 scale-110">
        <img
          src={images[currentIndex]}
          alt="Background"
          className="w-full h-full object-cover filter blur-md brightness-50"
        />
      </div>

      {/* Slayder */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex items-center justify-center"
            style={{ width: `${100 / images.length}%` }}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="max-h-full w-auto max-w-full object-contain rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carusel;
