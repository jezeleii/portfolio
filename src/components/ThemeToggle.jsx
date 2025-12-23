import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"; 
import { cn } from "@/lib/utils"; 

export const ThemeToggle = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme === "light") {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    } else {
      // Default to dark mode when no preference is stored
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDarkMode(true)
    }
  }, []) 


  const toggleTheme = () => { 
    if (isDarkMode){ 
        document.documentElement.classList.remove("dark"); 
        localStorage.setItem("theme", "light"); 
        setIsDarkMode(false); 
    } else { 
        document.documentElement.classList.add("dark"); 
        localStorage.setItem("theme", "dark"); 
        setIsDarkMode(true); 
    }
  }
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "p-2 rounded-full border border-border bg-card transition-colors duration-300 focus:outline-hidden focus:ring-2 focus:ring-primary",
        className
      )}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-primary" />
      ) : (
        <Moon className="h-5 w-5 text-primary" />
      )}
    </button>
  )
}
