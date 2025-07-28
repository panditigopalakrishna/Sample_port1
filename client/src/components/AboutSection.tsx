import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-inter">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6 font-inter">Professional Summary</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                          Experienced Data Engineer with 3+ years of experience in developing enterprise-grade data pipelines, real-time workflows,
                          and data lake architectures across financial, healthcare, and consulting domains. Proficient in Python, SQL, Spark, Kafka,
                          dbt, Talend, Snowflake, PostgreSQL, MySQL, Oracle, and Informatica. Skilled in cloud platforms such as Azure, AWS, and
                          Snowflake. Expertise in Agile environments using JIRA and Git, with strong knowledge of data governance, security, and
                          compliance. Generated model-ready datasets and supported GenAI use cases through vector database prep, prompt
                          tuning, and retrieval-augmented generation (RAG) pipelines with LLMs. Experienced in MLflow, REST APIs, Terraform,
                          Jenkins, Git, Power BI, and Tableau. Aiming to apply technical expertise to drive transformative data solutions and serve
                          business objectives in a forward-thinking organization. 

            </p>
            {/*<p className="text-muted-foreground mb-6 leading-relaxed text-lg">*/}
            {/*  Passionate about problem-solving, continuous learning, and delivering high-quality, scalable solutions. */}
            {/*  Recognized for strong ownership, adaptability, and mentorship in collaborative environments. */}
            {/*  Received the <span className="text-primary font-semibold">Ace Award</span> for outstanding performance.*/}
            {/*</p>*/}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <Card className="bg-muted/50 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Location</h4>
                                  <p className="text-muted-foreground">Cincinnati, OH</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                  <p className="text-muted-foreground">3+ Years</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Languages</h4>
                  <p className="text-muted-foreground">English, Telugu, Hindi</p>
                </CardContent>
              </Card>
              {/*<Card className="bg-muted/50 border-primary/20">*/}
              {/*  <CardContent className="p-4">*/}
              {/*    <h4 className="font-semibold text-foreground mb-2">Award</h4>*/}
              {/*    <p className="text-muted-foreground">Ace Award Recipient</p>*/}
              {/*  </CardContent>*/}
              {/*</Card>*/}
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
                          src="https://wallpapercave.com/wp/wp10581316.jpg" 
              alt="Professional developer workspace with multiple monitors" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
            
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4 font-inter">Key Competencies</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                     Proven ability to lead cross-functional teams and collaborate across departments
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                   Strong attention to detail with a focus on data accuracy and regulatory compliance
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    Ability to translate complex technical concepts into actionable business insights
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    Self-driven with a track record of delivering high-impact solutions under tight deadlines
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    Resilient and resourceful in solving data infrastructure and integration challenges
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}