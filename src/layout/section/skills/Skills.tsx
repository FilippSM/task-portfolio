import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/icon/Icon"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from './skill/Skill';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill
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
                />
            </FlexWrapper>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    background-color: #ffe5e4;
    min-height: 100vh
`