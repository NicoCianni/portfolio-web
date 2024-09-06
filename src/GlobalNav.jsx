import { IntroduceText } from "./IntroduceText"
import { NavIntro } from "./NavIntro"
import "./GlobalNav.css"


export function GlobalNav () {
    return (
        <nav className="nav-global" id="hero">
            <IntroduceText />
            <NavIntro />
        </nav>
    )

}