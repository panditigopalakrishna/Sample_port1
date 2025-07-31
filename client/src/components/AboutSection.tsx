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
                          SAP Basis Consultant with over 1+ year of experience managing end-to-end SAP landscapes,
                          including ECC 6.0 and S/4 HANA systems across development, QA, and production environments.
                          Skilled in performing system monitoring, client administration, transport management, and infrastructure support within ITIL-aligned operations.
                          Proficient in analyzing and resolving runtime issues using SAP transaction codes such as ST22, SM50, SM37, SM12, and SP01.
                          Experienced in managing HANA database monitoring (DB02), backup validations (DB14), and ensuring system performance and compliance.
                          Comfortable working across RDBMS environments and executing OS-level commands to maintain system health.
                          Known for maintaining high availability and reliability of SAP systems while supporting business continuity and audit compliance.


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
                  <p className="text-muted-foreground">1+ Years</p>
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
                                      SAP ECC 6.0 & S/4 HANA Administration
                                  </li>
                                  <li className="flex items-center">
                                      <i className="fas fa-check-circle text-primary mr-3"></i>
                                      System Monitoring & Performance Tuning
                                  </li>
                                  <li className="flex items-center">
                                      <i className="fas fa-check-circle text-primary mr-3"></i>
                                      Transport Management (SE01/STMS)
                                  </li>
                                  <li className="flex items-center">
                                      <i className="fas fa-check-circle text-primary mr-3"></i>
                                      HANA DB Monitoring & Backup (DB02/DB14)
                                  </li>
                                  <li className="flex items-center">
                                      <i className="fas fa-check-circle text-primary mr-3"></i>
                                      Client Administration & System Refresh
                                  </li>
                                  <li className="flex items-center">
                                      <i className="fas fa-check-circle text-primary mr-3"></i>
                                      ITIL-Based Operations & Issue Resolution
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