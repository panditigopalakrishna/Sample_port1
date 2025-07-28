import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
    const experiences = [
        {
            company: "Citi",
            position: "Data Engineer",
            period: "Dec 2024 – Present",
            location: "Remote",
            icon: "fas fa-building",
            iconColor: "text-primary",
            bgColor: "bg-primary/10",
            achievements: [
                "Architected real-time data pipelines using Kafka, Spark Structured Streaming, and Airflow for high-volume trading data.",
                "Built data integration workflows with Talend and Informatica, improving compliance and report accuracy by 30%.",
                "Developed AWS data lake with S3, Glue, and Athena to support AI/ML workflows including LLM fine-tuning.",
                "Created model-ready datasets and BI dashboards using Power BI, Tableau, scikit-learn, and Snowflake queries.",
                "Optimized cross-source ingestion using Python, SQL, Spark across Oracle, MySQL, PostgreSQL.",
                "Implemented scalable workflows with Airflow and Terraform, reducing ETL run-time by 40%.",
                "Developed Snowflake dbt models and clustering strategies to improve performance and report delivery by 30–40%.",
                "Led a cross-functional team to debug and optimize trade data pipelines, increasing SLA adherence by 25%.",
            ],
            isAward: false
        },
        {
            company: "Deloitte",
            position: "Data Engineer",
            period: "Nov 2022 – Nov 2023",
            location: "India",
            icon: "fas fa-briefcase",
            iconColor: "text-secondary",
            bgColor: "bg-secondary/10",
            achievements: [
                "Built batch and real-time ETL pipelines for regulatory frameworks like Basel III and IFRS-9 using Spark and Kafka.",
                "Implemented RAG-based search with vector databases and embedding models to automate compliance document retrieval.",
                "Migrated ETL workflows to Azure Data Factory, improving load times by 30%.",
                "Used MLflow, TensorFlow, and Databricks to monitor and accelerate ML pipeline performance.",
                "Delivered Tableau dashboards for credit risk and exposure using data from Oracle and PostgreSQL.",
                "Built scalable ETL and MLOps pipelines with Azure DevOps, GCP Vertex AI, and Informatica.",
            ],
            isAward: false
        },
        {
            company: "Optum",
            position: "Data Engineer",
            period: "Jan 2021 – Oct 2022",
            location: "India",
            icon: "fas fa-heartbeat",
            iconColor: "text-pink-500",
            bgColor: "bg-pink-100",
            achievements: [
                "Automated ETL pipelines for healthcare claims using Azure Data Factory, reducing manual intervention and improving SLA compliance.",
                "Processed large-scale patient records via Azure Synapse for real-time clinical analytics in Power BI.",
                "Developed secure pipelines compliant with HIPAA regulations using Azure Blob, SQL, and REST APIs.",
                "Built scalable, real-time data pipelines across SQL Server, PostgreSQL, and MySQL with Python and SQL.",
                "Optimized Snowflake queries and feature stores for healthcare ML models.",
                "Integrated MLflow and Git-based CI/CD workflows for streamlined deployment.",
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