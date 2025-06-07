import { motion } from "framer-motion";

export default function HeroSection() {
  const words = "Hi, I am Arpit".split(" ");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden text-center md:text-left"
    >
      {/* Text & Buttons */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
        <motion.div className="flex items-center justify-center md:justify-start">
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 dark:text-white">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: [20, 0], opacity: [0, 1] }}
                transition={{
                  // duration: 2.5,
                  // repeat: Infinity,
                  // repeatType: "loop",
                  delay: index * 0.5,
                }}
                className="mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.img
            src="/assets/wave.gif"
            alt="Animated GIF"
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -20 }}
            transition={{ duration: 0.5 }}
            className="w-12 h-auto ml-2"
          />
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-white"
        >
          Software Developer
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-white mt-2 max-w-xl"
        >
          I craft seamless user experiences with frontend and robust backend solutions, bringing ideas to life through code.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#4CAF50",
            color: "#fff",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="px-6 py-3 mt-6 rounded-lg bg-teal-500 text-white font-semibold"
        >
          <a href="/assets/FullStackResume.pdf" download="My_Resume.pdf">
            Download CV
          </a>
        </motion.button>
      </div>

      {/* Profile Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/assets/portfolioImg.jpeg"
          alt="Profile"
          className="w-44 sm:w-56 md:w-72 lg:w-96 md:h-[450px] h-auto rounded-lg md:rounded-full object-cover shadow-lg"
        />
      </div>
    </motion.section>
  );
}
