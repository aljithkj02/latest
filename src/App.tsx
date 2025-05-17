import Benefits from "./components/Benefits"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import HookQuote from "./components/HookQuote"
import Testimonials from "./components/Testimonials"


function App() {

    return (
        <div className="font-sans">
            <Hero />
            <Benefits />
            <HookQuote />
            <CTA />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default App
