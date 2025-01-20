import styled from 'styled-components';
import { IconLogo } from '../../../components/icon/iconLogo'
import { TitleSection } from '../../../components/TitleSection';
import { Container } from '../../../components/Container';
import { Theme } from '../../../styles/Theme';

export const MyStacks = () => {
    return (
        <StyledMyStacks>
            <Container>
                <TitleSection>My Tech Stack</TitleSection>
                <StyledDescription> Technologies I’ve been working with recently</StyledDescription>
                <GridContainer>
                    <IconLogo iconId={'iconHtml'} width={'120px'} height={'120px'} viewBox={'0 0 120 120'} />
                    <IconLogo iconId={'iconCss'} width={'120px'} height={'119px'} viewBox={'0 0 120 119'} />
                    <IconLogo iconId={'iconJs'} width={'120px'} height={'120px'} viewBox={'0 0 120 120'} />
                    <IconLogo iconId={'iconReact'} width={'113px'} height={'101px'} viewBox={'0 0 113 101'} />
                    <IconLogo iconId={'iconHex'} width={'105px'} height={'100px'} viewBox={'0 0 105 100'} />
                    <IconLogo iconId={'iconBootstrap'} width={'88px'} height={'87px'} viewBox={'0 0 88 87'} />
                    <IconLogo iconId={'iconTailwind'} width={'131px'} height={'131px'} viewBox={'0 0 131 131'} />
                    <IconLogo iconId={'iconSass'} width={'117px'} height={'87px'} viewBox={'0 0 117 87'} />
                    <IconLogo iconId={'iconGit'} width={'105px'} height={'105px'} viewBox={'0 0 105 105'} />
                    <IconLogo iconId={'iconGreensock'} width={'120px'} height={'120px'} viewBox={'0 0 120 120'} />
                    <IconLogo iconId={'iconVsCode'} width={'112px'} height={'112px'} viewBox={'0 0 112 112'} />
                    <IconLogo iconId={'iconGithub'} width={'88px'} height={'88px'} viewBox={'0 0 88 88'} />
                </GridContainer>
            </Container>
        </StyledMyStacks>
    );
};

const GridContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(110px, auto));
    grid-template-rows: repeat(2, 1fr);
    row-gap: 100px;
    column-gap: 100px;
    justify-items: center;
`

const StyledDescription = styled.p`
    font-family: "Poppins";
    font-weight: 400;
    font-size: calc((100vw - 320px)/(1600 - 320)*(38 - 16) + 16px);
    line-height: 81%;
    text-align: center;
    color: ${Theme.colors.colorGrey};
    margin-bottom: 147px;
`

const StyledMyStacks = styled.section`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
`