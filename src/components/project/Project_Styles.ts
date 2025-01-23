import styled from "styled-components"
import { FlexContainer } from "../FlexContainer"
import { Theme } from "../../styles/Theme"

const StyledProject = styled.div `
    background: #363636;
    border-radius: 20px;

    > ${FlexContainer} {
        padding: 20px;
    }

    &:hover {
        transform: scale(1.1);
    }

`

const StyledProjectDescription = styled.p `
    font-weight: 300;
    font-size: calc((100vw - 320px)/(1600 - 320)*(18 - 16) + 16px);;
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
    font-size: calc((100vw - 320px)/(1600 - 320)*(28 - 18) + 18px);;
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
    margin-bottom: 25px;
`

export const PS = {
    StyledProject,
    StyledProjectDescription,
    StyledListStacks,
    StyledTitle,
    StyledLinkImage,
    StyledProjectLink
}