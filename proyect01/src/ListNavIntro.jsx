import "./ListNavIntro.css"

export function ListNavIntro ( {page} ){
    return (
        <li className="li-nav">
            {page.title}
        </li>
    )
}