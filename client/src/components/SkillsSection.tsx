import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  color?: string;
}

function SkillBar({ skill, percentage, color = "primary" }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(percentage), 200);
        }
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={barRef} className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="text-muted-foreground">{skill}</span>
        <span className={`text-${color} text-sm`}>{percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className={`skill-bar h-2 rounded-full transition-all duration-2000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
    const skills = {
        erpSystems: [
            { name: "SAP MM", level: 90 },
            { name: "SAP PP", level: 88 },
            { name: "SAP Fiori", level: 85 },
            { name: "Oracle ERP", level: 80 },
            { name: "NetSuite", level: 75 },
            { name: "SAP S/4HANA", level: 78 },
            { name: "SAP ECC", level: 75 },
            { name: "SAP BI", level: 70 },
        ],
        supplyChain: [
            { name: "Inventory Management", level: 90 },
            { name: "Procurement Lifecycle", level: 88 },
            { name: "Demand Forecasting", level: 85 },
            { name: "Supply Planning", level: 85 },
            { name: "Logistics Coordination", level: 80 },
            { name: "Vendor Management", level: 80 },
            { name: "Cost Reduction Initiatives", level: 78 },
            { name: "KPI Tracking", level: 80 },
            { name: "Root Cause Analysis", level: 85 },
            { name: "Agile & Lean Supply Chain", level: 75 },
        ],
        analytics: [
            { name: "Power BI", level: 85 },
            { name: "Tableau", level: 80 },
            { name: "SQL", level: 85 },
            { name: "Advanced Excel", level: 90 }, // Includes Pivot Tables, VLOOKUP, Macros
        ],
        documentation: [
            { name: "SOP Documentation", level: 85 },
            { name: "Business Process Mapping", level: 80 },
            { name: "RFQ Management", level: 75 },
            { name: "Cross-Functional Collaboration", level: 88 },
            { name: "Continuous Improvement", level: 85 },
        ],
        platformsTools: [
            { name: "WMS", level: 80 },
            { name: "TMS", level: 78 },
            { name: "SAP Query / Custom Reports", level: 75 },
        ]
    };

  //const certifications = [
  //  {
  //    name: "HTML Certification",
  //    issuer: "University of Michigan (Coursera)",
  //    icon: "fab fa-html5",
  //    color: "text-orange-500",
  //  },
  //  {
  //    name: "Angular Certification",
  //    issuer: "HackerRank",
  //    icon: "fab fa-angular",
  //    color: "text-red-500",
  //  },
  //  {
  //    name: "SQL Certification",
  //    issuer: "HackerRank",
  //    icon: "fas fa-database",
  //    color: "text-blue-500",
  //  },
  //];

  return (
    <section id="skills" className="py-20 bg-background tech-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-inter">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* ERP Systems */}
                  <Card className="bg-card border-blue-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-network-wired text-blue-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">ERP Systems</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.erpSystems.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* Supply Chain */}
                  <Card className="bg-card border-green-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-shipping-fast text-green-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">Supply Chain</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.supplyChain.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* Analytics & Visualization */}
                  <Card className="bg-card border-yellow-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-chart-line text-yellow-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">Analytics & Visualization</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.analytics.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* Documentation & Processes */}
                  <Card className="bg-card border-purple-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-file-alt text-purple-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">Documentation & Processes</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.documentation.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* Platforms & Tools */}
                  <Card className="bg-card border-pink-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-toolbox text-pink-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">Platforms & Tools</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.platformsTools.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>
              </div>



        {/* Certifications */}
        {/*<div className="mt-16">*/}
        {/*  <Card className="bg-card border-primary/20">*/}
        {/*    <CardContent className="p-8">*/}
        {/*      <h3 className="text-2xl font-semibold mb-6 text-center font-inter">Certifications</h3>*/}
        {/*      <div className="grid md:grid-cols-3 gap-6">*/}
        {/*        {certifications.map((cert) => (*/}
        {/*          <div key={cert.name} className="text-center p-4 bg-muted/50 rounded-lg border border-primary/20">*/}
        {/*            <i className={`${cert.icon} text-3xl ${cert.color} mb-2`}></i>*/}
        {/*            <h4 className="font-semibold text-foreground">{cert.name}</h4>*/}
        {/*            <p className="text-sm text-muted-foreground">{cert.issuer}</p>*/}
        {/*          </div>*/}
        {/*        ))}*/}
        {/*      </div>*/}
        {/*    </CardContent>*/}
        {/*  </Card>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}