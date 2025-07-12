import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh]">

      <img
        src="https://i.pinimg.com/1200x/d8/fd/40/d8fd4091da881f1b48be47af741da125.jpg"
        alt="Hero Image"
        className="w-full h-full object-cover  shadow-lg"
      />

 
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Yozgi Kollektsiyamizni Kashing!
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Eng yangi va zamonaviy o‘zbekcha atlas ko‘ylaklar bu yerda!
          Chegirmalarni qo‘ldan boy bermang.
        </p>
      </div>
    </div>
  );
};

export default Hero;