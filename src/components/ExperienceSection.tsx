import { motion } from "framer-motion";
import { Section } from "./Section";
import type { Experience } from "../types";

export default function ExperienceSection() {

    const experiences: Experience[] = [
        {
          company: "Cloudoniq Technologies Pvt. Ltd.",
          position: "Software Engineer",
          duration: "2024 - Present",
          description: [
            "Led development of various frontend and backend features",
            "Got good exposure to the latest technologies",
            "Worked on various projects",
            "Collaborated with the team to deliver high-quality software",
            "Participated in code reviews and pair programming",
          ],
        },
      ];

    return (
        <Section id="experience" title="Experience">
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {exp.position}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {exp.company} | {exp.duration}
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>
    );
}