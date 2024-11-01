import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto px-4 flex items-center justify-center`}>

      <div className={`text-center flex flex-col items-center gap-5`}>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Welcome to <span className='text-[#0d0d0d] glow'>HackPAKT</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Exploring tech, & solving problems.
        </p>

        {/* Buttons */}
        <div className='flex justify-center items-center gap-10 mt-10'>
          <a href='#about'>
            <motion.button
              whileHover={{
                scale: 1.15,
                boxShadow: "0px 0px 10px 5px rgba(255, 255, 255, 0.6)",
              }}
              whileTap={{
                scale: 0.95,
                boxShadow: "0px 0px 5px 2px rgba(255, 255, 255, 0.4)",
              }}
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: ["0px 0px 8px rgba(255, 255, 255, 0.4)", "0px 0px 12px rgba(255, 255, 255, 0.6)", "0px 0px 8px rgba(255, 255, 255, 0.4)"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className='bg-[#0d0d0d] text-white px-10 py-4 text-lg rounded-md shadow-lg border border-white glow-border'
            >
              Start
            </motion.button>
          </a>

          <a href='https://github.com/hackpakt' target='_blank' rel='noopener noreferrer'>
            <motion.button
              whileHover={{
                scale: 1.15,
                boxShadow: "0px 0px 10px 5px rgba(255, 255, 255, 0.6)",
              }}
              whileTap={{
                scale: 0.95,
                boxShadow: "0px 0px 5px 2px rgba(255, 255, 255, 0.4)",
              }}
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: ["0px 0px 8px rgba(255, 255, 255, 0.4)", "0px 0px 12px rgba(255, 255, 255, 0.6)", "0px 0px 8px rgba(255, 255, 255, 0.4)"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className='bg-[#0d0d0d] text-white px-10 py-4 text-lg rounded-md shadow-lg border border-white glow-border'
            >
              Github
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
