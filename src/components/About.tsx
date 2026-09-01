import { Badge } from "@/components/ui/badge";

export const About = () => {
  const stats = [
    { label: "GitHub projects", value: "9+" },
    { label: "Technologies used", value: "15+" },
    { label: "Commits", value: "400+" },
    { label: "Problems solved", value: "450+" },
  ];

  const interests = [
    "Generative AI & Large Language Models (LLMs)",
    "Production-Grade RAG Systems",
    "Agentic AI Architecture",
  ];

  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="container mx-auto">
        <div className="max-w-2xl">
          <span className="eyebrow">About</span>
          <h2 className="section-heading mt-3">
            A short introduction
          </h2>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.5fr_1fr] md:items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a final-year Computer Science and Engineering (CSE) student
              at the University of Dhaka. Most of what I know comes from building
              projects and reading on my own — I like taking an idea and turning
              it into something that actually runs.
            </p>
            <p>
              My work so far spans web and mobile apps, backend APIs, and applied
              machine learning. Right now I&apos;m interning at FlyRank AI as a
              backend AI engineer, working on retrieval-augmented generation
              pipelines and the APIs around them.
            </p>

            <div className="pt-4">
              <h3 className="text-sm font-medium text-foreground">
                Currently focused on
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="font-normal">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="surface p-5">
                <div className="text-2xl font-semibold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
