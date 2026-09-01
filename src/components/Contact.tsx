import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shahriarkabir280@gmail.com",
      href: "mailto:shahriarkabir280@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1918 797689",
      href: "tel:+8801918797689",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "https://maps.app.goo.gl/4dzucfwn3s8SphNJ9",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/shahriarkabir280", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shahriar-kabir25", label: "LinkedIn" },
    { icon: Facebook, href: "https://web.facebook.com/shahriarkabir25", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/shahr2520", label: "Twitter" },
  ];

  return (
    <section id="contact" className="border-t border-border py-20 md:py-28">
      <div className="container mx-auto">
        <div className="max-w-2xl">
          <span className="eyebrow">Contact</span>
          <h2 className="section-heading mt-3">Get in touch</h2>
          <p className="mt-4 text-muted-foreground">
            I&apos;m open to internships, junior roles, and interesting projects.
            The fastest way to reach me is email.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="space-y-3">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="surface-hover flex items-center gap-4 p-4"
                >
                  <div className="rounded-lg border border-border p-2.5 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    <div className="text-sm text-foreground">{item.value}</div>
                  </div>
                </a>
              );
            })}

            <div className="flex flex-wrap gap-2 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-lg border border-border p-2.5 text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <form
            action="https://formspree.io/f/mzzvlqwr"
            method="POST"
            className="surface space-y-4 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">First name</label>
                <Input name="first_name" placeholder="Jane" required />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Last name</label>
                <Input name="last_name" placeholder="Doe" required />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input type="email" name="email" placeholder="jane@example.com" required />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Message</label>
              <Textarea
                name="message"
                placeholder="A few lines about what you have in mind…"
                rows={5}
                className="resize-none"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              <Send className="h-4 w-4" />
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
