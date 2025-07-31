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
        sapPlatforms: [
            { name: "SAP ECC 6.0", level: 85 },
            { name: "SAP S/4HANA", level: 85 },
            { name: "SAP NetWeaver", level: 80 },
            { name: "SAP BW", level: 75 },
            { name: "SAP ERP", level: 80 },
            { name: "SAP Portal", level: 70 },
        ],
        systemAdministration: [
            { name: "Client Copy & System Refresh", level: 85 },
            { name: "Transport Management (STMS/SE01)", level: 88 },
            { name: "Kernel Upgrades & Patch Mgmt", level: 78 },
            { name: "Background Job Scheduling", level: 85 },
            { name: "Performance Tuning (ST02/ST03N)", level: 82 },
            { name: "Monitoring & Logs (SM21/SM66)", level: 80 },
        ],
        databaseOS: [
            { name: "SAP HANA", level: 82 },
            { name: "Oracle", level: 78 },
            { name: "SQL Server", level: 75 },
            { name: "MaxDB", level: 70 },
            { name: "Linux", level: 80 },
            { name: "UNIX", level: 78 },
        ],
        sapSecurityGRC: [
            { name: "User Administration (SU01/SUIM)", level: 85 },
            { name: "Role Management (PFCG)", level: 80 },
            { name: "SoD Analysis", level: 78 },
            { name: "GRC Access Control (ARA/ARM)", level: 75 },
        ],
        lifecycleSupport: [
            { name: "SAP Upgrades", level: 78 },
            { name: "Support Packs & Patching", level: 80 },
            { name: "Cutover Activities", level: 78 },
            { name: "Post-Go-Live Support", level: 82 },
            { name: "On-Call Rotation Support", level: 80 },
        ],
        tools: [
            { name: "SAP Solution Manager (SolMan)", level: 75 },
            { name: "SAP GUI & Logon Pad", level: 85 },
            { name: "SAP Fiori Launchpad", level: 78 },
            { name: "Putty / SSH", level: 80 },
            { name: "FileZilla / SFTP", level: 78 },
            { name: "JIRA / Confluence", level: 80 },
            { name: "Microsoft Excel (Audit Support)", level: 90 },
        ],
        analyticsReporting: [
            { name: "ST03N / Workload Analysis", level: 80 },
            { name: "EarlyWatch Alert Reports", level: 75 },
            { name: "SQL (Basic)", level: 78 },
            { name: "Excel for Reporting", level: 85 },
        ],
        softSkills: [
            { name: "Incident & Change Management", level: 85 },
            { name: "Cross-Functional Collaboration", level: 82 },
            { name: "Documentation & SOP Writing", level: 85 },
            { name: "Root Cause Analysis", level: 82 },
            { name: "SLA Compliance", level: 80 },
            { name: "Team Coordination & Communication", level: 82 },
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
                  {/* SAP Platforms */}
                  <Card className="bg-card border-blue-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-cogs text-blue-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">SAP Platforms</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.sapPlatforms.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* System Administration */}
                  <Card className="bg-card border-green-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-server text-green-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">System Administration</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.systemAdministration.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* Database & OS */}
                  <Card className="bg-card border-yellow-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-database text-yellow-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">Database & OS</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.databaseOS.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* SAP Security & GRC */}
                  <Card className="bg-card border-pink-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-user-shield text-pink-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">SAP Security & GRC</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.sapSecurityGRC.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* Project & Lifecycle Support */}
                  <Card className="bg-card border-indigo-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-project-diagram text-indigo-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">Project & Lifecycle Support</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.lifecycleSupport.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* Platforms & Tools */}
                  <Card className="bg-card border-teal-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-tools text-teal-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">Platforms & Tools</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.tools.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* Analytics & Reporting */}
                  <Card className="bg-card border-yellow-700/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-chart-bar text-yellow-700 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">Analytics & Reporting</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.analyticsReporting.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* Soft Skills */}
                  <Card className="bg-card border-purple-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-users text-purple-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">Soft Skills</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.softSkills.map((skill) => (
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