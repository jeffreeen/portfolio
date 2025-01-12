import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';
import { IconLogo } from '../../../components/icon/iconLogo'
import { TitleSection } from '../../../components/TitleSection';

export const MyStacks = () => {
    return (  
        <StyledMyStacks>
            <TitleSection>My Tech Stack</TitleSection>
            <p> Technologies I’ve been working with recently</p>
            <FlexContainer wrap='wrap' justify='space-between' align='center'>
                <IconLogo iconId={'iconHtml'} width={'120px'} height={'120px'} viewBox={'0 0 120 120'}/>
                <IconLogo iconId={'iconCss'} width={'120px'} height={'119px'} viewBox={'0 0 120 119'}/>
                <IconLogo iconId={'iconJs'} width={'120px'} height={'120px'} viewBox={'0 0 120 120'}/>
                <IconLogo iconId={'iconReact'} width={'113px'} height={'101px'} viewBox={'0 0 113 101'}/>
                <IconLogo iconId={'iconHex'} width={'105px'} height={'100px'} viewBox={'0 0 105 100'}/>
                <IconLogo iconId={'iconBootstrap'} width={'88px'} height={'87px'} viewBox={'0 0 88 87'}/>
                <IconLogo iconId={'iconTailwind'} width={'131px'} height={'131px'} viewBox={'0 0 131 131'}/>
                <IconLogo iconId={'iconSass'} width={'117px'} height={'87px'} viewBox={'0 0 117 87'}/>
                <IconLogo iconId={'iconGit'} width={'105px'} height={'105px'} viewBox={'0 0 105 105'}/>
                <IconLogo iconId={'iconGreensock'} width={'120px'} height={'120px'} viewBox={'0 0 120 120'}/>
                <IconLogo iconId={'iconVsCode'} width={'112px'} height={'112px'} viewBox={'0 0 112 112'}/>
                <IconLogo iconId={'iconGithub'} width={'88px'} height={'88px'} viewBox={'0 0 88 88'}/>
            </FlexContainer>

        </StyledMyStacks>
    );
};

const StyledMyStacks = styled.section `
    max-width:1193px;
    width:100%;
    min-height:100vh;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
`