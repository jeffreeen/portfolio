import styled from "styled-components";

type TitlePropsType = {
    size?: string
    marginBottom?: string
}

export const TitleSection = styled.h2<TitlePropsType> `
    font-family: Poppins;
    font-size: calc((100vw - 320px)/(1600 - 320)*(${props => props.size || '48'} - 20) + 20px);
    font-weight: 700;
    text-align: center;
    margin-bottom: ${props => props.marginBottom || '49px'};
`

