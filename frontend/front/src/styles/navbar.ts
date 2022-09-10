import { background } from "@chakra-ui/styled-system"
import { css } from "@emotion/react"

export const navbarStyle = {
    navbarWrapper:css({
        background:"rgba(233, 250, 0, .5)",
        height:"45px",
        width:"100%",
        position:"fixed", 
        zIndex:"100", 
        opacity:"1"}),

    brandLogo:css({
        padding:"40px 40px",
    })
}

