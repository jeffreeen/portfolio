import { IconLogo } from "../icon/IconLogo";
import { S } from "./Socials_Styles";

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
            {socialsData.map((s, index)=> {
                return <S.StyledSocialItem key={index}>
                            <a href={s.href}>
                                <IconLogo iconId={s.iconId} width={s.width} height={s.height} viewBox={s.viewBox}/>
                            </a>
                        </S.StyledSocialItem>
            })}
        </S.StyledSocials>
    </nav>  
    );
};

