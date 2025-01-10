import { IconLogo } from "../icon/IconLogo";

export const Socials = () => {
    return (  
        <nav>
        <ul>
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
        </ul>
    </nav>  
    );
};