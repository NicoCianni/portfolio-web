import "./App.css"
import { IntroduceText } from "./IntroduceText"
import { NavIntro } from "./NavIntro"
import  SliderCarrusel from "./SliderCarrusel"
import { TextCarrusel } from "./TextCarrusel"
import { Aptitudes } from "./SkillsAptitudes"
import { Bars } from "./BarsChart"
import { PreviousExp } from "./PreviousExp"


function App () {
    return (
        <>
            <nav className="nav-global">
                <IntroduceText />
                <NavIntro />
            </nav>
            <>
            <section className="hero-section">
                <img className="hero-img" src="../new-Photo.jpg"/>
                <div className="carrusel">
                    <TextCarrusel />
                    <SliderCarrusel />
                </div>
            </section>
            <section className="skills-section">
                <div className="skills-div">
                    <Aptitudes />
                    <Bars />
                </div>
                <h2 className="h2-title">Previous Experience and Studies</h2>
                <div>
                    <PreviousExp />
                </div>
            </section>
            </>
        </>
        
    )
}
// Hacer un carrusel con los logos de las tecnos aprendidas, y un texto para acompañar a cada una - (Se podria agregar una imagen gradiente de fondo para que quede mejor)
export default App
