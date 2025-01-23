import { FlexContainer } from "../../components/FlexContainer";
import { Navigation } from "../../components/navigation/Navigation";
import { Container } from "../../components/Container";
import { FS } from "./Footer_Styles";

const navigationData = ['Home','About','Tech Stack','Projects','Contact']

export const Footer:React.FC = () => {
    return (
        <FS.StyledFooter>
            <Container>
                <FlexContainer align="center" justify="space-between" wrap="wrap">
                    <Navigation dataNavigation={navigationData}/>
                    <FS.Copiright>Designed and built by <FS.StyledGradient>Pavan MG</FS.StyledGradient> with <FS.StyledGradient>Love</FS.StyledGradient> & <FS.StyledGradient>Coffee</FS.StyledGradient></FS.Copiright>
                </FlexContainer>
            </Container>
        </FS.StyledFooter>
      
    );
};

