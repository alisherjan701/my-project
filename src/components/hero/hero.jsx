import React from "react";
import hero from "../../assets/hero.png";

function Hero() {
  return (
    <div className=" flex justify-center bg-[#C2EFD4]  w-full  h-[700px] ">
      <div className="mt-[230px]">
        <h1 className="text-[#224F34] text-[60px] font-black w-[730px]">
          O'z moodangizni kashf eting va toping!
        </h1>
      </div>
      <div className="w-[20%] ml-[160px] mt-[120px] border-2 border-green-800 bg_img overflow-hidden  my-12 relative h-[480px]  ">
        <img className="w-[850px] absolute  h-[650px] " src={hero} alt="png" />
      </div>
    </div>
  );
}

export default Hero;
