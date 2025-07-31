import { Button } from "@/components/ui/button";
import profilpic from "@/assets/profile-pic2.png"
import resume from "@/assets/SAP Basis_Resume_Subha (1).pdf"
export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    //window.open('/src/assets/SCM_Resume_Subha.pdf', '_blank');
    const link=document.createElement('a');
    link.href=resume;
      link.download ='SAP Basis_Resume_Subha.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center circuit-bg relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          {/* Profile photo placeholder */}
          <img 
            src={profilpic} 
            alt="Sri Maddela- Professional Profile" 
            className="w-32 h-32 rounded-full mx-auto border-4 border-primary/30 shadow-2xl animate-pulse-slow tech-glow object-cover"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in font-inter">
          <span className="text-primary">Sri</span> Maddela
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up font-light" style={{ animationDelay: '0.2s' }}>
                  <b> SAP Basis Consultant | ECC 6.0 & S/4 HANA Specialist </b>
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
                  SAP Basis Consultant with 1+ year of hands-on experience managing SAP ECC 6.0 and S/4 HANA systems in development, QA, and production landscapes at Accenture.
                  Proficient in system monitoring, client administration, transport management (SE01, STMS), and root cause analysis of application-level issues using ST22, SM37, SM50, SM12, and SP01. Experienced in HANA database monitoring (DB02), backup validation (DB14), and ensuring audit-ready infrastructure.
                  Skilled in OS-level command usage and RDBMS support to maintain performance and compliance across ITIL-governed environments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 rounded-lg font-poppins font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </Button>
          <Button 
            variant="outline"
            onClick={downloadResume}
            className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-poppins font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <i className="fas fa-download mr-2"></i>Download Resume
          </Button>
        </div>

              <div className="flex justify-center space-x-6 mt-12 animate-slide-up" style={{ animationDelay: '0.8s', marginBottom: "3rem"}}>
          <a 
                      href="https://www.linkedin.com/in/sri-maddela-4e7/" 
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
                      href="mailto:subhasri15214@gmail.com" 
            className="text-muted-foreground hover:text-primary text-2xl transition-colors duration-300 transform hover:scale-110"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

          <div className="absolute bottom-2 left-1/1.9 transform -translate-x-1/2 animate-bounce" style={{ cursor: "pointer", zIndex:"50" }} >
        <button 
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-primary text-2xl"
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </section>
  );
}