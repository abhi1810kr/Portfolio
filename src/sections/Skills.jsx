import { Code2, Database, Palette, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "Tailwind", "Next.js"],
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Figma", "UI/UX", "Responsive Design", "Design Systems"],
  },
  {
    icon: Wrench,
    title: "Workflow",
    skills: ["Git", "GitHub", "CI/CD", "Testing", "Agile"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Tools and technologies I use to
            <span className="font-serif italic font-normal text-white">
              {" "}
              build standout products.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            I enjoy working across the full product lifecycle, from concept and
            design to implementation, testing, and deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={group.title}
              className="glass rounded-2xl p-6 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <group.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-4">{group.title}</h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-surface text-sm text-muted-foreground border border-border/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
