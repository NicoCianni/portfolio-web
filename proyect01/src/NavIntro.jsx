import { ListNavIntro } from "./ListNavIntro"
import "./NavIntro.css"

export function NavIntro () {
    return (
        <ul className="ul-intro">
            <ListNavIntro page={{ title: "HOME"}}/>
            <ListNavIntro page={{ title: "SKILLS"}}/>
            <ListNavIntro page={{ title: "MORE INFO"}}/>
        </ul>
    )
}