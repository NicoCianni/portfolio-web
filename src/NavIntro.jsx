import React from "react";
import { ListNavIntro } from "./ListNavIntro"
import "./NavIntro.css"




export function NavIntro () {

    const links = [
        {id: 1, href: "#hero", text: "Home"},
        {id: 2, href: "#skills", text: "Skills"},
        {id: 3, href: "#moreinfo", text: "More Info"}
    ];

    const pages = [
        {title: "Home"},
        {title: "Skills"},
        {title: "More Info"}
    ];

    return (
        <ul className="ul-intro">
            {pages.map(page => (
                <ListNavIntro key={page.title} page={page} links={links}/>
            ))}
        </ul>
    )
}