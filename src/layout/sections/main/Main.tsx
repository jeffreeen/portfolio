import photo from '../../../../src/assets/images/MyPhoto.jpg'
import { FlexContainer } from "../../../components/FlexContainer";
import { Container } from "../../../components/Container";
import { IconLogo } from "../../../components/icon/IconLogo";
import { M } from "./Main_Styles";

export const Main = () => {
    return (
        <M.StyledMain>
            <Container>
            <FlexContainer direction="row" justify={"space-between"} align={"center"} wrap={"wrap"} >
                <FlexContainer direction={"column"} align={"flex-start"} justify="center">
                    <M.StyledTitleMain>Frontend developer</M.StyledTitleMain>
                    <M.StyledSpan>Hi 👋,</M.StyledSpan>
                    <M.StyledSpan>My name is</M.StyledSpan>
                    <M.StyledSpan><M.StyledSpanGradient>Pavan MG</M.StyledSpanGradient></M.StyledSpan>
                    <M.StyledSpan>I build things for web</M.StyledSpan>
                </FlexContainer>
                <M.StyledWrapperPhoto>
                    <IconLogo iconId="abstractForPhoto" width="628px" height="628px" viewBox="0 0 628 628"/>
                    <M.PhotoMain src={photo}/>
                </M.StyledWrapperPhoto>
            </FlexContainer>
            </Container>
        </M.StyledMain>
    );
};




