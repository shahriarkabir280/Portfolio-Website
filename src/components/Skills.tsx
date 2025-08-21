import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  Zap,
  Server,
  Globe
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "primary",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "secondary",
      skills: ["Node.js", "Express", "FastAPI", "REST APIs", "MongoDB", "MySQL"]
    },
    {
      title: "Programming Languages",
      icon: Globe,
      color: "success",
      skills: ["JavaScript", "Python", "Java", "C", "C++", "SQL", "TypeScript (Learning)"]
    },
    {
      title: "Tools & Technologies",
      icon: Zap,
      color: "primary",
      skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "Chrome DevTools", "npm"]
    },
    {
      title: "Database Technologies",
      icon: Database,
      color: "secondary",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Local Storage", "SQLite", "JSON"]
    },
    {
      title: "Design & UI",
      icon: Palette,
      color: "success",
      skills: ["Responsive Design", "UI/UX Principles", "Figma", "Wireframing", "Prototyping"]
    },
    {
      title: "Currently Learning",
      icon: Smartphone,
      color: "primary",
      skills: ["React Native", "Next.js", "TypeScript"]
    },
    {
      title: "Soft Skills",
      icon: Globe,
      color: "secondary",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability", "Critical Thinking"]
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case "primary": return "text-primary";
      case "secondary": return "text-secondary";
      case "success": return "text-success";
      default: return "text-primary";
    }
  };

  const getGlowClass = (color: string) => {
    switch (color) {
      case "primary": return "glow-primary";
      case "secondary": return "glow-secondary";
      case "success": return "shadow-success";
      default: return "glow-primary";
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="h-1 w-20 mx-auto animated-gradient rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Technical skills and knowledge acquired through computer science education and hands-on project development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className={`glass-card hover-lift group p-6 transition-all duration-300 hover:${getGlowClass(category.color)}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-primary`}>
                      <Icon className={`h-5 w-5 ${getIconColor(category.color)} group-hover:scale-110 transition-transform`} />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-xs glass-card hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Progress Indicator */}
                  <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-primary rounded-full transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000`}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Additional Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Linux", "Windows", "Vercel", "Heroku", 
              "Chart.js", "Socket.io", "API Integration", "JSON", "Fetch API",
              "Agile", "Scrum", "Code Reviews", "Testing", "Debugging", "Documentation"
            ].map((tool, index) => (
              <Badge
                key={tool}
                className="glass-card hover-lift cursor-pointer group px-4 py-2"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="group-hover:text-primary transition-colors">
                  {tool}
                </span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};