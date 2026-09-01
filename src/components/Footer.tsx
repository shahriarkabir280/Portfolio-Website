import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/shahriarkabir280", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shahriar-kabir25", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/shahr2520", label: "Twitter" },
    { icon: Mail, href: "mailto:shahriarkabir280@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Md. Shahriar Kabir. Built with React &amp; Tailwind.
          </p>

          <div className="flex items-center gap-1">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ml-2"
            >
              <ArrowUp className="h-4 w-4" />
              Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
