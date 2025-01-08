import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Menu } from "../../components/menu/menu";
import { Socials } from "../../components/socials/socials";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header `
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
