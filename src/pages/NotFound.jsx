
import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 text-center">
            <p className="uppercase tracking-widest text-sm text-primary/80 mb-4">Not Found</p>
            <h1 className="text-7xl md:text-8xl font-bold text-primary mb-6">404</h1>
            <p className="text-muted-foreground mb-8 max-w-md">
                The page you're looking for doesn't exist or may have been moved. Let's get you back to the homepage.
            </p>
            <Link
                to="/"
                className="cosmic-button inline-flex items-center justify-center gap-2"
            >
                Return Home
            </Link>
        </div>
    )
}
