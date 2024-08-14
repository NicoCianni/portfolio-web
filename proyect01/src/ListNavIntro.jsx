import "./ListNavIntro.css"
import React from "react"
import { motion } from "framer-motion"

export function ListNavIntro ( {page, links} ){
    return (
        <motion.li 
        className="li-nav"
        initial = {{ opacity: 0, x: 100 }}
        whileInView = {{ opacity: 1, x: 0 }}
        transition= {{duration : 1.5}}
        whileHover={{ scale: 1.2, duration: 0.1 }}
        >
            <a href={links.find(link => link.text === page.title).href}>{page.title}</a>
        </motion.li>
    )
}