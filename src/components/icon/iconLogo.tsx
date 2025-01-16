import styled from 'styled-components'
import IconSprite from '../../assets/images/sprite.svg'
import { Theme } from '../../styles/Theme'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    color?: string
    fill?: string
}

export const IconLogo = (props:IconPropsType) => {
    return (  
        <svg fill={props.fill || 'none'} color={props.color || Theme.colors.colorGrey} width={props.width || '97'} height={props.height || '59'} viewBox={props.viewBox || '0 0 97 59'} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconSprite}#${props.iconId}`}></use>
        </svg>
    );
};








