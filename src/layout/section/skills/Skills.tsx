import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from './skill/Skill';
import { Container } from "../../../components/Container";
import {S} from "./Skills_Styles"

const skillData = [
    {
        iconId: "codeSvg",
        title: "html5",
        decription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "css",
        title: "css3",
        decription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "react",
        title: "react",
        decription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "typeScript",
        title: "typeScript",
        decription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "styledComponent",
        title: "styled components",
        decription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "webDew",
        title: "WEB DESIgN",
        decription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    }
]


export const Skills = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>


                    {skillData.map((s, index) => {
                        return <Skill key = {index}
                            iconId={s.iconId}
                            title={s.title}
                            decription={s.decription} />
                    })}

                   {/*  <Skill
                        iconId={"codeSvg"}
                        title={"html5"}
                        decription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
                    <Skill
                        iconId={"css"}
                        title={"css3"}
                        decription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
                    <Skill
                        iconId={"react"}
                        title={"react"}
                        decription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                    />
                    <Skill
                        iconId={"typeScript"}
                        title={"typeScript"}
                        decription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
                    <Skill
                        iconId={"styledComponent"}
                        title={"styled components"}
                        decription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
                    <Skill
                        iconId={"webDew"}
                        title={"WEB DESIgN"}
                        decription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                    /> */}
                </FlexWrapper>
            </Container>

        </S.Skills>
    )
}

