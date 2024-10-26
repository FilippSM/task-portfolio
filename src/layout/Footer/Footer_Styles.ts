import styled from "styled-components"
import { font } from "../../styles/Common"
import { theme } from "../../styles/Theme"

const Footer = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    ${font({ family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 22, Fmin: 16 })}

    /* font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 22px; */
    letter-spacing: 0.14em;
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const SocialItem = styled.li`
    
`
const SocialLink = styled.a`
background-color: rgba(255, 255, 255, 0.1);
border-radius: 50%;
width: 35px;
height: 35px;

display: flex; //задан флекс чтобы применислись стили ширины и высоты примнились к ссылки(так как ссылка это строка то стили не применяются)
justify-content: center;
align-items: center;

color: ${theme.colors.accent}; //цвет иконок по умолчанию, для срабатывания в спрайте иконок должно быть подписано: fill="currentColor

&:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
}
`
const CopyRight = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`

export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    CopyRight
}