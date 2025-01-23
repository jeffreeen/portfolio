import { FlexContainer } from "../FlexContainer"
import { IconLogo } from "../icon/IconLogo"
import { PS } from "./Project_Styles"


type ProjectPropsType = {
    linkImage?: string
    title?: string
    description?: string
    stack?: string
    linkLivePreview?: string
    linkViewCode?: string
}

export const Project = (props:ProjectPropsType) => {
    return (  
        <PS.StyledProject>
            <PS.StyledLinkImage src={props.linkImage} alt="backgroundProject" />
            <FlexContainer direction="column">
                <PS.StyledTitle>{props.title || 'title undefined'}</PS.StyledTitle>
                <PS.StyledProjectDescription>{props.description || 'description undefined'}</PS.StyledProjectDescription>
                <PS.StyledListStacks>Tech Stack : <span>{props.stack || 'stack undefined'}</span></PS.StyledListStacks>
                <FlexContainer justify="space-between" align="start">
                    <FlexContainer justify="center" >
                        <IconLogo iconId={'iconLinkChain'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>
                        <PS.StyledProjectLink href={props.linkLivePreview || 'undefined'}>Live Preview</PS.StyledProjectLink>
                    </FlexContainer>
                    <FlexContainer justify="center" >
                        <IconLogo iconId={'gitSmall'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>
                        <PS.StyledProjectLink href={props.linkViewCode || 'undefined'}>View Code</PS.StyledProjectLink>
                    </FlexContainer> 
                </FlexContainer>
            </FlexContainer>
        </PS.StyledProject>
    );
};

