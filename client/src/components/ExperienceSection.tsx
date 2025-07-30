import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
    const experiences = [
        {
            company: "Edgesoft",
            position: "Supply Chain Intern",
            period: "Aug 2024 \u2014 Dec 2024", 
            location: "McKinney, TX",
            icon: "fas fa-industry",
            iconColor: "text-green-600",
            bgColor: "bg-green-100",
            achievements: [
                "Reduced procurement cycle time by 18% through end-to-end procurement and inventory optimization using SAP MM.",
                "Maintained 97%+ inventory accuracy by forecasting and planning over 500 SKUs with SAP PP.",
                "Enhanced decision-making by analyzing logistics KPIs through Power BI dashboards.",
                "Improved on-time delivery performance by 22% via root cause analysis and cross-functional coordination.",
                "Aligned inventory planning with financial objectives by leveraging SAP integration features."
            ],
            isAward: false
        },
        {
            company: "Accenture",
            position: "Associate Software Engineer",
            period: "Jun 2021 \u2014 Jul 2023",
            location: "India",
            icon: "fas fa-briefcase",
            iconColor: "text-primary",
            bgColor: "bg-primary/10",
            achievements: [
                "Managed logistics and inventory operations across 4 distribution centers using SAP MM for purchase requisition and goods receipt.",
                "Reduced excess inventory by 15% using SAP PP for MRP planning and replenishment strategy.",
                "Shortened vendor lead time by 8% through improved vendor relationship management and SAP Fiori applications.",
                "Increased ERP data accuracy by 20% via configuration of SAP MM tables and material master settings.",
                "Generated custom reports using SAP Query and technical modules for S&OP decision-making.",
                "Collaborated with IT and business units to optimize SAP configurations, boosting workflow efficiency by 12%."
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