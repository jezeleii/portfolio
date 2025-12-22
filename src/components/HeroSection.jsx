import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative hero-section min-h-screen flex flex-col px-4"
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="container max-w-4xl mx-auto text-left z-10">
        <div className="space-y-8">
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground">
            <span className="text-gradient opacity-0 animate-fade-in-delay-1">{" "}jezelei</span>
            <span className="text-muted-foreground opacity-0 animate-fade-in-delay-2">{" "}manangan</span>
          </h1>
          <div className="flex flex-col gap-2 text-4xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-in-delay-3 text-foreground">
            <span>data <span className="text-primary">analyst</span></span>
            <span>frontend <span className="text-primary">developer</span></span>
            <span>sustainability <span className="text-primary">consultant</span></span>
          </div>

          <div className="opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
                View My Work
            </a>
          </div>
        </div>
      </div>
      </div>
    {/* arrow */}
      <div className="pointer-events-none pb-8 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  )
}
