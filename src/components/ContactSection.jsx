import { Mail, MapPin, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react";



export const ContactSection = () => {
    const {toast} = useToast(); 
    const [isSubmitting, setIsSubmitting] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setIsSubmitting(true); 
        setTimeout(() => {
            toast({
                title: "Message sent!", 
                description: "Thank you for your message. I'll get back to you soon. "
            })
        }, 1500); 

        setIsSubmitting(false); 
    }
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3>Contact Information</h3>  
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-6">
                        {/* Email */}
                        <div className="flex items-center gap-4 flex-1">
                            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <Mail className="h-6 w-6 text-primary"/>
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
                        <div className="flex items-center gap-4 flex-1">
                            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4>Location</h4>
                                <span className="text-muted-foreground">
                                    Singapore
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact form */}
                <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                    <h3 className="text-2cl font-semibold mb-6">Send Me a Message</h3>
                        <form className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">{" "}Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Jane Doe"
                                >
                                </input>
                            </div>
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">{" "}Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="jane@gmail.com"
                                >
                                </input>
                            </div>
                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">{" "}Your Message</label>
                                <textarea
                                    type="text"
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about ..."
                                />
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={cn(
                                        "mt-5 cosmic-button w-full flex items-center justify-center gap-2",
                                    )}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                        Send Message
                                    <Send size={16}/>
                                </button>
                            </div>
                        </form>
                </div>
            </div>
          </div>
        </section>
    )
}
