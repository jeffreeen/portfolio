import IconSprite from '../../assets/images/sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const IconLogo = (props:IconPropsType) => {
    return (  
        <svg width={props.width || '97'} height={props.height || '59'} viewBox={props.viewBox || '0 0 97 59'} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconSprite}#${props.iconId}`}></use>
        </svg>
    );
};