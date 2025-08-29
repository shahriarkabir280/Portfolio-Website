import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/Myprofileimage.jpg";


export const About = () => {
  const stats = [
    { label: "GitHub Projects", value: "5+" },
    { label: "Technologies Learned", value: "15+" },
    { label: "Code Commits", value: "300+" },
    { label: "Study Hours", value: "800+" }
  ];

  const interests = ["React Development", "Backend APIs", "Mobile Apps", "Artificial Intelligence", "Problem Solving"];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-20 mx-auto animated-gradient rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image & Stats */}
          <div className="space-y-8">
           <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Taller, responsive profile image */}
              <div className="rounded-2xl overflow-hidden glass-card hover-lift w-full">
                <img
                  src={profileImage}
                  alt="Md. Shahriar Kabir"
                  className="w-full rounded-2xl"
                />
              </div>


              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass-card p-4 animate-float">
                <span className="text-2xl">👋</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="glass-card hover-lift p-6 text-center group">
                  <div className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>


          {/* Content */}
          <div className="space-y-6 pt-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Fresh Graduate & Aspiring Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a 3rd-year Computer Science undergraduate passionate about software development. 
              Through academic projects and self-learning, I've built a strong foundation in modern 
              technologies and enjoy turning ideas into functional applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm eager to contribute to innovative projects and grow as a developer. My academic 
              background, combined with hands-on project experience, has prepared me to tackle 
              real-world challenges and make meaningful contributions to development teams.
            </p>
            </div>

            {/* Interests */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">Learning Focus</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge
                    key={interest}
                    variant="secondary"
                    className="glass-card hover-lift cursor-pointer group"
                  >
                    <span className="group-hover:text-primary transition-colors">
                      {interest}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="relative p-6 glass-card hover-lift">
              <div className="absolute top-4 left-4 text-primary/30 text-4xl">"</div>
              <p className="italic text-muted-foreground pl-8">
                Every problem is an opportunity to learn something new. I approach coding with 
                curiosity and determination, knowing that today's challenges become tomorrow's expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
