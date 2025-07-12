import { motion } from "framer-motion";
import heroImg from "../../assets/Hero.png";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center bg-[#C2EFD4] w-full h-auto lg:h-[700px] px-4 py-10 overflow-hidden">

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center ml-[60px] lg:text-left"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[#224F34] text-3xl md:text-5xl lg:text-[60px] font-black max-w-[730px]"
        >
          O'z moodangizni kashf eting va toping!
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="w-[600px] mt-[40px] text-[#224F34]"
        >
          Lorem ipsum dolor,  amet consectetur adipisicing elit. Molestiae,
          commodi vero? Corporis illo nobis sint dicta ab! Nulla autem
          inventore est sequi distinctio earum, corrupti mollitia quod
          voluptatem neque aut dolores eaque id, nobis alias.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex justify-baseline items-center"
        >
          <button className="ml-[30px] mt-[60px]  bg-green-800 text-amber-50 h-[40px] border-green-800 font-bold hover:bg-[#C2EFD4] w-[120px]  hover:border-green-900 rounded-[20px] hover:text-green-800">
            Bog`lanish
          </button>
          <button className="ml-[40px] text-green-900 mt-[60px] border-2 font-medium hover:bg-green-800 hover:text-white hover:font-bold  border-green-800 h-[40px] rounded-[20px] w-[150px]">
            Bizning katalog
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="mt-10 lg:mt-[100px] bg_img mr-[60px] lg:ml-[60px] h-[500px] w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[480px] overflow-hidden border-2 border-green-800 rounded-xl"
      >
        <img src={heroImg} alt="" className="w-full bg_img overflow-hidden h-auto" />
          
          
      </motion.div>
    </div>
  );
}

export default Hero;
