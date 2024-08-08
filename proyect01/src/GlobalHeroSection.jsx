import  SliderCarrusel from "./SliderCarrusel"
import { TextCarrusel } from "./TextCarrusel"
import "./GlobalHeroSection.css"

export function GlobalHero () {
    return (
        <section className="hero-section">
            <img className="hero-img" src="../new-Photo.jpg"/>
                <div className="carrusel">
                    <TextCarrusel />
                    <SliderCarrusel />
                </div>
        </section>
    )
}