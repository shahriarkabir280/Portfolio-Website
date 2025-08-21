import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

export const Projects = () => {
  const projects = [
    
    
    {
      title: "FamNest - Family Finance and Organizing App",
      description: "A comprehensive Android app that helps families track expenses, manage events, store important documents, and preserve memories in a secure digital time capsule.",
      image: "https://media.istockphoto.com/id/1294509749/photo/online-banking-for-family-budget-couple-in-the-kitchen-with-bills.jpg?s=612x612&w=0&k=20&c=4MYekpXzG9YoMnmFa1cDMPEZ0IsugjUdsZRHPz10_OY=", 
      tech: ["Flutter", "Dart", "MongoDB Atlas", "FastAPI", "Cloudinary", "Android Studio"],
      github: "https://github.com/shahriarkabir280/FamNest",
      live: "https://drive.google.com/file/d/1pVehxGPYByR9XKXYuL-etnwCfXqRqdVO/view?usp=sharing",
      featured: true
    },
    {
      title: "GrocyGenie - AI Model",
      description: "An AI-powered model that predicts when grocery items will run out, helping families manage their kitchen efficiently and avoid unexpected shortages. Built as a side project for the GrocieGenie mobile app.",
      image: "https://plus.unsplash.com/premium_photo-1742244062708-2f718a1f4ddb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxncm9jZXJ5fGVufDB8fDB8fHww",
      tech: ["Python", "TensorFlow", "pandas", "NumPy", "Hugging Face", "Google Colab"],
      github: "https://github.com/shahriarkabir280/GrocyGenieModel",
      live: "https://huggingface.co/spaces/shahriar031/GrocyGenieModel",
      featured: true
    },
    {
      title: "Collaborative Text Editor",
      description: "A real-time collaborative text editor built in Java with JavaFX and TCP sockets, enabling multiple users to edit the same document simultaneously over LAN with chat, session management, and synchronization.",
      image: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGRvY3VtZW50JTIwZWRpdG9yJTIwdG9vbHN8ZW58MHx8MHx8fDA%3D",
      tech: ["Java", "JavaFX", "TCP Sockets", "Concurrency & Threads", "URL Encoding"],
      github: "https://github.com/shahriarkabir280/Collaborative-Text-Editor",
      live: "#",
      featured: false
     },

    {
        title: "Disaster Management System",
        description: "A web-based Disaster Management System designed to streamline disaster response, victim management, and resource allocation. Built with a focus on efficient database handling and CRUD operations to ensure seamless coordination during emergencies.",
        tech: ["HTML", "CSS", "Node.js", "Express.js", "MySQL", "npm"],
        github: "https://github.com/shahriarkabir280/DisasterManagement",
        live: "#",
        featured: false
      },
    {
      title: "Portfolio Website v1",
      description: "My first portfolio website where I practiced building responsive layouts and adding animations using modern web technologies.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tech: ["TypeScript", "Tailwind CSS", "React", "shadcn-ui", "GSAP"],
      github: "https://github.com/shahriarkabir280/Portfolio-Website",
      live: "https://shahriarkabir-25.vercel.app/",
      featured: false
    },
    {
      title: "Calculator App",
      description: "One of my first JavaScript projects. Built a scientific calculator with history feature to practice DOM manipulation and event handling.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic & Personal <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-1 w-20 mx-auto animated-gradient rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            A collection of projects from my computer science journey, showcasing my learning and growth as a developer
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <Card key={project.title} className="glass-card hover-lift group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    className="group/btn"
                    onClick={() => window.open(project.live, "_blank")}
                  >
                    <Play className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="glass-card group/btn"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2  transition-transform" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Regular Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <Card key={project.title} className="glass-card hover-lift group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0 glass-card"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs px-2 py-0">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="text-xs px-2 py-0">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
           <a href="https://github.com/shahriarkabir280?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="glass-card hover-lift group">
                <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                View All Projects on GitHub
                </Button>
           </a>
         
        </div>
      </div>
    </section>
  );
};
