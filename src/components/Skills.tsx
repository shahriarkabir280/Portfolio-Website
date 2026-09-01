import {
  Code2,
  Database,
  Palette,
  Server,
  Sparkles,
  Terminal,
  Users,
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Flutter"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "FastAPI", "REST APIs"],
    },
    {
      title: "AI / ML",
      icon: Sparkles,
      skills: ["RAG", "LLM APIs", "TensorFlow", "pandas", "NumPy", "Hugging Face"],
    },
    {
      title: "Languages",
      icon: Terminal,
      skills: ["JavaScript", "Python", "Java", "C", "C++", "SQL"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    },
    {
      title: "Tools",
      icon: Palette,
      skills: ["Git & GitHub", "VS Code", "Google Colab", "Docker", "IntelliJ IDEA", "Postman"],
    },
    {
      title: "Working with others",
      icon: Users,
      skills: ["Problem solving", "Team collaboration", "Communication", "Leadership"],
    },
  ];

  const learning = ["LangChain", "Vector Databases", "Agentic AI Systems"];

  return (
    <section id="skills" className="border-t border-border py-20 md:py-28">
      <div className="container mx-auto">
        <div className="max-w-2xl">
          <span className="eyebrow">Skills</span>
          <h2 className="section-heading mt-3">Tools I work with</h2>
          <p className="mt-4 text-muted-foreground">
            Picked up through coursework, side projects, and a lot of
            trial and error.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="surface-hover p-6">
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-medium text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-background-secondary px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Currently learning</span>
          {learning.map((item) => (
            <span
              key={item}
              className="rounded-md border border-dashed border-border px-2.5 py-1 text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
