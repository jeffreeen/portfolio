import styled from "styled-components";
import { FlexContainer } from "../../components/FlexContainer";
import { Navigation } from "../../components/navigation/Navigation";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexContainer align="center" justify="space-between">
                <Navigation/>
                <Copiright>Designed and built by <StyledGradient>Pavan MG</StyledGradient> with <StyledGradient>Love</StyledGradient> & <StyledGradient>Coffee</StyledGradient></Copiright>
            </FlexContainer>
        </StyledFooter>
      
    );
};

const StyledFooter = styled.footer `
    max-width:1193px;
    width:100%;
    border-top: 1px solid #42446E;
`

const Copiright = styled.small `
    display: flex;
    align-items: space-between;
    justify-content: center;
    margin-left: auto;
`

const StyledGradient = styled.p `
    background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    color: transparent;
    background-clip: text;
`