import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
      const mailtoLink = `mailto:revanthgosula5@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Message Ready!",
      description: "Your email client should now open with the pre-filled message.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

    const contactInfo = [
        {
            icon: "fas fa-envelope",
            label: "Email",
            value: "revanthgosula5@gmail.com",
            href: "mailto:revanthgosula5@gmail.com",
            color: "text-primary",
            bgColor: "bg-primary/10"
        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Location",
            value: "Cincinnati, OH, USA",
            href: null,
            color: "text-secondary",
            bgColor: "bg-secondary/10"
        },
        {
            icon: "fab fa-linkedin",
            label: "LinkedIn",
            value: "Connect with me",
            href: "https://www.linkedin.com/in/gosularevanth/",
            color: "text-blue-400",
            bgColor: "bg-blue-400/10"
        }
    ];


  const languages = [
    { name: "English", level: "Fluent", color: "text-primary", bgColor: "bg-primary/10" },
    { name: "Telugu", level: "Fluent", color: "text-secondary", bgColor: "bg-secondary/10" },
    { name: "Hindi", level: "Fluent", color: "text-blue-400", bgColor: "bg-blue-400/10" }
  ];

  return (
    <section id="contact" className="py-20 bg-background circuit-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-inter">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to collaborate on your next project? I'm always open to discussing new opportunities 
            and innovative solutions. Let's build something amazing together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-card border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6 font-inter">Contact Information</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`${info.bgColor} p-3 rounded-full mr-4`}>
                        <i className={`${info.icon} ${info.color}`}></i>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className={`${info.color} hover:text-foreground transition-colors duration-300`}
                            target={info.href.startsWith('http') ? "_blank" : undefined}
                            rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 font-inter">Languages</h3>
                <div className="grid grid-cols-3 gap-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="text-center">
                      <div className={`${lang.bgColor} p-3 rounded-full mb-2 inline-block`}>
                        <i className={`fas fa-globe ${lang.color}`}></i>
                      </div>
                      <p className="text-foreground font-medium">{lang.name}</p>
                      <p className="text-sm text-muted-foreground">{lang.level}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-card border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 font-inter">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-muted-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-muted-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-muted-foreground">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 bg-background border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-muted-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 bg-background border-border focus:border-primary resize-vertical"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
                >
                  <i className="fas fa-paper-plane mr-2"></i>Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}