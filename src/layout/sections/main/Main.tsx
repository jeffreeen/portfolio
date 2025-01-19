import styled from "styled-components";
import photo from '../../../../src/assets/images/MyPhoto.jpg'
import { FlexContainer } from "../../../components/FlexContainer";
import { Theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { IconLogo } from "../../../components/icon/iconLogo";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexContainer direction="row" justify={"space-between"} align={"center"} wrap={"wrap"} >
                <FlexContainer direction={"column"} align={"flex-start"} justify="center">
                    <StyledTitleMain>Frontend developer</StyledTitleMain>
                    <StyledSpan>Hi 👋,</StyledSpan>
                    <StyledSpan>My name is</StyledSpan>
                    <StyledSpan><StyledSpanGradient>Pavan MG</StyledSpanGradient></StyledSpan>
                    <StyledSpan>I build things for web</StyledSpan>
                </FlexContainer>
                <StyledWrapperPhoto>
                    <IconLogo iconId="abstractForPhoto" width="628px" height="628px" viewBox="0 0 628 628"/>
                    <PhotoMain src={photo}/>
                </StyledWrapperPhoto>
            </FlexContainer>
            </Container>
        </StyledMain>
    );
};

const StyledWrapperPhoto = styled.div `
    margin: 140px 0px 139px 0px;
    background: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%);
    border-radius: 50%;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    position: relative;

    svg {
    position:absolute;
    transform: translate(-20%, 0%);
    z-index: -1;
    }

`
   



const StyledMain = styled.section `
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

     >div {
        >div {
            height: 100%;
        }
    }
`
const PhotoMain = styled.img `
    max-width: 357px;
    max-height: 357px;
    padding: 9px;
    object-fit: cover;
    border-radius: 50%;
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

const StyledTitleMain = styled.h1 `
    display: none;
`


