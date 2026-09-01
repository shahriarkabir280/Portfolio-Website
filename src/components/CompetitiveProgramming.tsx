import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Target, Trophy, Award, TrendingUp } from "lucide-react";

export const CompetitiveProgramming = () => {
  const platforms = [
    {
      name: "CodeChef",
      href: "https://www.codechef.com/users/shahriar42",
      handle: "shahriar42",
      stats: [
        { label: "Rating", value: "1426" },
        { label: "Stars", value: "2★" },
        { label: "Badges", value: "3" },
      ],
      achievements: ["Problem Solver — Silver", "Contest performer"],
    },
    {
      name: "Codeforces",
      href: "https://codeforces.com/profile/Dopamine_01",
      handle: "Dopamine_01",
      stats: [
        { label: "Rating", value: "996" },
        { label: "Max", value: "1025" },
        { label: "Rank", value: "Newbie" },
      ],
      achievements: ["Regular contestant"],
    },
    {
      name: "HackerRank",
      href: "https://www.hackerrank.com/profile/shahriarkabir_20",
      handle: "shahriarkabir_20",
      stats: [
        { label: "Problem Solving", value: "Silver" },
        { label: "DSA", value: "Silver" },
        { label: "C", value: "Gold" },
      ],
      achievements: ["5★ in C", "Silver in Problem Solving"],
    },
  ];

  const overallStats = [
    { label: "Problems solved", value: "400+", icon: Target },
    { label: "Contests", value: "30+", icon: Trophy },
    { label: "Achievements", value: "8+", icon: Award },
    { label: "Best streak", value: "30 days", icon: TrendingUp },
  ];

  const skills = [
    "Dynamic programming",
    "Graph theory",
    "Data structures",
    "Greedy",
    "Number theory",
    "Complexity analysis",
  ];

  return (
    <section
      id="competitive-programming"
      className="border-t border-border py-20 md:py-28"
    >
      <div className="container mx-auto">
        <div className="max-w-2xl">
          <span className="eyebrow">Competitive programming</span>
          <h2 className="section-heading mt-3">Algorithmic problem solving</h2>
          <p className="mt-4 text-muted-foreground">
            A hobby that keeps my fundamentals sharp. Active mostly on CodeChef,
            Codeforces, and HackerRank.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {overallStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="surface p-5">
                <Icon className="h-4 w-4 text-primary" />
                <div className="mt-3 text-xl font-semibold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-hover group flex flex-col p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">
                  {platform.name}
                </h3>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                @{platform.handle}
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {platform.stats.map((s) => (
                  <div key={s.label} className="rounded-md bg-background-secondary p-2 text-center">
                    <div className="text-xs font-medium text-foreground">
                      {s.value}
                    </div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {platform.achievements.map((a) => (
                  <span
                    key={a}
                    className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 surface p-6">
          <h3 className="text-sm font-medium text-foreground">Topics I&apos;m comfortable with</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="font-normal">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
