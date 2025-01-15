import styled from "styled-components"
import { FlexContainer } from "../FlexContainer"
import { IconLogo } from "../icon/iconLogo"
import { Theme } from "../../styles/Theme"


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
                <StyledListStacks>Tech Stack : <span>{props.stack || 'stack undefined'}</span></StyledListStacks>
                <FlexContainer justify="space-between" align="start">
                    <FlexContainer justify="center" align="center">
                        <IconLogo iconId={'iconLinkChain'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>
                        <StyledProjectLink href={props.linkLivePreview || 'undefined'}>Live Preview</StyledProjectLink>
                    </FlexContainer>
                    <FlexContainer justify="center" align="center">
                        <IconLogo iconId={'gitSmall'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>
                        <StyledProjectLink href={props.linkViewCode || 'undefined'}>View Code</StyledProjectLink>
                    </FlexContainer> 
                </FlexContainer>
            </FlexContainer>
        </StyledProject>
    );
};

const StyledProject = styled.div `
    max-width: 30%;
    background: #363636;
    border-radius: 20px;

`

const StyledProjectDescription = styled.p `
    font-weight: 300;
    font-size: 18px;
    line-height: 144%;
    color: #ccc;
    text-align: start;
    margin-bottom: 12px;
`

const StyledListStacks = styled.span `
    font-weight: 400;
    font-size: 16px;
    line-height: 162%;
    color: ${Theme.colors.colorTitle};
    text-align: start;
    margin-bottom: 21px;

    span {
        font-weight: 300;
        font-size: 14px;
    }
`

const StyledTitle = styled.h3 `
    font-weight: 500;
    font-size: 28px;
    line-height: 93%;
    text-align: center;
    color: ${Theme.colors.colorTitle};
    margin-bottom: 17px;
`
const StyledLinkImage = styled.img `
    width:100%;
`

const StyledProjectLink = styled.a `
    font-weight: 400;
    font-size: 16px;
    line-height: 162%;
    text-decoration-skip-ink: none;
    color: ${Theme.colors.colorWhiteLink};
    text-decoration: underline;
    margin-left: 12px;
    margin-right:20px;
`