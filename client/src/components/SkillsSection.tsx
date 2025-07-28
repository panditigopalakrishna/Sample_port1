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
        programming: [
            { name: "Python", level: 90 },
            { name: "SQL/T-SQL", level: 92 },
            { name: "R", level: 70 },
        ],
        bigData: [
            { name: "Apache Spark", level: 90 },
            { name: "Kafka", level: 85 },
            { name: "Hadoop", level: 75 },
            { name: "Databricks", level: 80 },
        ],
        etl: [
            { name: "Talend", level: 85 },
            { name: "Informatica", level: 88 },
            { name: "Apache NiFi", level: 75 },
            { name: "Azure Data Factory", level: 90 },
            { name: "AWS Glue", level: 85 },
            { name: "dbt", level: 80 },
            { name: "Fivetran", level: 70 },
            { name: "Airbyte", level: 70 },
        ],
        cloud: [
            { name: "AWS", level: 85 },
            { name: "Azure", level: 90 },
            { name: "GCP", level: 75 },
        ],
        database: [
            { name: "Snowflake", level: 90 },
            { name: "PostgreSQL", level: 85 },
            { name: "MySQL", level: 80 },
            { name: "Oracle", level: 80 },
            { name: "SQL Server", level: 85 },
        ],
        mlAi: [
            { name: "scikit-learn", level: 80 },
            { name: "TensorFlow", level: 75 },
            { name: "MLflow", level: 80 },
            { name: "LangChain", level: 70 },
            { name: "RAG Pipelines", level: 80 },
            { name: "OpenAI API", level: 80 },
            { name: "Hugging Face Transformers", level: 75 },
        ],
        devOps: [
            { name: "Airflow", level: 85 },
            { name: "Jenkins", level: 80 },
            { name: "Terraform", level: 75 },
            { name: "Docker", level: 80 },
            { name: "Kubernetes", level: 70 },
        ],
        tools: [
            { name: "Git/GitHub/Bitbucket", level: 90 },
            { name: "REST APIs", level: 85 },
            { name: "JIRA", level: 88 },
            { name: "Agile/Scrum", level: 90 },
            { name: "SDLC", level: 85 },
        ],
        visualization: [
            { name: "Power BI", level: 85 },
            { name: "Tableau", level: 85 },
            { name: "Looker", level: 75 },
        ],
        security: [
            { name: "HIPAA", level: 80 },
            { name: "GDPR", level: 80 },
            { name: "Data Masking", level: 75 },
            { name: "Encryption", level: 75 },
            { name: "IAM", level: 70 },
        ],
    }
;
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
                  {/* Programming */}
                  <Card className="bg-card border-primary/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-code text-primary text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">Programming</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.programming.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* Big Data */}
                  <Card className="bg-card border-yellow-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-layer-group text-yellow-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">Big Data</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.bigData.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* ETL / Integration */}
                  <Card className="bg-card border-green-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-random text-green-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">ETL / Integration</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.etl.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* Cloud */}
                  <Card className="bg-card border-sky-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-cloud text-sky-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">Cloud Platforms</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.cloud.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* Databases */}
                  <Card className="bg-card border-purple-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-database text-purple-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">Databases</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.database.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* ML & AI */}
                  <Card className="bg-card border-pink-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-brain text-pink-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">ML & AI</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.mlAi.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* DevOps */}
                  <Card className="bg-card border-orange-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-cogs text-orange-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">DevOps</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.devOps.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* Tools & Methods */}
                  <Card className="bg-card border-indigo-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-wrench text-indigo-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">Tools & Methods</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.tools.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* Visualization */}
                  <Card className="bg-card border-red-400/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-chart-bar text-red-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">Visualization</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.visualization.map((skill) => (
                                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* Security & Compliance */}
                  <Card className="bg-card border-lime-500/20 card-hover">
                      <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                              <i className="fas fa-shield-alt text-lime-400 text-2xl mr-3"></i>
                              <h3 className="text-xl font-semibold text-foreground font-inter">Security & Compliance</h3>
                          </div>
                          <div className="space-y-4">
                              {skills.security.map((skill) => (
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