import styled from "styled-components";
import photo from '../../../../src/assets/images/MyPhoto.jpg'
import { FlexContainer } from "../../../components/FlexContainer";
import { Theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexContainer direction="row" justify={"space-between"} align={"center"} >
                <FlexContainer direction={"column"} align={"flex-start"}>
                    <StyledSpan>Hi 👋,</StyledSpan>
                    <StyledSpan>My name is</StyledSpan>
                    <StyledSpan><StyledSpanGradient>Pavan MG</StyledSpanGradient></StyledSpan>
                    <StyledSpan>I build things for web</StyledSpan>
                </FlexContainer>
                <PhotoMain src={photo}/>
            </FlexContainer>
            </Container>
        </StyledMain>
    );
};



const StyledMain = styled.section `
    min-height:100vh;
    max-width:1193px;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
`;
const PhotoMain = styled.img `
    width: 349px;
    height: 349px;
    margin: 140px 100px 139px 100px;
    object-fit: cover;
    top: 19px;
    left: 834px;
    border-radius: 230px;
    border: 9px solid transparent;
    background-image: linear-gradient(180deg, #E70FAA -9px, #00C0FD 100%);
`
const StyledSpan = styled.span `
    font-family : "Poppins";
    font-weight: bold;
    font-size: 58px;
    color: ${Theme.colors.colorWhite};
    leter-spacing: -1px;
    line-height: 70px;
    

`
const StyledSpanGradient = styled.span `
    background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    color: transparent;
    background-clip: text;
`


