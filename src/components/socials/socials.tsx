import { IconLogo } from "../icon/iconLogo";
import { S } from "./socials_Styles";

const socialsData = [
    {
        iconId:'gitLogo',
        width:'30',
        height:"30",
        viewBox:"0 0 30 30",
        href: 'https://github.com/jeffreeen'
    },
    {
        iconId:'twitterLogo',
        width:'31',
        height:"31",
        viewBox:"0 0 31 31",
        href: 'https://github.com/jeffreeen'
    },
    {
        iconId:'linkLogo',
        width:'30',
        height:"30",
        viewBox:"0 0 30 30",
        href: 'https://github.com/jeffreeen'
    }
]

export const Socials = () => {
    return (  
        <nav>
        <S.StyledSocials>
            {socialsData.map((s)=> {
                return <li>
                            <a href={s.href}>
                                <IconLogo iconId={s.iconId} width={s.width} height={s.height} viewBox={s.viewBox}/>
                            </a>
                        </li>
            })}
        </S.StyledSocials>
    </nav>  
    );
};

