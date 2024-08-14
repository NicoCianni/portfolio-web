import "./IntroduceText.css"
import { motion } from "framer-motion"

export function IntroduceText (){
    return (
        <motion.h1 
        className="int-text-name"
        initial = {{ opacity: 0, x: -100 }}
        whileInView = {{ opacity: 1, x: 0}}
        transition = {{ duration: 2 }}
        >
            <strong>Nicolás Cianni / Front-End Dev</strong>
        </motion.h1>
    )
}