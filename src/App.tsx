import Benefits from "./components/Benefits"
import CourseOverview from "./components/CourseOverview"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import FreeBonus from "./components/FreeBonus"
import Hero from "./components/Hero"
import HookQuote from "./components/HookQuote"
import Testimonials from "./components/Testimonials"
import { initGA, trackPageView } from "./analytics";
import { useEffect } from "react"


function App() {
    useEffect(() => {
        initGA();                   
        trackPageView(window.location.pathname); 
    }, []);

    return (
        <div className="font-sans">
            <HookQuote />
            <CourseOverview />
            <Hero />
            <Benefits />
            <FreeBonus />
            <CTA />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default App
