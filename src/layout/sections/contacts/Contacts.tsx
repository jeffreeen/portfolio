import styled from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";
import { TitleSection } from "../../../components/TitleSection";
import { Logo } from "../../../components/logo/logo";
import { Socials } from "../../../components/socials/socials";

export const Contacts = () => {
    return (
        <StyledContacts>
            <FlexContainer direction="column" align="center" justify="center">
            <TitleSection size="55px">For any questions please mail me:</TitleSection>
            <StyledMailLink href="mailto:zdrobotovjeffren@mail.ru">zdrobotovjeffren@mail.ru</StyledMailLink>
            <FlexContainer align="center" justify="space-between">
                <Logo/>
                <a href="tel:+911234509876">+91 12345 09876</a>
                <a href="mailto:info@example.com">info@example.com</a>
                <Socials/>
            </FlexContainer>
        </FlexContainer>  
        </StyledContacts>
        
    );
};

const StyledContacts = styled.section `
    max-width:1193px;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
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
`