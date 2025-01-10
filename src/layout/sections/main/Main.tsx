import styled from "styled-components";
import photo from '../../../../src/assets/images/MyPhoto.jpg'
import { FlexContainer } from "../../../components/FlexContainer";

export const Main = () => {
    return (
        <StyledMain>
            <FlexContainer justify={"space-between"} align={"center"}>
                <p>Hi 👋, My name is Pavan MG I build things for web</p>
                <PhotoMain src={photo}>

                </PhotoMain>
            </FlexContainer>
        </StyledMain>
    );
};


const StyledMain = styled.div `
    width: 100%;
    background-color: grey;
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
