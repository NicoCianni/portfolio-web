import "./GlobalSkillSection.css"
import { Bars } from "./BarsChart"
import { Aptitudes } from "./SkillsAptitudes"
import { PreviousExp } from "./PreviousExp"
import { motion } from "framer-motion"


export function GlobalSkill () {
    return (
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
    )
}