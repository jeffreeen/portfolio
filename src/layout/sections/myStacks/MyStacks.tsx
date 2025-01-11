import { FlexContainer } from '../../../components/FlexContainer';
import { IconLogo } from '../../../components/icon/iconLogo'

export const MyStacks = () => {
    return (  
        <div>
            <h2>My Tech Stack</h2>
            <p> Technologies I’ve been working with recently</p>
            <FlexContainer>
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

        </div>
    );
};