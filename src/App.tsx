import { useEffect, useRef, useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

function App() {
  const [isDark, setIsDark] = useState(false);
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const [bgImage, setBgImage] = useState("1.jpg");
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/assets/background/1.jpg"; // Change this to your actual image
    img.onload = () => setBgLoaded(true);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    setBgImage(isDark ? "1.jpg" : "ghtv_03pb_210816.jpg");
  };

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Static Background */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-fixed ${
        bgLoaded ? "opacity-100" : "opacity-0 bg-gray-200"}`}
        style={bgLoaded ? { backgroundImage: `url('/assets/background/${bgImage}')` } : {}}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar
          isDark={isDark}
          toggleTheme={toggleTheme}
          handleScroll={handleScroll}
          sectionRefs={sectionRefs}
        />

        <section
          ref={sectionRefs.home}
          className="min-h-screen flex items-center justify-center bg-white bg-opacity-30"
        >
          <HeroSection />
        </section>

        <section
          ref={sectionRefs.about}
          className="min-h-screen bg-white bg-opacity-30 p-10"
        >
          <AboutSection />
        </section>

        <section
          ref={sectionRefs.projects}
          className="min-h-screen bg-white bg-opacity-30 p-10"
        >
          <ProjectsSection />
        </section>

        <section
          ref={sectionRefs.skills}
          className="min-h-screen bg-white bg-opacity-30 p-10"
        >
          <SkillsSection />
        </section>

        <section className="min-h-screen bg-white bg-opacity-30 p-10">
          <ExperienceSection />
        </section>

        <section
          ref={sectionRefs.contact}
          className="min-h-screen bg-white bg-opacity-30 p-10"
        >
          <ContactSection />
        </section>
      </div>
    </div>
  );
}

export default App;
