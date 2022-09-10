/**@jsxImportSource @emotion/react */
import { navbarStyle as style } from "../../styles/navbar"
import { jsx, css } from "@emotion/react"

export const Navbar = () => {
    return (
    <nav css={ style.navbarWrapper }>
        <a css={ style.brandLogo }>CovidWatch</a>
    </nav>
    )
}