import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const roles = [
    {
      title: "Backend AI Engineer — Intern",
      company: "FlyRank AI",
      companyUrl: "https://internship.flyrank.ai/",
      companyNote: "The autopilot for organic growth",
      period: "Jun 2026 — Present",
      location: "Chicago, Illinois, US · Remote",
      description:
        "Working on the backend AI systems behind FlyRank — building retrieval-augmented generation pipelines and the APIs that serve them.",
      skills: [
        "Python",
        "FastAPI",
        "RAG",
        "API development",
        "Artificial Intelligence",
      ],
    },
  ];

  return (
    <section id="experience" className="border-t border-border py-20 md:py-28">
      <div className="container mx-auto">
        <div className="max-w-2xl">
          <span className="eyebrow">Experience</span>
          <h2 className="section-heading mt-3">Where I&apos;ve worked</h2>
        </div>

        <div className="mt-12 space-y-4">
          {roles.map((role) => (
            <div key={role.title} className="surface p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <h3 className="text-lg font-semibold text-foreground">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm">
                    <a
                      href={role.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 font-medium text-primary hover:underline"
                    >
                      {role.company}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <span className="text-muted-foreground">
                      {" "}· {role.companyNote}
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 space-y-2 text-sm text-muted-foreground md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar className="h-4 w-4" />
                    <span>{role.period}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin className="h-4 w-4" />
                    <span>{role.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
