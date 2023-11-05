import { createGlobalStyle } from "styled-components";
import  colors from "./styles"

const StyledGlobalStyle = createGlobalStyle`
    body{
        background-color: ${colors.primary};
    }
`

function GlobalStyle(){
    return(
        <StyledGlobalStyle />
    )
}

export default GlobalStyle