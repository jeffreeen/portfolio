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
            <FlexContainer direction="column" padding="20px">
                <StyledTitle>{props.title || 'title undefined'}</StyledTitle>
                <StyledProjectDescription>{props.description || 'description undefined'}</StyledProjectDescription>
                <span>Tech Stack:{props.stack || 'stack undefined'}</span>
                <FlexContainer>
                    <FlexContainer>
                        <IconLogo iconId={'iconLinkChain'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>
                        <a href={props.linkLivePreview || 'undefined'}>Live Preview</a>
                    </FlexContainer>
                    <FlexContainer>
                        <IconLogo iconId={'gitSmall'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>
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
    background: #363636;
    border-radius: 20px;

`

const StyledProjectDescription = styled.p `
    font-family: 'Poppins';
    font-weight: 300;
    font-size: 18px;
    line-height: 144%;
    color: #ccc;
    text-align: start;
    margin-bottom: 12px;
`

const StyledTitle = styled.h3 `
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 28px;
    line-height: 93%;
    text-align: center;
    color: #ccc;
    margin-bottom: 17px;
`
const StyledLinkImage = styled.img `
    width:100%;
`