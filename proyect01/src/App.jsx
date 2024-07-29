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
            <nav className="nav-global" id="hero">
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
            <section className="skills-section" id="skills">
                <div className="skills-div">
                    <Aptitudes />
                    <Bars />
                </div>
                <h2 className="h2-title" id="moreinfo">Previous Experience and Studies</h2>
                <div>
                    <PreviousExp />
                </div>
            </section>
            <footer className="footer">
                <a href="https://www.instagram.com/">
                    Instagram
                    <img src="https://th.bing.com/th/id/R.950464fcbb88221fba2d72bd8e997118?rik=8t0QSyLs40dupQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2finstagram-logo-eps-png-instagram-logo-1784.png&ehk=ZLn0UdAH6aoX9f2NvarOxzeDX5DAdAIpqOa%2f2s65Y7I%3d&risl=&pid=ImgRaw&r=0"/>
                </a>
                <a href="https://www.linkedin.com/in/nicolas-ariel-cianni-970298248/">
                    LinkedIn
                    <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG24.png"/>
                </a>
                <a href="https://github.com/NicoCianni">
                    GitHub
                    <img src="https://pngimg.com/uploads/github/github_PNG22.png"/>
                </a>
                <a href="https://mail.google.com/mail/u/0/#inbox">Gmail
                    <img src="https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png"/>
                </a>
            </footer>
            </>
        </>
        
    )
}
// Hacer un carrusel con los logos de las tecnos aprendidas, y un texto para acompañar a cada una - (Se podria agregar una imagen gradiente de fondo para que quede mejor)
export default App
