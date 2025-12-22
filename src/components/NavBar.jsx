import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Leaf } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"


const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false); 
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [activeSection, setActiveSection] = useState("hero");
    const activeRef = useRef("hero")

    useEffect(() => { 
        const handleScroll = () => { 
            setIsScrolled(window.scrollY > 10)
        }

        const handleSections = () => {
            const offsets = navItems.map((item) => {
                const el = document.querySelector(item.href)
                if (!el) return null
                return {
                    id: item.href.replace("#", ""),
                    top: Math.abs(el.getBoundingClientRect().top)
                }
            }).filter(Boolean)

            const nearest = offsets.sort((a, b) => a.top - b.top)[0]
            if (nearest && nearest.id !== activeRef.current) {
                activeRef.current = nearest.id
                setActiveSection(nearest.id)
                window.history.replaceState(null, "", `#${nearest.id}`)
            }
        }

        window.addEventListener("scroll", handleScroll)
        window.addEventListener("scroll", handleSections, { passive: true })
        handleSections()
        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("scroll", handleSections)
        }
    }, [])

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300", 
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 pl-1 sm:pl-3 lg:pl-0">
                    <a 
                        className="text-primary flex items-center"
                        href="#hero"
                        aria-label="Personal Portfolio"
                    >
                        <Leaf className="h-8 w-8 text-primary transition-colors duration-300"/>
                    </a>
                </div>

                <div className="flex items-center gap-4 ml-auto w-full justify-end pr-2 sm:pr-4 lg:pr-0">
                    {/* desktop nav */}
                    <div className="hidden md:flex items-center gap-8 mr-4">
                        {navItems.map((item, key) =>(
                            <a 
                                key={key} 
                                href={item.href} 
                                className={cn(
                                    "transition-colors duration-300",
                                    activeSection === item.href.replace("#","")
                                        ? "text-primary font-semibold"
                                        : "text-foreground/80 hover:text-primary"
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        {/* mobile nav */}
                        <button 
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="md:hidden p-2 text-foreground z-50"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}{" "}
                        </button>
                        <ThemeToggle className="inline-flex ml-2" />
                    </div>
                </div>
                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className={cn(
                                    "transition-colors duration-300 text-xl text-center",
                                    activeSection === item.href.replace("#","")
                                        ? "text-primary font-semibold"
                                        : "text-foreground/80 hover:text-primary"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                            </a>
                        ))}
                        <ThemeToggle className="mt-6 inline-flex" />
                    </div>
                </div>

            </div>
        </nav>
    )
}
