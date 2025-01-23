import { IconLogo } from '../../../components/icon/IconLogo'
import { TitleSection } from '../../../components/TitleSection';
import { Container } from '../../../components/Container';
import { MS } from './MyStacks_Styles';

const dataStacks = [
    {
        iconId:'iconHtml', 
        width:'120px',
        height:'120px',
        viewBox:'0 0 120 120'
    },
    {
        iconId:'iconCss', 
        width:'120px',
        height:'119px',
        viewBox:'0 0 120 119'
    },
    {
        iconId:'iconJs', 
        width:'120px',
        height:'120px',
        viewBox:'0 0 120 120'
    },
    {
        iconId:'iconReact', 
        width:'113px',
        height:'101px',
        viewBox:'0 0 113 101'
    },
    {
        iconId:'iconHex', 
        width:'105px',
        height:'100px',
        viewBox:'0 0 105 100'
    },
    {
        iconId:'iconBootstrap', 
        width:'88px',
        height:'87px',
        viewBox:'0 0 88 87'
    },
    {
        iconId:'iconTailwind', 
        width:'131px',
        height:'131px',
        viewBox:'0 0 131 131'
    },
    {
        iconId:'iconSass', 
        width:'117px',
        height:'87px',
        viewBox:'0 0 117 87'
    },
    {
        iconId:'iconGit', 
        width:'105px',
        height:'105px',
        viewBox:'0 0 105 105'
    },
    {
        iconId:'iconGreensock', 
        width:'120px',
        height:'120px',
        viewBox:'0 0 120 120'
    },
    {
        iconId:'iconVsCode', 
        width:'112px',
        height:'112px',
        viewBox:'0 0 112 112'
    },
    {
        iconId:'iconGithub', 
        width:'88px',
        height:'88px',
        viewBox:'0 0 88 88'
    }
]

export const MyStacks: React.FC = () => {
    return (
        <MS.StyledMyStacks>
            <Container>
                <TitleSection>My Tech Stack</TitleSection>
                <MS.StyledDescription> Technologies I’ve been working with recently</MS.StyledDescription>
                <MS.GridContainer>
                    {dataStacks.map((s, index)=>{
                        return <IconLogo key={index} iconId={s.iconId} width={s.width} height={s.height} viewBox={s.viewBox} />
                    })}
                </MS.GridContainer>
            </Container>
        </MS.StyledMyStacks>
    );
};
