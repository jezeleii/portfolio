import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
];

const certifications = [
  {
    name: "Bloomberg Market Concepts",
    issuer: "Bloomberg",
    issued: "Issued 2025",
    image: "/certifications/bloomberg_bmc.png",
    url: "https://portal.bloombergforeducation.com/certificates/SJouhWjN4iKCJSJyM9mweRsP",
  },
  {
    name: "Bloomberg ESG Certificate",
    issuer: "Bloomberg",
    issued: "Issued 2025",
    image: "/certifications/bloomberg_esg.png",
    url: "https://portal.bloombergforeducation.com/certificates/SXgcbYWnpZ5MEohPxp1Y5B7n",
  },
];

const categories = ["all", "frontend", "backend", "tools"]


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all"); 
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory
); 

    return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">{" "}Skills</span>
            </h2>

            {/* Category Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover: bg-secondary"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        {/* loading bar */}
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div 
                                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{width: `${skill.level}%`}}
                            />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
            {/* Certifications */}
            <div className="mt-16">
                <h3 className="text-2xl font-semibold text-center mb-8">
                    Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.url}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col space-y-4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="h-32 overflow-hidden rounded-md bg-background/60 flex items-center justify-center">
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="object-contain h-full"
                                />
                            </div>
                            <div className="flex flex-col space-y-2 text-left">
                                <h4 className="text-lg font-semibold">{cert.name}</h4>
                                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                                <p className="text-sm text-foreground/80">{cert.issued}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </section>
    )
}
