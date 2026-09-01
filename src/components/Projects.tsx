import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Digital Knowledge Platform — academic library & resource hub",
      description:
        "A digital library and knowledge-management platform for academic resources, combining a document repository, circulation system, project showcase, and role-based collaboration.",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&auto=format&fit=crop&q=60",
      tech: ["Node.js", "Python", "Supabase", "PostgreSQL", "REST APIs"],
      github: "https://github.com/shahriarkabir280/Digital-Knowledge-Platform",
      live: "https://csedu-dkp.farefin.com/library",
      featured: true,
    },
    {
      title: "GrocyGenie — grocery prediction model",
      description:
        "An AI model that predicts when your grocery items will run out, so you can restock before running short. Built as the model layer for the GrocyGenie mobile app.",
      image:
        "https://plus.unsplash.com/premium_photo-1742244062708-2f718a1f4ddb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxncm9jZXJ5fGVufDB8fDB8fHww",
      tech: ["Python", "TensorFlow", "pandas", "NumPy", "Hugging Face", "Google Colab"],
      github: "https://github.com/shahriarkabir280/GrocyGenieModel",
      live: "https://huggingface.co/spaces/shahriar031/GrocyGenie",
      featured: true,
    },
    {
      title: "FamNest — Family finance & organizing app",
      description:
        "An Android app that helps families track expenses, manage events, store documents, and keep memories in a secure digital time capsule.",
      image:
        "https://media.istockphoto.com/id/1294509749/photo/online-banking-for-family-budget-couple-in-the-kitchen-with-bills.jpg?s=612x612&w=0&k=20&c=4MYekpXzG9YoMnmFa1cDMPEZ0IsugjUdsZRHPz10_OY=",
      tech: ["Flutter", "Dart", "FastAPI", "MongoDB Atlas", "Cloudinary"],
      github: "https://github.com/shahriarkabir280/FamNest",
      live: "https://drive.google.com/file/d/1pVehxGPYByR9XKXYuL-etnwCfXqRqdVO/view?usp=sharing",
      featured: true,
    },
    {
      title: "Collaborative text editor",
      description:
        "A real-time collaborative editor in Java with JavaFX and TCP sockets — multiple users edit one document over LAN, with chat and session management.",
      image:
        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGRvY3VtZW50JTIwZWRpdG9yJTIwdG9vbHN8ZW58MHx8MHx8fDA%3D",
      tech: ["Java", "JavaFX", "TCP Sockets", "Concurrency"],
      github: "https://github.com/shahriarkabir280/Collaborative-Text-Editor",
      live: "",
      featured: false,
    },
    {
      title: "Disaster management system",
      description:
        "A web app for coordinating disaster response — victim management and resource allocation, built around clean database design and CRUD workflows.",
      image:
        "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbCUyMGRpc2FzdGVyfGVufDB8fDB8fHww",
      tech: ["Node.js", "Express", "MySQL", "HTML", "CSS"],
      github: "https://github.com/shahriarkabir280/DisasterManagement",
      live: "",
      featured: false,
    },
    {
      title: "Portfolio website v1",
      description:
        "My first portfolio — where I practised responsive layouts and animation with modern web tooling.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tech: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
      github: "https://github.com/shahriarkabir280/Portfolio-Website",
      live: "https://shahriarkabir-25.vercel.app/",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="border-t border-border py-20 md:py-28">
      <div className="container mx-auto">
        <div className="max-w-2xl">
          <span className="eyebrow">Projects</span>
          <h2 className="section-heading mt-3">Things I&apos;ve built</h2>
          <p className="mt-4 text-muted-foreground">
            A mix of coursework and personal projects, roughly newest first.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="surface-hover group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.featured && (
                  <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-0.5 text-xs font-medium text-foreground backdrop-blur-sm">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-2">
                  {project.live && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      Live
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://github.com/shahriarkabir280?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Github className="h-4 w-4" />
              More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
