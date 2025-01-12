import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Menu } from "../../components/menu/menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header `
    max-width:1193px;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`
