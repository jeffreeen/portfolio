import styled from "styled-components"
import { Theme } from "../../../styles/Theme"

const StyledMyProjects = styled.section`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    margin-top: 214px;
`

const GridContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(auto, 370px));
    grid-template-rows: repeat(2, 1fr);
    width:100%;
    row-gap: 50px;
    column-gap: calc((100vw - 320px)/(1600 - 320)*(32 - 10) + 10px);
    justify-content: center;
    margin: 0 auto;

    @media screen and (min-width: 1601px) {
                    column-gap:32px;
`

const StyledDescription = styled.p`
    font-family: "Poppins";
    font-weight: 400;
    font-size: calc((100vw - 320px)/(1600 - 320)*(38 - 16) + 16px);
    line-height: 81%;
    text-align: center;
    color: ${Theme.colors.colorGrey};
    margin-bottom: 113px;
`

export const S = {
    StyledMyProjects,
    GridContainer,
    StyledDescription
}