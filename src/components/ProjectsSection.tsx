import React from "react";
import { Section } from "./Section";
import { motion } from "framer-motion";
import type { Project } from "../types";
import { ExternalLink } from "lucide-react";

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Astrokshetra",
      description:
        "A platform for personalized astrological guidance and spiritual insights to navigate life's journey.",
      technologies: ["Next.js", "Java", "Micronaut", "PostgreSQL"],
      image: "/assets/ashtrokshetra-project.jpg",
      link: "https://astrokshetra.com/",
    },
    {
      title: "Finayer",
      description:
        "Empowering financial institutions with cutting-edge solutions for seamless loan management and customer engagement.",
      technologies: ["Vanilla JS", "Node.js", "Tailwind CSS", "PostgreSQL"],
      image: "/assets/finayer-project.jpg",
      link: "https://www.cloudoniqfinayer.com/",
    },
  ];

  const colors = [ 
    "red-200",
    "blue-200",
    "green-200",
    "yellow-200",
    "purple-200",
  ];


  return (
    <Section id="projects" title="Projects">
      {/* <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center -mt-8 ml-16 text-xl font-semibold text-black dark:text-white mb-8"
      >
        Some Company projects that I have worked on
      </motion.p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-wheat dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm dark:text-white`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
