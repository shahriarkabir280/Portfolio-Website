import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Evidrix: evidence-grounded question answering",
      description:
        "A RAG system that answers from your own technical docs and research papers, citing the exact passage, page and section behind every claim, and declining when the answer isn't there. Hybrid retrieval with cross-encoder reranking, benchmarked on a held-out split.",
      image:
        "/projects/evidrix.webp",
      tech: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Redis", "Ollama", "Docker"],
      github: "https://github.com/shahriarkabir280/evidrix",
      live: "",
      featured: true,
    },
    {
      title: "GridWise LLM: energy grid optimization",
      description:
        "Built for the BUP CSE Hackathon 2026 preliminary round: a FastAPI service that interprets operator notes with LLMs, applies deterministic safety guardrails, and generates optimized energy schedules with linear programming.",
      image:
        "/projects/gridwise.webp",
      tech: ["Python", "FastAPI", "SciPy", "LLMs", "Groq", "Gemini", "Docker"],
      github: "https://github.com/shahriarkabir280/Energy-Grid-Optimization",
      live: "",
      featured: false,
    },
    {
      title: "GrocyGenie: grocery prediction model",
      description:
        "An AI model that predicts when your grocery items will run out, so you can restock before running short. Built as the model layer for the GrocyGenie mobile app.",
      image:
        "/projects/grocygenie.webp",
      tech: ["Python", "FastAPI", "scikit-learn", "pandas", "NumPy", "Hugging Face"],
      github: "https://github.com/shahriarkabir280/GrocyGenieModel",
      live: "https://huggingface.co/spaces/shahriar031/GrocyGenie",
      featured: true,
    },
    {
      title: "MediSync: healthcare management platform",
      description:
        "A full-stack clinic platform connecting doctors, patients, and diagnostic centers, with appointments, medical records, lab reports, real-time chat and video calls, a Gemini clinical assistant, and SSLCommerz payments.",
      image:
        "/projects/medisync.webp",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Supabase", "Socket.IO", "WebRTC", "Gemini"],
      github: "https://github.com/shahriarkabir280/MediSync",
      live: "",
      featured: true,
    },
    {
      title: "Digital Knowledge Platform: academic library & resource hub",
      description:
        "A digital library and knowledge-management platform for academic resources, combining a document repository, circulation system, project showcase, and role-based collaboration.",
      image:
        "/projects/dkp.webp",
      tech: ["Node.js", "Python", "Supabase", "PostgreSQL", "REST APIs"],
      github: "https://github.com/shahriarkabir280/Digital-Knowledge-Platform",
      live: "https://dkp-frontend-ndrl.onrender.com/",
      featured: true,
    },
    {
      title: "FamNest: Family finance & organizing app",
      description:
        "An Android app that helps families track expenses, manage events, store documents, and keep memories in a secure digital time capsule.",
      image:
        "/projects/famnest.webp",
      tech: ["Flutter", "Dart", "FastAPI", "MongoDB Atlas", "Cloudinary"],
      github: "https://github.com/shahriarkabir280/FamNest",
      live: "",
      featured: true,
    },
    {
      title: "Disaster management system",
      description:
        "A web app for coordinating disaster response: victim management and resource allocation, built around clean database design and CRUD workflows.",
      image:
        "/projects/disaster.webp",
      tech: ["Node.js", "Express", "MySQL", "HTML", "CSS"],
      github: "https://github.com/shahriarkabir280/DisasterManagement",
      live: "",
      featured: false,
    },
    {
      title: "Collaborative text editor",
      description:
        "A real-time collaborative editor in Java with JavaFX and TCP sockets. Multiple users edit one document over LAN, with chat and session management.",
      image:
        "/projects/collab.webp",
      tech: ["Java", "JavaFX", "TCP Sockets", "Concurrency"],
      github: "https://github.com/shahriarkabir280/Collaborative-Text-Editor",
      live: "",
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
            A mix of coursework and personal projects: AI and machine learning
            first, then full-stack applications.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="surface-hover group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[2/1] overflow-hidden border-b border-border bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.featured && (
                  <span className="absolute right-3 top-3 rounded-md bg-background/90 px-2 py-0.5 text-xs font-medium text-foreground backdrop-blur-sm">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
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

          <a
            href="https://github.com/shahriarkabir280?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="surface-hover group hidden flex-col items-center justify-center gap-3 border-dashed p-6 text-center lg:flex"
          >
            <div className="rounded-full border border-border p-3 text-muted-foreground transition-colors group-hover:text-foreground">
              <Github className="h-5 w-5" />
            </div>
            <div className="text-base font-semibold text-foreground">More on GitHub</div>
            <p className="max-w-[16rem] text-sm text-muted-foreground">
              Other experiments, coursework and smaller projects.
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              View repositories
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        <div className="mt-10 lg:hidden">
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
