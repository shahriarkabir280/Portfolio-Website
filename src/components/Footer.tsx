import { Button } from "@/components/ui/button";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart,
  ArrowUp
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/shahriarkabir280", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shahriar-kabir25", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/shahr2520", label: "Twitter" },
    { icon: Mail, href: "mailto:shahriarkabir280@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-16 px-4 border-t border-border/20 bg-card/80 backdrop-blur-sm">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Md. Shahriar Kabir</h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Developer passionate about creating exceptional digital experiences. 
              Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 glass-card hover-lift group"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4 group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>shahriarkabir280@gmail.com</p>
              <p>+880 1918797689</p>
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span className="text-success">Available for work</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/20 gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span className="text-muted-foreground">© {currentYear} Md. Shahriar Kabir.</span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="group"
          >
            <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
};