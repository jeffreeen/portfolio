import styled from "styled-components"
import { Container } from "../../../components/Container"
import { FlexContainer } from "../../../components/FlexContainer"

const StyledContacts = styled.section `
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 178px;
    margin-bottom:42px;

    > ${Container} {
       > ${FlexContainer} {
           > ${FlexContainer} {
                width:100%;

                @media screen and (max-width: 576px) {
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    ${FlexContainer} {
                     flex-direction: column;
                    justify-content: center;
                    align-items: center;}
                    }
        }
    }
`

const StyledMailLink = styled.a `
    background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    color: transparent;
    background-clip: text;
    font-family: DM Sans;
    font-size: calc((100vw - 320px)/(1600 - 320)*(58 - 28) + 28px);
    font-weight: 700;
    letter-spacing: -1px;
    text-align: center;
    margin-bottom: 211px;
`
const StyledContactLink = styled.a `
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    margin-left: 33px;

     @media screen and (max-width: 576px) {
     margin-left: 0;
     }
    
`

export const CS = {
    StyledContacts,
    StyledMailLink,
    StyledContactLink
}