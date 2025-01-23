import styled from "styled-components"
import { Theme } from "../../../styles/Theme"

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

export const MS = {
    GridContainer,
    StyledDescription,
    StyledMyStacks
}