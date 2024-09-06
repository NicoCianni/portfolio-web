import "./App.css"
import { GlobalNav } from "./GlobalNav"
import { GlobalHero } from "./GlobalHeroSection"
import { GlobalSkill } from "./GlobalSkillSection"
import { FooterLinks } from "./FooterLinks"



function App () {
    return (
        <>
        <GlobalNav />
        <>
        <GlobalHero />
        <GlobalSkill />
        </>
        <FooterLinks />
        </>
    )
}

export default App
