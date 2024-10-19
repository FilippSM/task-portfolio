import styled from "styled-components"
import { TabMenu } from "./tabMenu/TabMenu"
import { SectionTitle } from './../../../components/SectionTitle';
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/images/Proj-1.png"
import timerImg from "./../../../assets/images/Proj-2.png"
import { Container } from "../../../components/Container";

const worksItems = ["All", "landing Page", "React", "spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle> 
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"}> {/* align={"flex-start"} сколько бы не было контента блочки подстраиваются под контент*/}
                    <Work title={"Social Network"}
                    src={socialImg}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                    />
                    <Work title={"Timer"}
                    src={timerImg}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
                    />
                </FlexWrapper>
            </Container>    
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
`