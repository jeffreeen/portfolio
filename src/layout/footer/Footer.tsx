import styled from "styled-components";
import { FlexContainer } from "../../components/FlexContainer";
import { Navigation } from "../../components/navigation/Navigation";
import { Container } from "../../components/Container";
import { Theme } from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexContainer align="center" justify="space-between">
                    <Navigation/>
                    <Copiright>Designed and built by <StyledGradient>Pavan MG</StyledGradient> with <StyledGradient>Love</StyledGradient> & <StyledGradient>Coffee</StyledGradient></Copiright>
                </FlexContainer>
            </Container>
        </StyledFooter>
      
    );
};

const StyledFooter = styled.footer `
    width:100%;
    padding-top:40px;
    padding-bottom:40px;
    border-top: 1px solid #42446E;
`

const Copiright = styled.small `
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    text-align: center;
    color: ${Theme.colors.colorGrey};

`

const StyledGradient = styled.mark `
    background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    color: transparent;
    background-clip: text;
`