import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Main = styled.section`
    min-height: 100vh;
    background-color: #c6b6b6;
    display: flex; //выравнивание по центру и появляется промтранство
`
//элемент рамка за фоткой
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    margin-top: 65px;

    &::before {
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};

       /*  смещение рамки */
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${theme.media.mobile} {
        width: 314px;
        height: 414px;
        top: -17px;
        left: 20px;
        }
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;

    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`

const MainTitle = styled.h1`
    ${font({weight: 400, Fmax: 27, Fmin: 20})}; //подключение миксина
    /*  font-weight: 400;
    font-size: 27px; */
    p {
        display: none;
    }
`
const Name = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})}; //подключение миксина
/*     font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 50px; */
    letter-spacing: 0.05em;
    margin: 10px 0;

    //элемент линия под ФИО
    span {
        position: relative;
        z-index: 0;
        white-space: nowrap; //запрет переноса

        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};

            position: absolute;
            bottom: 0;
            z-index: -1;
        }

        @media ${theme.media.mobile} {
            margin: 15px 0 22px;
        }
    }
`

const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
`

export const S = {
    Main,
    PhotoWrapper,
    Photo,
    MainTitle,
    Name,
    SmallText,
}