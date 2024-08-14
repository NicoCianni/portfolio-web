import "./TextCarrusel.css"
import { motion } from "framer-motion"


export function TextCarrusel () {

    return (
        <>
        <motion.h1 
            initial = {{x : 200, opacity: 0 }}
            whileInView = {{ x: 0, opacity: 1 }}
            transition = {{duration : 1.5}}
            className="txt-carrusel-h1">
            Hello there, my name is Nicolás Cianni !
        </motion.h1>
        <motion.h2
            initial = {{x : 200, opacity: 0 }}
            whileInView = {{ x: 0, opacity: 1 }}
            transition = {{duration : 1.5}}
            className="txt-carrusel-h2">
            <strong>I'm Front End Developer</strong>
        </motion.h2>
        <motion.button 
            initial = {{ opacity: 0 }}
            whileInView = {{ opacity: 1 }}
            transition = {{ duration : 6 }}
            className="txt-carrusel-button">Download CV ⬇
        </motion.button>
        </>
    )
}