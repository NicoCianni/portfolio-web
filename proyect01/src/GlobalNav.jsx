import { IntroduceText } from "./IntroduceText"
import { NavIntro } from "./NavIntro"
import { motion } from "framer-motion"
import "./GlobalNav.css"


export function GlobalNav () {
    return (
        <motion.nav className="nav-global" id="hero">
            <IntroduceText />
            <NavIntro />
        </motion.nav>
    )

}