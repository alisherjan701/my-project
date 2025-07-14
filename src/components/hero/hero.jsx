import { motion } from "framer-motion";
import heroImg from "../../assets/Hero.png";
import videoFrame from "../../assets/videoframe.png";

function Hero() {
  return (
    <div className="relative flex flex-col lg:flex-row justify-center items-center w-full h-auto lg:h-[700px] px-4 py-10 overflow-hidden">
      
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoFrame}
        alt="bg_img"
      />

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center lg:text-left max-w-xl px-4"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-green-600 text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-black leading-tight"
        >
          O'z moodangizni kashf eting va toping!
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-6 text-green-600 font-bold text-base sm:text-lg"
        >
         Moda tushunchasi keng ma'noda tushuniladi, u nafaqat kiyim-kechak, balki turmush tarzi, go'zallik, dizayn va hatto madaniyatga ham ta'sir qiladi. 


        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10"
        >
          <button className="bg-green-800 text-white h-[40px] px-6 font-bold hover:bg-[#C2EFD4] hover:text-green-800 border border-green-800 rounded-[20px] transition-all">
            Bog'lanish
          </button>
          <button className="text-green-700 border-2 border-green-800 h-[40px] px-6 font-medium hover:bg-green-800 hover:text-white hover:font-bold rounded-[20px] transition-all">
            Bizning katalog
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-20 mt-10 bg_img lg:mt-0 h-[490px] lg:ml-10 border border-green-800 rounded-xl overflow-hidden max-w-[90%] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[500px]"
      >
        <img
          src={heroImg}
          alt="Hero"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
