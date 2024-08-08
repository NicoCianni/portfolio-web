import "./App.css"
import { GlobalNav } from "./GlobalNav"
import { GlobalHero } from "./GlobalHeroSection"
import { Aptitudes } from "./SkillsAptitudes"
import { Bars } from "./BarsChart"
import { PreviousExp } from "./PreviousExp"
import { FooterLinks } from "./FooterLinks"
import { motion } from "framer-motion"


function App () {
    return (
        <>
        <GlobalNav />
        <>
        <GlobalHero />
            <section className="skills-section" id="skills">
                <motion.div className="skills-div">
                    <Aptitudes />
                    <Bars />
                </motion.div>
                <h2 className="h2-title" id="moreinfo">Previous Experience and Studies</h2>
                <motion.div>
                    <PreviousExp />
                </motion.div>
            </section>
            </>
            <FooterLinks />
        </>
    )
}

export default App
