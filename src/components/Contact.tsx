import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Instagram,
  Facebook
} from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shahriarkabir280@gmail.com",
      href: "mailto:shahriarkabir280@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1918797689",
      href: "tel:+8801918797689"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "https://maps.app.goo.gl/4dzucfwn3s8SphNJ9"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/shahriarkabir280", label: "GitHub", color: "hover:text-foreground" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shahriar-kabir25", label: "LinkedIn", color: "hover:text-primary" },
    { icon: Facebook, href: "https://web.facebook.com/shahriarkabir25", label: "Facebook", color: "hover:text-success" },
    { icon: Twitter, href: "https://x.com/shahr2520", label: "Twitter", color: "hover:text-secondary" }
    
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-1 w-20 mx-auto animated-gradient rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Let's collaborate on your next project. I'm always interested in discussing new opportunities and innovative ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Send me a message
            </h3>
            
            <form
              action="https://formspree.io/f/mzzvlqwr" // replace with your Formspree ID
              method="POST"
              className="space-y-6"
              >
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="d9b4e8df-4e75-45bb-ae1d-05c015d2b219" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <Input
                    placeholder="John"
                    className="glass-card border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <Input
                    placeholder="Doe"
                    className="glass-card border-border/50 focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="john.doe@example.com"
                  className="glass-card border-border/50 focus:border-primary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input
                  placeholder="Project Collaboration"
                  className="glass-card border-border/50 focus:border-primary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="glass-card border-border/50 focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <Button className="w-full group bg-gradient-primary hover:scale-[1.02] transition-all duration-300 glow-primary">
                <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-lg glass-card hover-lift group transition-all duration-300"
                    >
                      <div className="p-3 rounded-lg bg-gradient-primary">
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {item.label}
                        </div>
                        <div className="text-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Follow me
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`flex items-center gap-3 p-4 rounded-lg glass-card hover-lift group transition-all duration-300 ${social.color}`}
                    >
                      <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Availability Status */}
            <Card className="glass-card p-8 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
                <h3 className="text-xl font-semibold text-foreground">
                  Available for Work
                </h3>
              </div>
              <p className="text-muted-foreground">
                I'm currently available for freelance projects and part-time opportunities. 
                Let's discuss how we can work together!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
