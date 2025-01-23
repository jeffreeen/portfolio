import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexContainer } from "../../components/FlexContainer";
import LogoGradient from '../../assets/images/logo 1.png'
import { H } from "./Header_Styles";

export const Header:React.FC = () => {
    return (
        <H.StyledHeader>
            <Container>
                <FlexContainer wrap="wrap" align="center" justify="space-between">
                    <img src={LogoGradient} alt="logoGradient" />
                    <Menu />
                </FlexContainer>
            </Container>
        </H.StyledHeader>
    );
};


