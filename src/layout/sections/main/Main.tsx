import styled from "styled-components";
import photo from '../../../../src/assets/images/MyPhoto.jpg'
import { FlexContainer } from "../../../components/FlexContainer";

export const Main = () => {
    return (
        <StyledMain>
            <FlexContainer direction="row" justify={"space-between"} align={"center"} >
                <FlexContainer direction={"column"} align={"flex-start"}>
                    <span>Hi 👋,</span>
                    <span>My name is</span>
                    <span>Pavan MG</span>
                    <h1>I build things for web</h1>
                </FlexContainer>
                <PhotoMain src={photo}/>
            </FlexContainer>
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
    object-fit: cover;
    top: 19px;
    left: 834px;
    border-radius: 230px;
    border: 9px solid transparent;
    background: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%);





`
