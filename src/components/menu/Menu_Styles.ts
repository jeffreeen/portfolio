import styled from "styled-components";

const StyledMenu = styled.nav `
display: flex;
flex-wrap: wrap;
ul {
    display:flex;
    align-items: center;
}

@media screen and (max-width: 576px) {
        flex-direction: column;
        align-items: center;
        } 
`

export const M = {
    StyledMenu
}