import styled from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";
import { TitleSection } from "../../../components/TitleSection";
import { Socials } from "../../../components/socials/socials";
import { Container } from "../../../components/Container";
import { IconLogo } from "../../../components/icon/iconLogo";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexContainer direction="column" align="center" justify="center">
                    <TitleSection size="55px" marginBottom='9px'>For any questions please mail me:</TitleSection>
                    <StyledMailLink href="mailto:zdrobotovjeffren@mail.ru">zdrobotovjeffren@mail.ru</StyledMailLink>
                    <FlexContainer align="center" justify="space-between">
                        <IconLogo iconId={'logo'}/>
                        <FlexContainer align="center" justify="flex-end">
                            <StyledContactLink href="tel:+911234509876">+91 12345 09876</StyledContactLink>
                            <StyledContactLink href="mailto:info@example.com">info@example.com</StyledContactLink>
                            <Socials/>
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>  
            </Container>
        </StyledContacts>
        
    );
};

const StyledContacts = styled.section `
    width:100%;
    display: flex;
    flex-direction: column;;
    justify-content: center;
    margin-top: 178px;
    margin-bottom:42px;
`

const StyledMailLink = styled.a `
    background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    color: transparent;
    background-clip: text;
    font-family: DM Sans;
    font-size: 58px;
    font-weight: 700;
    letter-spacing: -1px;
    text-align: center;
    margin-bottom: 211px;
`
const StyledContactLink = styled.a `
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    margin-left: 33px;
`