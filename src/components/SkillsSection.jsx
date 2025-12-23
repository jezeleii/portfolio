import { Icon as IconifyIcon } from "@iconify/react";
import { cn } from "@/lib/utils";


const dataAnalysisSkills = [
  { name: "Python", level: 95 },
  { name: "SQL", level: 92 },
  { name: "Excel", level: 90 },
  { name: "Tableau", level: 88 },
  { name: "R", level: 80 },
];

const esgSkills = [
  { name: "Life Cycle Assessment", level: 86 },
  { name: "Climate Risk Analytics", level: 83 },
  { name: "Sustainability Consulting", level: 80 },
  { name: "Green Software", level: 79 },
  { name: "Conflict Assessment", level: 76 },
];

const vennOverlap = [
  "Risk Analysis",
  "Climate Investing",
  "Impact Measurement",
];

const tools = [
  { label: "Python", icon: "logos:python" },
  { label: "SQL", icon: "logos:mysql" },
  { label: "Tableau", icon: "logos:tableau-icon" },
  { label: "Power BI", imgSrc: "/logo/power-bi.png" },
  { label: "Excel", imgSrc: "/logo/excel.png" },
  { label: "R", icon: "logos:r-lang" },
  { label: "PostgreSQL", icon: "logos:postgresql" },
  { label: "Supabase", icon: "logos:supabase-icon" },
  { label: "React", icon: "logos:react" },
  { label: "Figma", icon: "logos:figma" },
  { label: "JIRA", icon: "logos:jira" },
  { label: "Bloomberg", imgSrc: "/logo/bloomberg.png" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-6xl space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            My <span className="text-primary">Skills</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
          <SkillColumn
            subtitle="Audience & Analytics"
            skills={dataAnalysisSkills}
            gradient="from-[#0a2b65] to-[#1dcd9f]"
          />

          <VennDiagram />

          <SkillColumn
            subtitle="ESG & Sustainability"
            skills={esgSkills}
            gradient="from-[#1dcd9f] to-[#0a2b65]"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground text-center">
            Tools & Technologies
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.label}
                className="rounded-2xl p-4 flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform duration-300 bg-card/40 backdrop-blur-md shadow-sm"
              >
                <ToolIcon icon={tool.icon} imgSrc={tool.imgSrc} label={tool.label} />
                <p className="text-sm font-medium text-foreground">{tool.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillColumn = ({ title, subtitle, skills, gradient }) => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-foreground">
        {subtitle}
      </h3>
      <p className="text-sm text-muted-foreground">{title}</p>
    </div>
    <div className="space-y-3">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between text-sm text-foreground">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="relative w-full h-1.5 rounded-full bg-foreground/10 overflow-hidden">
            <div className="absolute inset-0 bg-white/10" />
            <div
              className={cn("relative h-full rounded-full bg-gradient-to-r", gradient)}
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const VennDiagram = () => (
  <div className="relative flex items-center justify-center">
    <div className="relative w-[420px] h-[420px]">
      <Circle
        className="absolute top-1/2 -translate-y-1/2 w-72 h-72"
        color="var(--venn-green-bg)"
        borderColor="var(--venn-green-border)"
        style={{ left: "8%" }}
      />
      <Circle
        className="absolute top-1/2 -translate-y-1/2 w-72 h-72"
        color="var(--venn-blue-bg)"
        borderColor="var(--venn-blue-border)"
        style={{ right: "8%" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 space-y-1.5">
       
        {vennOverlap.map((item) => (
          <p key={item} className="text-base text-foreground/90">
            {item}
          </p>
        ))}
      </div>
      <CircleLabel position="left" text="Data" />
      <CircleLabel position="right" text="ESG" />
    </div>
  </div>
);

const Circle = ({ className, color, borderColor, style }) => (
  <div
    className={cn("rounded-full border", className)}
    style={{ backgroundColor: color, borderColor, ...style }}
  />
);

const CircleLabel = ({ position, text }) => {
  const isLeft = position === "left";
  return (
    <div
      className={cn(
        "absolute top-10 text-sm uppercase tracking-[0.5em] text-muted-foreground",
        isLeft ? "-left-8" : "-right-8"
      )}
    >
      {text}
    </div>
  );
};

const ToolIcon = ({ icon, imgSrc, label, className }) => (
  <span
    className={cn(
      "w-14 h-14 flex items-center justify-center text-primary",
      className
    )}
    style={{ color: "hsl(var(--primary))" }}
  >
    {imgSrc ? (
      <img src={imgSrc} alt={label} className="w-8 h-8 object-contain" />
    ) : icon ? (
      <IconifyIcon icon={icon} className="w-8 h-8" />
    ) : null}
  </span>
);

export default SkillsSection;
