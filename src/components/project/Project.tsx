import styled from "styled-components"
import { FlexContainer } from "../FlexContainer"
import { IconLogo } from "../icon/iconLogo"


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
        <StyledProject>
            <StyledLinkImage src={props.linkImage} alt="backgroundProject" />
            <FlexContainer direction="column">
                <h3>{props.title || 'title undefined'}</h3>
                <p>{props.description || 'description undefined'}</p>
                <span>Tech Stack:{props.stack || 'stack undefined'}</span>
                <FlexContainer>
                    <FlexContainer>
                        <IconLogo iconId={'iconLinkChain'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>
                        <a href={props.linkLivePreview || 'undefined'}>Live Preview</a>
                    </FlexContainer>
                    <FlexContainer>
                        <IconLogo iconId={'iconGithub'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>
                        <a href={props.linkViewCode || 'undefined'}>View Code</a>
                    </FlexContainer> 
                </FlexContainer>
            </FlexContainer>
        </StyledProject>
    );
};

const StyledProject = styled.div `
    max-width: 30%;
    max-height: 567px;
`

const StyledLinkImage = styled.img `
    width:100%;
`