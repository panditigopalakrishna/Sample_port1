import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  //const projects = [
  //  {
  //    title: "Task Manager Web Application",
  //    description: "A lightweight web application developed with JavaScript for the frontend, Node.js for the backend, and SQL as the database. Users can log in, add tasks, edit, and delete tasks after completion making task management simple and efficient.",
  //    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
  //    technologies: ["JavaScript", "Node.js", "SQL"],
  //    links: {
  //      demo: "#",
  //      github: "#"
  //    }
  //  },
  //  {
  //    title: "Mortgage Eligibility Application with Explainable AI",
  //    description: "Developed a full-stack mortgage eligibility application with a responsive Angular frontend and Flask backend. Built intuitive UI screens for users to input income, asset details, loan amount, loan term, and CIBIL score. Integrated machine learning algorithms including Decision Tree, Random Forest, SVM, and Gradient Boosting. Used GridSearchCV for model tuning and SHAP to explain the influence of individual features on model predictions.",
  //    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
  //    technologies: ["Angular", "Python", "Flask", "SHAP", "Decision Tree", "Random Forest", "SVM", "Gradient Boosting", "GridSearchCV"],
  //    links: {
  //      demo: "#",
  //      github: "#"
  //    }
  //  },
  //  {
  //    title: "COVID-19 Future Forecasting",
  //    description: "COVID-19 future forecasting based on supervised machine learning models (IEEE paper). ML Algorithms: SVM, Linear Regression, Lasso Regression and Exponential Smoothing. This project aims to predict Confirmed, Recovered, and Death cases related to COVID-19 by leveraging various machine learning algorithms.",
  //    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
  //    technologies: ["Python", "Machine Learning", "SVM", "Linear Regression", "Lasso Regression", "Exponential Smoothing"],
  //    links: {
  //      demo: "#",
  //      github: "#"
  //    }
  //  },
  //  {
  //    title: "Driver Distraction Detection",
  //    description: "Driver Distraction Detection Using deep Convolutional neural Network. Deep Learning Architectures: Convolutional Neural Network (CNN), MobileNet V2 and VGG-16. This innovative research project focuses on identifying and predicting driver distractions through advanced deep learning technologies.",
  //    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
  //    technologies: ["Python", "Deep Learning", "CNN", "MobileNet V2", "VGG-16"],
  //    links: {
  //      demo: "#",
  //      github: "#"
  //    }
  //  }
  //];

  //const getColorForTech = (tech: string) => {
  //  const colors: { [key: string]: string } = {
  //    "JavaScript": "bg-yellow-500/20 text-yellow-400",
  //    "Node.js": "bg-green-500/20 text-green-400",
  //    "SQL": "bg-blue-500/20 text-blue-400",
  //    "Angular": "bg-red-500/20 text-red-400",
  //    "Python": "bg-blue-600/20 text-blue-300",
  //    "Flask": "bg-green-600/20 text-green-300",
  //    "SHAP": "bg-purple-500/20 text-purple-400",
  //    "Machine Learning": "bg-pink-500/20 text-pink-400",
  //    "Deep Learning": "bg-indigo-500/20 text-indigo-400",
  //    "CNN": "bg-cyan-500/20 text-cyan-400",
  //  };
  //  return colors[tech] || "bg-gray-500/20 text-gray-400";
  //};

  //return (
  //  <section id="projects" className="py-20 bg-card">
  //    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  //      <div className="text-center mb-16">
  //        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-inter">
  //          Featured <span className="text-primary">Projects</span>
  //        </h2>
  //        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
  //      </div>
        
  //      <div className="grid md:grid-cols-2 gap-8">
  //        {projects.map((project, index) => (
  //          <Card key={index} className="project-card rounded-xl overflow-hidden border border-primary/20 card-hover">
  //            <img 
  //              src={project.image} 
  //              alt={project.title}
  //              className="w-full h-48 object-cover"
  //            />
  //            <CardContent className="p-6">
  //              <h3 className="text-xl font-semibold text-foreground mb-3 font-inter">{project.title}</h3>
  //              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
  //              <div className="flex flex-wrap gap-2 mb-4">
  //                {project.technologies.map((tech) => (
  //                  <span 
  //                    key={tech}
  //                    className={`px-3 py-1 rounded-full text-sm ${getColorForTech(tech)}`}
  //                  >
  //                    {tech}
  //                  </span>
  //                ))}
  //              </div>
                
  //              <div className="flex space-x-4">
  //                <Button 
  //                  variant="outline" 
  //                  size="sm"
  //                  className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
  //                >
  //                  <i className="fas fa-external-link-alt mr-2"></i>
  //                  Live Demo
  //                </Button>
  //                <Button 
  //                  variant="outline" 
  //                  size="sm"
  //                  className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
  //                >
  //                  <i className="fab fa-github mr-2"></i>
  //                  Code
  //                </Button>
  //              </div>
  //            </CardContent>
  //          </Card>
  //        ))}
  //      </div>
  //    </div>
  //  </section>
  //);
}