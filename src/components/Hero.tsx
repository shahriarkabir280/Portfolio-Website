import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/prof.png";

export const Hero = () => {
  const socials = [
    { icon: Github, href: "https://github.com/shahriarkabir280", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shahriar-kabir25", label: "LinkedIn" },
    { icon: Mail, href: "mailto:shahriarkabir280@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* subtle dotted backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="container mx-auto relative">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Backend AI Engineer Intern at FlyRank AI
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] text-foreground">
              Md. Shahriar Kabir
            </h1>

            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              I turn ideas into working software — from full-stack apps to
              production RAG pipelines — and sharpen my edge with the
              occasional algorithmic puzzle.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View my work
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("/Resume_Md_Shahriar_Kabir.pdf", "_blank")}
              >
                <Download className="h-4 w-4" />
                Download résumé
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-lg border border-border p-2.5 text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up md:justify-self-end">
            <div className="mx-auto w-56 md:w-full max-w-xs overflow-hidden rounded-2xl border border-border">
              <img
                src={profileImage}
                alt="Md. Shahriar Kabir"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
