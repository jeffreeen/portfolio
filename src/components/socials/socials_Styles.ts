import styled from "styled-components"

const StyledSocials = styled.ul `
    display: flex;
    margin-left:51px;
    gap: 20px;

    @media screen and (max-width: 576px) {
        margin-left:0;
        } 
`

const StyledSocialItem= styled.li `
    &:hover {
        transform: scale(1.1);
    }
`

export const S = {
    StyledSocials,
    StyledSocialItem
}