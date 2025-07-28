import { Card, CardContent } from "@/components/ui/card";
import { styleText } from "util";

export default function EducationSection() {
    const education = [
        {
            degree: "Master of Science in Information Technology",
            institution: "University of Cincinnati, Cincinnati, OH, USA",
            year: "Present",
            icon: "fas fa-graduation-cap",
            color: "text-primary",
            bgColor: "bg-primary/10"
        },
        {
            degree: "Bachelor of Science in Information Technology",
            institution: "SASTRA Deemed University, Thanjavur, India",
            year: "Completed",
            icon: "fas fa-university",
            color: "text-secondary",
            bgColor: "bg-secondary/10"
        }
    ];

  //const certifications = [
  //  {
  //    name: "HTML Certification",
  //    issuer: "University of Michigan (Coursera)",
  //    icon: "fab fa-html5",
  //    color: "text-orange-400",
  //    bgColor: "bg-orange-400/10"
  //  },
  //  {
  //    name: "Angular Certification",
  //    issuer: "HackerRank",
  //    icon: "fab fa-angular",
  //    color: "text-red-400",
  //    bgColor: "bg-red-400/10"
  //  },
  //  {
  //    name: "SQL Certification",
  //    issuer: "HackerRank",
  //    icon: "fas fa-database",
  //    color: "text-blue-400",
  //    bgColor: "bg-blue-400/10"
  //  }
  //];

  return (
      <section id="education" className="py-20 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-inter">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
              <div className="grid lg:grid-cols-2 gap-12" style={{ marginLeft: "23rem" }}>
          <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-8 text-center font-inter">Education</h3>
                      <div className="space-y-6" >
              {education.map((edu, index) => (
                  <Card key={index} className={`${edu.bgColor} border border-primary/20 card-hover`} style={{ width: "115%" }}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`${edu.bgColor} p-3 rounded-full mr-4 border border-primary/20`}>
                        <i className={`${edu.icon} ${edu.color} text-xl`}></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground font-inter">{edu.degree}</h4>
                        <p className={`${edu.color} font-medium`}>{edu.institution}</p>
                        <p className="text-muted-foreground">{edu.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/*<div>*/}
          {/*  <h3 className="text-2xl font-semibold text-foreground mb-8 text-center font-inter">Certifications</h3>*/}
          {/*  <div className="space-y-6">*/}
          {/*    {certifications.map((cert, index) => (*/}
          {/*      <Card key={index} className="bg-background border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300 shadow-lg card-hover">*/}
          {/*        <CardContent className="p-6">*/}
          {/*          <div className="flex items-center justify-between">*/}
          {/*            <div className="flex items-center">*/}
          {/*              <div className={`${cert.bgColor} p-3 rounded-full mr-4`}>*/}
          {/*                <i className={`${cert.icon} ${cert.color} text-xl`}></i>*/}
          {/*              </div>*/}
          {/*              <div>*/}
          {/*                <h4 className="text-lg font-semibold text-foreground font-inter">{cert.name}</h4>*/}
          {/*                <p className="text-muted-foreground">{cert.issuer}</p>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*            <i className="fas fa-award text-primary text-2xl"></i>*/}
          {/*          </div>*/}
          {/*        </CardContent>*/}
          {/*      </Card>*/}
          {/*    ))}*/}
              
          {/*    <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-2 border-yellow-200/20 card-hover">*/}
          {/*      <CardContent className="p-6">*/}
          {/*        <div className="text-center">*/}
          {/*          <div className="bg-yellow-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">*/}
          {/*            <i className="fas fa-trophy text-yellow-400 text-2xl"></i>*/}
          {/*          </div>*/}
          {/*          <h4 className="text-lg font-semibold text-foreground mb-2 font-inter">Ace Award</h4>*/}
          {/*          <p className="text-muted-foreground">Outstanding Performance Recognition at Accenture</p>*/}
          {/*        </div>*/}
          {/*      </CardContent>*/}
          {/*    </Card>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}