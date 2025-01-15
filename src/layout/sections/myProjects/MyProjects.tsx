import { FlexContainer } from "../../../components/FlexContainer";
import { Project } from "../../../components/project/Project";
import Rectangle18 from '../../../assets/images/Rectangle18.png'
import Rectangle16 from '../../../assets/images/Rectangle16.png'
import Rectangle8 from '../../../assets/images/Rectangle8.png'
import Rectangle24 from '../../../assets/images/Rectangle24.png'
import Rectangle23 from '../../../assets/images/Rectangle23.png'
import Rectangle22 from '../../../assets/images/Rectangle22.png'
import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { Theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";


export const MyProjects = () => {
    return (
        <StyledMyProjects>
            <Container>
                <FlexContainer align="center" justify="center" direction="column">
                    <TitleSection>Projects</TitleSection>
                    <StyledDescription>Things I’ve built so far</StyledDescription>
                    <FlexContainer wrap="wrap" justify="space-between" gap="65px 45px">
                        <Project linkImage={Rectangle18}
                            title={'Project Tile goes here'}
                            description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                            stack={'HTML , JavaScript, SASS, React'} />
                        <Project linkImage={Rectangle16}
                            title={'Project Tile goes here'}
                            description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                            stack={'HTML , JavaScript, SASS, React'} />
                        <Project linkImage={Rectangle8}
                            title={'Project Tile goes here'}
                            description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                            stack={'HTML , JavaScript, SASS, React'} />
                        <Project linkImage={Rectangle24}
                            title={'Project Tile goes here'}
                            description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                            stack={'HTML , JavaScript, SASS, React'} />
                        <Project linkImage={Rectangle23}
                            title={'Project Tile goes here'}
                            description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                            stack={'HTML , JavaScript, SASS, React'} />
                        <Project linkImage={Rectangle22}
                            title={'Project Tile goes here'}
                            description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                            stack={'HTML , JavaScript, SASS, React'} />
                    </FlexContainer>
                </FlexContainer>
            </Container>
        </StyledMyProjects>
    );
};

const StyledMyProjects = styled.section`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    margin-top: 214px;
`

const StyledDescription = styled.p`
    font-family: "Poppins";
    font-weight: 400;
    font-size: 32px;
    line-height: 81%;
    text-align: center;
    color: ${Theme.colors.colorGrey};
    margin-bottom: 113px;
`
