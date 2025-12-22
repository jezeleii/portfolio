import { NavBar } from "../components/NavBar"; 
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen text-foreground overflow-x-hidden">
            {/* navbar */}
            <NavBar/>
            
            {/* main content  */}
            <main>
                <HeroSection/>
                <AboutSection/>
                <ProjectSection/>
                <SkillsSection/>
                <ContactSection/>
            </main>
            
            {/* footer */}
            <Footer/>
        </div>
    )
}
