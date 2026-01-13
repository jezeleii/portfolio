import { Mail, MapPin, GithubIcon } from "lucide-react";
import { LiaLinkedinIn } from "react-icons/lia";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out.
                Always open to discussing new opportunities. 
            </p>
            <div className="items-center grid grid-cols-1 md:grid-cols-1 gap-12">
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4>Email</h4>
                                <a
                                    href="mailto:jezelei.work@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                >
                                    jezelei.work@gmail.com
                                </a>
                            </div>
                        </div>
                        {/* Location */}
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <LiaLinkedinIn className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4>LinkedIn</h4>
                                <a href="https://www.linkedin.com/in/jezelei-m/">
                                    <span className="text-muted-foreground">Jezelei Manangan</span>
                                </a>
                                
                            </div>
                        </div>
                        {/* Github */}
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <GithubIcon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4>Github</h4>
                                <span className="text-muted-foreground">@jezeleii</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact form placeholder */}
                {/* <div className="bg-card/80 border border-border/40 p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
                    <p className="text-muted-foreground">
                        The contact form is currently disabled while I refine the experience.
                        In the meantime, feel free to reach me via email or Instagram and I&apos;ll respond as soon as I can.
                    </p>
                </div> */}
            </div>
          </div>
        </section>
    )
}
