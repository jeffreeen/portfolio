import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Menu } from "../../components/menu/menu";
import { Container } from "../../components/Container";
import { FlexContainer } from "../../components/FlexContainer";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer wrap="wrap" align="center" justify="space-between">
                    <Logo />
                    <Menu />
                </FlexContainer>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left:0;
    right:0;
    z-index:99999;
    width: 100%;
    font-family: DM Sans;
    font-size: 20px;
    font-weight: 500;
    margin-top:41px;
`
