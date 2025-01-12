import styled from "styled-components";

export const Navigation = () => {
    return (  
        <StyledNavigation>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Tech Stack</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.ul `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`