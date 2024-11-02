import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Link } from "../../../components/Link"
import { Button } from "../../../components/Button"

//Works
const Works = styled.section`
    position: relative; //скрытие текстуры от библиотеки
    ${FlexWrapper} {
        gap: 30px;
    }
`
//Work

const Work = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 330px;// 330px - срабатывает когда раотает свойство wrap при этом блоки скидываются друг под друга
    flex-grow: 1;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }

    @media ${theme.media.dekstop} {
        max-width: 540px;
    }
`

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0; //скрытие кнопки
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -40%);
        transition: ${theme.animations.transition};

        //псевдоэлемент полностью покрывает кнопку
        &::before {
            width: 100%;
            height: 100%
        }
    }

    &::before {
        content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            backdrop-filter: blur(8px); //блюр
            background: rgba(0, 0, 0, 0.3);
            opacity: 0;
            transition: ${theme.animations.transition}
        }

    &:hover {
        &::before {
            opacity: 1;
        }

        //пояление кнопки
        ${Button} {
            opacity: 1;
            transform: translate(-50%, -50%); //кнопка немного выезжает наверх
        }
    }

    //на мобилках сразу показвапется изображение как при ховере
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        //пояление кнопки
        ${Button} {
            opacity: 1;
        }
    }

`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Description = styled.div`
    padding: 25px 20px;
`
const Title = styled.h3`
    
`
const Text = styled.p`
    margin: 14px 0 10px;
`
export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    Description,
    Title,
    Text,
}

