import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from './Section'; 

export default function ContactSection() {
    return (
        <Section id="contact" title="Get in Touch">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-white mb-8">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:arpittripathi507@gmail.com"
              className="text-[#D14836] dark:text-[#D14836]"
            >
              <Mail className="w-8 h-8" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/tarpit230"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#181717] dark:text-[#FFFFFF]"
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/arpit-tripathi-ba5395201/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077B5] dark:text-[#0077B5]"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://x.com/ArpitTr97228205?t=91dSXqiLfIQIrRGZEGT0ng&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1da1f2] dark:text-[#1da1f2]"
            >
              <Twitter className="w-8 h-8" />
            </motion.a>
          </div>
        </div>
      </Section>
    );
}