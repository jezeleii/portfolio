import { ArrowUp } from "lucide-react"


export const Footer = () => { 
    return (
        <footer className="py-12 px-4 bg-card border-t border-border mt-12">
            <div className="container mx-auto max-w-5xl flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Jezelei Manangan. All rights reserved.
                </p>
                {/* tag to scroll to the top  */}
                <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors" aria-label="scroll to hero">
                    <ArrowUp/>
                </a>
            </div>
        </footer>
    )
}
