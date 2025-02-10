import React from "react";
import { Section } from "./Section";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="w-full flex flex-col md:flex-row gap-8 mx-auto text-center md:text-left">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <motion.img
            src="/assets/computer-specialist.png"
            alt="Computer Specialist Icon"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ maxWidth: "100%", height: "auto" }}
            className="w-40 sm:w-56 md:w-64 lg:w-72 rounded-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8 lg:px-14">
          <p className="text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed">
            A passionate full-stack software developer with a knack for crafting
            seamless user experiences and building scalable backend systems.
            With a background in Information Technology and experience working
            with React.js, Node.js, Material UI, and Bootstrap, I specialize in
            turning ideas into functional, user-friendly applications.
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed">
            Over the years, I have honed my skills in both frontend and backend
            development, allowing me to create robust and visually appealing web
            applications.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
