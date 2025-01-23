import { Socials } from "../socials/Socials";
import { Navigation } from "../navigation/Navigation";
import { M } from "./Menu_Styles";

const navigationData = ['Home','About','Tech Stack','Projects','Contact']

export const Menu:React.FC = () => {
    return (  
    <M.StyledMenu>
        <Navigation dataNavigation={navigationData}/>
        <Socials/>
    </M.StyledMenu>
    );
};

