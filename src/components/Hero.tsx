import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl animate-float animate-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-primary opacity-5 blur-3xl animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="block text-foreground">Md. Shahriar</span>
              <span className="block gradient-text">Kabir</span>
            </h1>
            <div className="h-1 w-32 mx-auto animated-gradient rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
            Full-Stack Developer & Digital Architect crafting exceptional digital experiences with cutting-edge technologies
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-3 animate-slide-up animate-delay-400">
            {["React", "Node.js", "TypeScript", "Python"].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 glass-card text-sm font-medium hover-lift cyber-border"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animate-delay-600">
           <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-primary hover:scale-105 transition-all duration-300 glow-primary"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  projectsSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
            
           <Button
                  variant="outline"
                  size="lg"
                  className="group glass-card hover-lift"
                  onClick={() => {
                    // replace "resume.pdf" with your actual resume file path
                    window.open("/Resume_Md_Shahriar_Kabir.pdf", "_blank");
                  }}
                >
              <Download className="h-4 w-4 mr-2  transition-transform" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-slide-up animate-delay-800">
            {[
              { icon: Github, href: "https://github.com/shahriarkabir280", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shahriar-kabir25", label: "LinkedIn" },
              { icon: Mail, href: "mailto:shahriarkabir280@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 glass-card hover-lift group"
                aria-label={label}
              >
                <Icon className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};