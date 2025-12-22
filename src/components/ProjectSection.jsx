import { ExternalLink, Github, Linkedin } from "lucide-react";

const GITHUB_PROFILE_URL = "https://github.com/jezeleii";
const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/jezeleii/";

const projects = [
    {
        id: 1,
        title:
            "Visualising Flood Risk in Singapore",
        description: "A geospatial web app using React and Python",
        image: "/projects/project-1.png",
        tags: ["React", "Supabase", "Python"],
        demoUrl: "https://fypbawaterbender.vercel.app/home",
        githubUrl: "#",
        githubDisabled: true,
    },
    {
        id: 2,
        title: "Geospatial Portfolio - Urban Resilience",
        description:
            "Featuring intermediate and advanced geospatial analysis techniques for 3 real-life case studies",
        image: "/projects/project-2.png",
        tags: ["R", "Quarto"],
        demoUrl: "https://is415-ga-jezelei.netlify.app/",
        githubUrl: "https://github.com/jezeleii/IS415-GA",
    },
    {
        id: 3,
        title: "AlterCOP 30",
        description: "Lead website developer for AlterCOP, a remote alternative to COP30 bridging countries across APAC and Europe.",
        image: "/projects/project-3.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://www.altercop.com/",
        githubUrl: "#",
        githubDisabled: true,
    },
];

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> {" "}Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted
                    with attention to detail, performance and user experience. I've diversified
                    my skillsets to maximise my exposure and application of knowledge to real-world contexts.
                </p>

                {/* projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer flex flex-col h-full"
                            role="link"
                            tabIndex={0}
                            onClick={() => window.open(project.demoUrl, "_blank", "noopener,noreferrer")}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault();
                                    window.open(project.demoUrl, "_blank", "noopener,noreferrer");
                                }
                            }}
                        >
                            {/* image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            {/* content */}
                            <div className="flex-1 flex flex-col px-6 py-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-moedium rounded-full bg-primary/10 text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <h3 className="pb-5 text-xl font-semibold">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="mt-6 flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                            href={project.demoUrl} 
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            onClick={(event) => event.stopPropagation()}
                                        >
                                            <ExternalLink size={20}/>
                                        </a>
                                        {project.githubDisabled ? (
                                            <span
                                                className="text-foreground/40 cursor-not-allowed"
                                                aria-disabled="true"
                                                title="GitHub repository is private"
                                            >
                                                <Github size={20}/>
                                            </span>
                                        ) : (
                                            <a 
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                onClick={(event) => event.stopPropagation()}
                                            >
                                                <Github size={20}/>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* GitHub and Linkedin  */}
                <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-4">
                    <a 
                        className="cosmic-button inline-flex items-center justify-center gap-2"
                        href={GITHUB_PROFILE_URL}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Check My Github <Github size={16}/>
                    </a>
                    <a
                        href={LINKEDIN_PROFILE_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="cosmic-button inline-flex items-center justify-center gap-2"
                    >
                        Let's Connect <Linkedin size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
};
