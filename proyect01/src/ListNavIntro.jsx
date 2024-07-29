import "./ListNavIntro.css"
import React from "react"

export function ListNavIntro ( {page, links} ){
    return (
        <li className="li-nav">
            <a href={links.find(link => link.text === page.title).href}>{page.title}</a>
        </li>
    )
}