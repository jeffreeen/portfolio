import styled from "styled-components"
import { Theme } from "../../styles/Theme"
import { Container } from "../../components/Container"

const StyledFooter = styled.footer `
    width:100%;   
    
    > ${Container} {
        border-top: 1px solid #42446E; 
        padding-top:40px;
        padding-bottom:40px;
    }
`

const Copiright = styled.small `
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    text-align: center;
    color: ${Theme.colors.colorGrey};

`

const StyledGradient = styled.mark `
    background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    color: transparent;
    background-clip: text;
`

export const FS = {
    StyledFooter,
    Copiright,
    StyledGradient
}