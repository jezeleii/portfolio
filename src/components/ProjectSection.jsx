import { ExternalLink, Github, Linkedin } from "lucide-react";
import { LiaLinkedin, LiaLinkedinIn } from "react-icons/lia";

const GITHUB_PROFILE_URL = "https://github.com/jezeleii";
const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/jezeleii/";

const projects = [
    {
        id: 1,
        title:
            "Visualising Flood Risk in Singapore",
        description: "Modelling Amenity Accessibility Loss in Singapore using Historical Floods, Road Centrality and Simulations.",
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                        >
                            {/* image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            {/* tags */}
                            <div className="p-6">
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
                            </div>
                            {/* project */}
                            <div className="pb-7 px-6">
                                <h3 className="pb-5 text-xl font-semibold bm-2">
                                        {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <ExternalLink
                                            size={20}
                                            className="text-foreground/80 group-hover:text-primary transition-colors duration-300"
                                        />
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
                        Let's Connect <LiaLinkedinIn size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
};
