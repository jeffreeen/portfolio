import styled from "styled-components";
import { Socials } from "../socials/socials";

export const Menu = () => {
    return (  
    <StyledMenu>
        <ul>
            <li><a href=""></a>Home</li>
            <li><a href=""></a>About</li>
            <li><a href=""></a>Tech Stack</li>
            <li><a href=""></a>Projects</li>
            <li><a href=""></a>Contact</li>
        </ul>
        <Socials/>
    </StyledMenu>
    );
};

const StyledMenu = styled.nav `
display: flex;
ul {
    display:flex;
    align-items: center;
    gap: 50px;

}
`