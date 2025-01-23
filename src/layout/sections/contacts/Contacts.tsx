import { FlexContainer } from "../../../components/FlexContainer";
import { TitleSection } from "../../../components/TitleSection";
import { Socials } from "../../../components/socials/Socials";
import { Container } from "../../../components/Container";
import { IconLogo } from "../../../components/icon/IconLogo";
import { CS } from "./Contacts_Styles";

export const Contacts:React.FC = () => {
    return (
        <CS.StyledContacts>
            <Container>
                <FlexContainer direction="column" align="center" justify="center">
                    <TitleSection size="55" marginBottom='9px'>For any questions please mail me:</TitleSection>
                    <CS.StyledMailLink href="mailto:zdrobotovjeffren@mail.ru">zdrobotovjeffren@mail.ru</CS.StyledMailLink>
                    <FlexContainer align="center" justify="space-between">
                        <IconLogo iconId={'logo'}/>
                        <FlexContainer align="center" justify="flex-end"  wrap="wrap">
                            <CS.StyledContactLink href="tel:+911234509876">+91 12345 09876</CS.StyledContactLink>
                            <CS.StyledContactLink href="mailto:info@example.com">info@example.com</CS.StyledContactLink>
                            <Socials/>
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>  
            </Container>
        </CS.StyledContacts>
        
    );
};


