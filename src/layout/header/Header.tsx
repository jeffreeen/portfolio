import styled from "styled-components";
import { Menu } from "../../components/menu/menu";
import { Container } from "../../components/Container";
import { FlexContainer } from "../../components/FlexContainer";
import LogoGradient from '../../assets/images/logo 1.png'

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer wrap="wrap" align="center" justify="space-between">
                    <img src={LogoGradient} alt="logo" />
                    <Menu />
                </FlexContainer>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    width: 100%;
    font-family: DM Sans;
    font-size: 20px;
    font-weight: 500;
    margin-top:41px;

    > div {
        > div {
            @media screen and (max-width: 576px) {
            flex-direction: column;
            align-items: center;
        }  
        } 
    }

    @media screen and (max-width: 1200px) {
        margin-top: 10px;
        } 

   
`
