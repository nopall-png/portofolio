import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import WorkExperience from "@/components/sections/WorkExperience";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Footer from "@/components/layout/Footer";
import TechStack from "@/components/sections/TechStack";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 w-full relative">
      <Hero />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <TechStack />
      <Services />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
