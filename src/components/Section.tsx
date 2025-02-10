import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4 md:px-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
        {title}
      </h2>
      {children}
    </motion.section>
  );
};