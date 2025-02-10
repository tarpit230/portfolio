import React from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  handleScroll: (ref: any) => void;
  sectionRefs: object;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, handleScroll, sectionRefs }) => {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-gray-100
       dark:bg-gray-800 shadow-md z-50"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-2xl font-bold text-teal-500 dark:text-teal-300"
      >
        Arpit
      </motion.div>

      {/* Navigation Links */}
      <motion.ul
        className="flex space-x-6 text-gray-700 dark:text-gray-200"
        variants={navVariants}
      >
        {["Home", "About", "Skills", "Projects", "Contact"].map(
          (tab, index) => {
            const param = tab.toLowerCase()
            return (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#4CAF50" }}
              initial={{ color: "inherit" }} // Initial (resting) styles
              animate={{ color: "inherit" }}
              className="font-heading cursor-pointer hover:text-teal-500 dark:hover:text-teal-300"
              onClick={() => handleScroll(sectionRefs[param as keyof typeof sectionRefs])}
            >
              {tab}
            </motion.li>
            )
          }
        )}
      </motion.ul>

      {/* Theme Toggle */}
      <motion.div>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
