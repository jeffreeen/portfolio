import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Navigation = () => {
    return (  
        <StyledNavigation>
            <li><StyledLinkText href="/">Home</StyledLinkText></li>
            <li><StyledLinkText href="/">About</StyledLinkText></li>
            <li><StyledLinkText href="/">Tech Stack</StyledLinkText></li>
            <li><StyledLinkText href="/">Projects</StyledLinkText></li>
            <li><StyledLinkText href="/">Contact</StyledLinkText></li>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.ul `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px;

    li {
        &:hover {
    transform: scale(1.1);

        a{
            color: blue;
        }
    }
    }
    
    @media screen and (max-width: 1200px) {
        gap: 10px;
        } 
`

const StyledLinkText = styled.a `
    font-family:'DM Sans';
    font-weight: 500;
    font-size: calc((100vw - 320px)/(1600 - 320)*(20 - 16) + 16px);;
    line-height: 130%;
    text-align: center;
    color: ${Theme.colors.colorGrey};
`