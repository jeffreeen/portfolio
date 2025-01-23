import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexContainer } from "../../components/FlexContainer";

const StyledHeader = styled.header`
    width: 100%;
    font-family: DM Sans;
    font-size: 20px;
    font-weight: 500;
    margin-top:41px;

    ${Container} {
        ${FlexContainer} {
            @media screen and (max-width: 576px) {
            flex-direction: column;
            align-items: center;
        }  
        } 
    }

    @media screen and (max-width: 1200px) {
        margin-top: 10px;
        } 

   
`

export const H = {
    StyledHeader
}