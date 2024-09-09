import  SliderCarrusel from "./SliderCarrusel"
import { TextCarrusel } from "./TextCarrusel"
import { motion } from "framer-motion"
import "./GlobalHeroSection.css"

export function GlobalHero () {
    return (
        <section className="hero-section">
            <motion.img 
            className="hero-img" 
            src="../public/newPhoto.jpg"
            initial = {{x : -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{duration : 1.5}}
            />
                <div className="carrusel">
                    <TextCarrusel />
                    <SliderCarrusel />
                </div>
        </section>
    )
}