import styled from "styled-components";
import { Socials } from "../socials/socials";
import { Navigation } from "../navigation/Navigation";

export const Menu = () => {
    return (  
    <StyledMenu>
        <Navigation/>
        <Socials/>
    </StyledMenu>
    );
};

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