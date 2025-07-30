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
                          I&#39;m Sri Maddela, a results-oriented Supply Chain Professional with 2.7+ years of experience and a Master&#39;s candidate in Information Technology and Management at UT Dallas (May 2025).
                          My background spans <strong>procurement</strong>, <strong>inventory planning</strong>, <strong>logistics</strong>, and <strong>vendor management</strong>, with a strong command of <strong>SAP (MM, PP, Fiori)</strong>, <strong>Oracle ERP</strong>, and data tools like <strong>Power BI</strong>, <strong>SQL</strong>, and <strong>Excel</strong>.
                          I&#39;ve successfully reduced procurement cycle times, improved on-time delivery, and enhanced inventory accuracy by leveraging data-driven strategies and ERP systems.
                          Known for cross-functional collaboration and continuous improvement,
                          I aim to drive operational efficiency and deliver measurable supply chain impact.
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
                                  <p className="text-muted-foreground">Dallas, Tx</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                  <p className="text-muted-foreground">2.7+ Years</p>
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
                          src="https://kodakco.sgp1.digitaloceanspaces.com/blog/wp-content/uploads/2023/12/21175907/SAP-Consultant.jpg" 
              alt="Professional developer workspace with multiple monitors" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
            
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4 font-inter">Key Competencies</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                                      End-to-End Supply Chain Management
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>

                                      ERP Systems & Data Integration
                  </li>
                  <li className="flex items-center">
                                      <i className="fas fa-check-circle text-primary mr-3"></i>
                                      Bridging Business Insight with Technical Expertise
                   </li>

                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                                      Data Analytics & Visualization
                                  </li>

                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                                      Process Optimization & Cost Reduction
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                                      Cross-Functional Collaboration & Communication
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