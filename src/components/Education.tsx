import { Calendar, MapPin } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "BSc in Computer Science and Engineering",
      institution: "University of Dhaka",
      location: "Dhaka, Bangladesh",
      period: "2022 — 2026 (expected)",
      result: null as string | null,
      description:
        "Coursework across Data Structures and Algorithms, Databases, Networking, Operating Systems, Machine Learning and Artificial Intelligence, alongside team and solo software projects.",
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "Adamjee Cantonment College",
      location: "Dhaka, Bangladesh",
      period: "2019 — 2021",
      result: null as string | null,
      description:
        "Focused on Science - Mathematics, Physics, and Chemistry.",
    },
  ];

  return (
    <section id="education" className="border-t border-border py-20 md:py-28">
      <div className="container mx-auto">
        <div className="max-w-2xl">
          <span className="eyebrow">Education</span>
          <h2 className="section-heading mt-3">Academic background</h2>
        </div>

        <div className="mt-12 space-y-4">
          {education.map((edu) => (
            <div key={edu.degree} className="surface p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <h3 className="text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {edu.institution}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {edu.description}
                  </p>
                </div>

                <div className="shrink-0 space-y-2 text-sm text-muted-foreground md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.result && (
                    <div className="font-medium text-foreground">{edu.result}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
