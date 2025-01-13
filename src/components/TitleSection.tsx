import styled from "styled-components";

type TitlePropsType = {
    size?: string
}

export const TitleSection = styled.h2<TitlePropsType> `
    font-family: Poppins;
    font-size: ${props => props.size || '48px'};
    font-weight: 700;
    text-align: center;
    margin-bottom: 49px;
`

