import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react";

export const Education = () => {
  const education = [
    {
  degree: "Bachelor of Science in Computer Science and Engineering",
  institution: "University of Dhaka",
  location: "Dhaka, Bangladesh", 
  period: "2022 - 2026(Expected)",
  cgpa: "---",
  description: "Building a strong foundation in computer science with a focus on software development, algorithms, system design, artificial intelligence, and machine learning."
},
{
  degree: "Higher Secondary Certificate (HSC)",
  institution: "Adamjee Cantonment College",
  location: "Dhaka, Bangladesh",
  period: "2019 - 2021",
  gpa: "5.0/5.0",  
  description: "Studied in the Science division with emphasis on Mathematics, Physics, and Chemistry."
}

  ];

  const certifications = [
    {
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-C02-2023"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2022", 
      credentialId: "GCP-PDE-2022"
    },
    {
      name: "React Advanced Certification",
      issuer: "Meta",
      date: "2023",
      credentialId: "META-REACT-ADV-2023"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="h-1 w-20 mx-auto animated-gradient rounded-full"></div>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={edu.degree} className="relative">
                {/* Timeline Line */}
                {index !== education.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-primary to-secondary opacity-30"></div>
                )}
                
                <Card className="glass-card hover-lift p-8 ml-16 relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-20 top-8 w-8 h-8 rounded-full bg-gradient-primary border-4 border-background flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                      <h5 className="text-lg text-primary font-semibold mb-3">{edu.institution}</h5>
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="text-success font-semibold">
                        {edu.cgpa ? `CGPA: ${edu.cgpa}` : `GPA: ${edu.gpa}`}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid 
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Professional Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.name} className="glass-card hover-lift p-6 text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8 text-white" />
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h4>
                <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm mb-3">{cert.date}</p>
                
                <Badge variant="outline" className="text-xs">
                  ID: {cert.credentialId}
                </Badge>
              </Card>
            ))}
          </div>
        </div>*/}
      </div>
    </section>
  );
};
