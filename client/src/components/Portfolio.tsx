import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";

export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.pageYOffset;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        {/*<ProjectsSection />*/}
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 font-poppins">
              <span className="text-primary">RevanthKumar</span> Reddy
            </h3>
            <p className="text-muted-foreground mb-6">Data Engineer & Data Analytics Expert</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                              href="https://www.linkedin.com/in/gosularevanth/" 
                className="text-muted-foreground hover:text-primary text-2xl transition-colors duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              {/*<a */}
              {/*  href="https://github.com/panditigopalakrishna" */}
              {/*  className="text-muted-foreground hover:text-primary text-2xl transition-colors duration-300 transform hover:scale-110"*/}
              {/*  target="_blank"*/}
              {/*  rel="noopener noreferrer"*/}
              {/*>*/}
              {/*  <i className="fab fa-github"></i>*/}
              {/*</a>*/}
              <a 
                              href="mailto:revanthgosula5@gmail.com" 
                className="text-muted-foreground hover:text-primary text-2xl transition-colors duration-300 transform hover:scale-110"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            
            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground">&copy; 2024 Revanthkumar Reddy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}