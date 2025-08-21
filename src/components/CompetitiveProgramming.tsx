import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Trophy, 
  Star, 
  Zap, 
  Award, 
  Target, 
  TrendingUp,
  Calendar,
  ExternalLink
} from "lucide-react";
import { Description } from "@radix-ui/react-toast";

export const CompetitiveProgramming = () => {
  const platforms = [
    /*{
      name: "LeetCode",
      icon: Code,
      href: "https://leetcode.com/shahriarkabir280",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      stats: {
        solved: "50+",
        rating: "---",
        rank: "---"
      },
      achievements: ["Daily Coding Challenge", "Problem Solver Badge", "DSA Expert"]
    },*/
    {
      name: "CodeChef",
      icon: Zap,
      href: "https://www.codechef.com/users/shahriar42",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
      stats: {
        rating: "1426",
        Division: "Div3",
        rank: "2 Star"
      },
      achievements: ["Contest Performer", "Monthly Challenge", "Logic Master"]
    },
    {
      name: "CodeForces",
      icon: Star,
      href: "https://codeforces.com/profile/Dopamine_01",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      stats: {
        rating: "996",
        maxRating: "1025",
        rank: "newbie"
      },
      achievements: ["Contest Participant", "Problem Solver", "Algorithm Specialist"]
    },
    {
      name: "HackerRank",
      icon: Trophy,
      href: "https://www.hackerrank.com/profile/shahriarkabir_20",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      stats: {
        stars: "5 Star",
        badges: "3",
        rank: "Gold"
      },
      achievements: ["Problem Solving Silver", "Data Structure and Algorithm Silver Badge", "C language Gold Badge"]
    }
    
  ];

  const overallStats = [
    { label: "Total Problems Solved", value: "500+", icon: Target },
    { label: "Contest Participated", value: "30+", icon: Trophy },
    { label: "Total Achievements", value: "8+", icon: Award },
    { label: "Coding Streak", value: "Max 60 days", icon: TrendingUp }
  ];

  const recentAchievements = [
    /*{
      title: "LeetCode Weekly Contest",
      description: "Ranked in top 10% in weekly contest #380",
      date: "Dec 2024",
      badge: "Contest Winner"
    },*/
    {
      title: "CodeChef Starters 88 Contest",
      description: "Achieved a Global Rank of 348 among thousands of competitive programmers.",
      date: "3rd May 2023",
      badge:"2 Stars"


    },
    {
      title: "HackerRank Silver Badge",
      description: "Achieved Silver level in Problem Solving domain",
      date: "Feb 2024",
      badge: "Silver Badge"
    },
    {
      title: "CodeForces Rating Milestone",
      description: "Reached highest rating of 1050",
      date: "July 2023",
      badge: "Rating Milestone"
    }
  ];

  return (
    <section id="competitive-programming" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Competitive <span className="gradient-text">Programming</span>
          </h2>
          <div className="h-1 w-20 mx-auto animated-gradient rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Passionate about algorithmic problem solving and competitive programming challenges
          </p>
        </div>

        {/* Overall Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {overallStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="glass-card p-6 text-center hover-lift animate-fade-in" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Platforms */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Platforms & Achievements</h3>
            
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <Card key={platform.name} 
                      className={`glass-card p-6 hover-lift animate-slide-in-right border-l-4 ${platform.borderColor}`}
                      style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${platform.bgColor}`}>
                        <Icon className={`h-6 w-6 ${platform.color}`} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">{platform.name}</h4>
                        <a 
                          href={platform.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                        >
                          View Profile <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {Object.entries(platform.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-2 glass-card rounded-lg">
                        <div className="text-sm font-medium text-foreground">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2">
                    {platform.achievements.map((achievement) => (
                      <Badge key={achievement} variant="secondary" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Recent Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Recent Achievements</h3>
            
            <div className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <Card key={achievement.title} 
                      className="glass-card p-6 hover-lift animate-fade-in"
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gradient-primary">
                      <Award className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {achievement.date}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{achievement.description}</p>
                      <Badge variant="outline" className="text-xs">
                        {achievement.badge}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Skills Developed */}
            <Card className="glass-card p-6 hover-lift">
              <h4 className="font-semibold text-foreground mb-4">Skills Developed</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Dynamic Programming",
                  "Graph Theory",
                  "Data Structures",
                  "Algorithm Design",
                  "Time Complexity",
                  "Problem Solving",
                  "Mathematical Logic",
                  "Optimization"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};