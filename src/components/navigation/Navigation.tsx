import { N } from "./Navigation_Styles";


type NavigationPropsType = {
    dataNavigation: string[]
}

export const Navigation = (props:NavigationPropsType) => {
    return (  
        <N.StyledNavigation>
            {props.dataNavigation.map((n, index)=>{
                return <li key={index}><N.StyledLinkText href="/">{n}</N.StyledLinkText></li>
            }
            )}
        </N.StyledNavigation>
    );
};
