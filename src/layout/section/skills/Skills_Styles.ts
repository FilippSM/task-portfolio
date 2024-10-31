import styled from "styled-components"
import { theme } from "../../../styles/Theme"

const Skills = styled.section`
    position: relative //скрытие текстуры от библиотеки
`

const Skill = styled.div`
    width: 330px;
    padding: 62px 20px 40px;

    //адаптив
    //каждый скил занимает все свободное пространство по ширине
    flex-grow: 1;

    @media ${theme.media.mobile} {
        padding: 62px 0px 40px;
    }
`

const IconWrapper = styled.div`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left; 
    }
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`
const SkillText = styled.p`
    text-align: center;
`
export const S = {
    Skills,
    Skill,
    IconWrapper,
    SkillTitle,
    SkillText,
}