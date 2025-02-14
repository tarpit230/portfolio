import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  handleScroll: (ref: any) => void;
  sectionRefs: Record<string, any>;
}

const Navbar: React.FC<NavbarProps> = ({
  isDark,
  toggleTheme,
  handleScroll,
  sectionRefs,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-800 shadow-md z-50"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-2xl font-bold text-teal-500 dark:text-teal-300"
      >
        Arpit
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 text-gray-700 dark:text-white">
        {["Home", "About", "Skills", "Projects", "Contact"].map(
          (tab, index) => {
            const param = tab.toLowerCase();
            return (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: "#4CAF50" }}
                className="font-heading list-none cursor-pointer"
                onClick={() => handleScroll(sectionRefs[param])}
              >
                {tab}
              </motion.li>
            );
          }
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 dark:text-gray-200"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 right-0 w-[150px] bg-gray-100 dark:bg-gray-800 shadow-lg flex flex-col items-center space-y-4 py-4 md:hidden"
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (tab, index) => {
                const param = tab.toLowerCase();
                return (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.1, color: "#4CAF50" }}
                    className="font-heading list-none cursor-pointer hover:text-teal-500 dark:hover:text-teal-300"
                    onClick={() => {
                      handleScroll(sectionRefs[param]);
                      setIsOpen(false);
                    }}
                  >
                    {tab}
                  </motion.li>
                );
              }
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Toggle */}
      <motion.div className="hidden md:block">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
