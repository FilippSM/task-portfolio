import styled from "styled-components"
import { Menu } from "../../../components/menu/Menu"
import { SectionTitle } from './../../../components/SectionTitle';
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/images/Proj-1.png"
import timerImg from "./../../../assets/images/Proj-2.png"

const worksItems = ["All", "landing Page", "React", "spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle> 
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"}
                src={socialImg}
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                />
                <Work title={"Timer"}
                src={timerImg}
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
                />
            </FlexWrapper>
        </StyledWorks>
       
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #deefff;
`