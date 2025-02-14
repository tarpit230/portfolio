import React from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code, Database, Wrench } from "lucide-react";
import type { Skill } from "../types";
import { FaNodeJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTypescript, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { TbBrandMongodb } from "react-icons/tb";

const SkillsSection: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: "ReactJS", icon: FaReact, color: "text-[#61DAFB]"},
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]"},
    { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-sky-400"},
  ];

  const backendSkills: Skill[] = [
    { name: "NodeJS", icon: FaNodeJs, color: "text-[#339933]"},
    { name: "Express", icon: SiExpress, color: "text-gray-800"},
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]"},
  ];

  const tools: Skill[] = [
    { name: "Git & Github", icon: FaGithub, color: "text-[#181717]"},
    { name: "VS Code", icon: VscVscode, color: "text-[#007ACC]"},
    { name: "MongoDB Atlas", icon: TbBrandMongodb, color: "text-[#47A248]"},
  ];

  const SkillBox: React.FC<{ skill: Skill }> = ({ skill }) => {
    const Icon = skill.icon;
    return (
      <motion.li
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-center gap-4 p-4 mb-4 rounded-2xl shadow-lg bg-blue-50"
      >
        <Icon className={`${skill.color} text-4xl`} />
        <motion.span
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className={`text-gray-700 text-xl font-semibold`}
        >
          {skill.name}
        </motion.span>
      </motion.li>
    );
  };

  return (
    <Section id="skills" title="Skills">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <Code className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
          <h3 className="text-xl font-bold mb-4 dark:text-white">Frontend</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            {frontendSkills.map((skill) => (
              <SkillBox key={skill.name} skill={skill} />
            ))}
          </ul>
        </div>
        <div className="text-center">
          <Database className="w-12 h-12 mx-auto mb-4 text-green-600 dark:text-green-400" />
          <h3 className="text-xl font-bold mb-4 dark:text-white">Backend</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            {backendSkills.map((skill) => (
              <SkillBox key={skill.name} skill={skill} />
            ))}
          </ul>
        </div>
        <div className="text-center">
          <Wrench className="w-12 h-12 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
          <h3 className="text-xl font-bold mb-4 dark:text-white">Tools</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            {tools.map((skill) => (
              <SkillBox key={skill.name} skill={skill} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
