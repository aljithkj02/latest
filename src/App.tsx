import Benefits from "./components/Benefits"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import FreeBonus from "./components/FreeBonus"
import Hero from "./components/Hero"
import HookQuote from "./components/HookQuote"
import Testimonials from "./components/Testimonials"


function App() {

    return (
        <div className="font-sans">
            <Hero />
            <Benefits />
            <FreeBonus />
            <HookQuote />
            <CTA />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default App
