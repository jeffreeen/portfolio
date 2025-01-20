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

     
    @media screen and (max-width: 1200px) {
        margin: 0;
        } 

    svg {
    position:absolute;
    transform: translate(-20%, 0%);
    z-index: -1;
        
        @media screen and (max-width: 1200px) {
        display:none;
        } 
    }

`
   



const StyledMain = styled.section `
    width:100%;
    max-width:1193px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

     > div {
        width:100%;
        > div {
            height: 100%;
            width:100%;
            
            @media screen and (max-width: 576px) {
                justify-content: center;
        } 
        }
    }
`
const PhotoMain = styled.img `
    max-width: 357px;
    max-height: 357px;
    padding: 9px;
    object-fit: cover;
    border-radius: 50%;

    @media screen and (max-width: 782px) {
        max-width: 257px;
        max-height: 257px;
        } 
`
const StyledSpan = styled.span `
    font-family : "Poppins";
    font-weight: bold;
    font-size: calc((100vw - 320px)/(1600 - 320)*(58 - 28) + 28px);
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


