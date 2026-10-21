import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);

      // The active section is the last one whose top has passed just below the nav bar
      let current = "";
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section && section.getBoundingClientRect().top <= 120) current = item.href;
      }
      // At the very bottom the last section may be too short to reach the top
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = navItems[navItems.length - 1].href;
      }
      setActiveHref(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        isOpen
          ? "border-b border-border bg-background shadow-sm"
          : isScrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#"
            className="font-mono text-sm font-medium text-foreground"
          >
            shahriar<span className="text-primary">.</span>kabir
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                aria-current={activeHref === item.href ? "true" : undefined}
                className={`text-sm transition-colors hover:text-foreground ${
                  activeHref === item.href ? "font-medium text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("/Resume_Md_Shahriar_Kabir.pdf", "_blank")}
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                aria-current={activeHref === item.href ? "true" : undefined}
                className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted hover:text-foreground ${
                  activeHref === item.href ? "bg-muted font-medium text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="mt-2 w-full"
              onClick={() => window.open("/Resume_Md_Shahriar_Kabir.pdf", "_blank")}
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
