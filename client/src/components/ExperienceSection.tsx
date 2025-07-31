import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
    const experiences = [
        {
            company: "Accenture",
            position: "SAP Basis Consultant",
            period: "Jun 2022 \u2014 Present",
            location: "India",
            icon: "fas fa-briefcase",
            iconColor: "text-primary",
            bgColor: "bg-primary/10",
            achievements: [
                "Managed SAP ECC 6.0 and S/4 HANA systems across development, QA, and production environments ensuring 99.9% uptime.",
                "Performed daily system monitoring, client administration, system refreshes, and transport management (STMS/SE01) within ITIL-based processes.",
                "Troubleshot runtime errors (ST22), work process monitoring (SM50), job scheduling (SM37), and resolved lock/output issues (SM12, SP01) to maintain smooth operations.",
                "Monitored HANA database health (DB02) and validated backups (DB14), contributing to audit compliance and disaster recovery readiness.",
                "Executed kernel upgrades, patch management, and performance tuning (ST02, ST03N) to optimize system efficiency.",
                "Supported SAP security activities including user administration (SU01, SUIM), role management (PFCG), and SoD analysis for GRC compliance.",
                "Collaborated with cross-functional teams to coordinate cutover activities, post-go-live support, and incident/change management."
            ],
            isAward: false
        }
    ];



  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-inter">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center justify-center mb-6 md:mb-0">
                <div className={`${exp.bgColor} rounded-full p-4 border-4 border-primary shadow-lg z-10 hidden md:block`}>
                  <i className={`${exp.icon} ${exp.iconColor} text-xl`}></i>
                </div>
              </div>
              
              <Card className={`bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'md:mr-8 md:ml-0' : 'md:ml-8 md:mr-0'}`}>
                <CardContent className="p-8">
                  <div className="text-center md:text-left mb-6">
                    <div className="flex items-center justify-center md:justify-start mb-4 md:hidden">
                      <div className={`${exp.bgColor} rounded-full p-3 mr-4`}>
                        <i className={`${exp.icon} ${exp.iconColor} text-xl`}></i>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground font-inter">{exp.company}</h3>
                    <p className="text-primary font-semibold text-lg">{exp.position}</p>
                    <p className="text-muted-foreground">{exp.period}</p>
                    {exp.isAward && (
                      <div className="mt-4">
                        <span className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 rounded-full text-sm font-poppins">
                          <i className="fas fa-award mr-2"></i>
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3 text-muted-foreground">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <i className="fas fa-check-circle text-secondary mr-3 mt-1 flex-shrink-0"></i>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}