import { IconType } from "react-icons";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  // category: 'frontend' | 'backend' | 'tools';
}