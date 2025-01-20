import styled from "styled-components";
import { IconLogo } from "../icon/iconLogo";

export const Socials = () => {
    return (  
        <nav>
        <StyledSocials>
            <li>
                <a href="">
                    <IconLogo iconId={'gitLogo'} width={'30'} height={"30"} viewBox={"0 0 30 30"}/>
                </a>
            </li>
            <li>
                <a href="">
                    <IconLogo iconId={'twitterLogo'} width={'31'} height={"31"} viewBox={"0 0 31 31"}/>
                </a>
            </li>
            <li>
                <a href="">
                    <IconLogo iconId={'linkLogo'} width={'30'} height={"30"} viewBox={"0 0 30 30"}/>
                </a>
            </li>
        </StyledSocials>
    </nav>  
    );
};

const StyledSocials = styled.ul `
    display: flex;
    margin-left:51px;
    gap: 20px;

    @media screen and (max-width: 576px) {
        margin-left:0;
        } 
`