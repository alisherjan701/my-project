import { CiUser } from "react-icons/ci";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-orange-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-4">
        <img className="w-24 h-24 mb-4 md:mb-0" src="" alt="fanta" />
        <ul className="flex flex-wrap justify-center items-center gap-6">
          {["Home", "Categories", "Blog", "About", "Contact"].map(
            (item, index) => (
              <li
                key={index}
                className="text-white font-medium text-lg hover:underline cursor-pointer"
              >
                {item}
              </li>
            )
          )}
          <span className="text-white text-2xl cursor-pointer">
            <CiUser />
          </span>
        </ul>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between py-10 gap-10">
        <div className="flex-1 ">
          <h3 className="text-4xl sm:text-5xl text-white font-bold mb-4">
            Orange Fanta
          </h3>
          <p className="text-white text-lg mb-4 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cumque
            blanditiis modi delectus ullam aperiam.
          </p>
          <button className="bg-white text-orange-600 px-6 py-2 font-semibold rounded hover:bg-orange-100 transition">
            Order Now
          </button>
          <div className="mt-6 text-white font-medium">Top RECOMMENDATION</div>

          <div className="mt-4 flex flex-wrap justify-center gap-6">
            {[
              { src: "fanta1-C03OpEhK.png", price: "$40" },
              { src: "fanta2-CKPVcFNY.png", price: "$100" },
              { src: "fanta3-lLWTBDbL.png", price: "$100" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <img
                  className="w-28 h-auto mx-auto"
                  src={`https://fanta-house.netlify.app/assets/${item.src}`}
                  alt="fanta"
                />
                <div className="text-white text-lg font-bold mt-2">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            className="max-w-xs md:max-w-sm"
            src="https://fanta-house.netlify.app/assets/fanta1-C03OpEhK.png"
            alt="main fanta"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
