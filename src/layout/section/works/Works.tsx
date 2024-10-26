import styled from "styled-components"
import { TabMenu } from "./tabMenu/TabMenu"
import { SectionTitle } from './../../../components/SectionTitle';
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/images/Proj-1.png"
import timerImg from "./../../../assets/images/Proj-2.png"
import { Container } from "../../../components/Container";
import React from "react";
import {S} from "./Works_Styles";

const worksItems = ["All", "landing Page", "React", "spa"]

const workData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems} />
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}> {/* align={"flex-start"} сколько бы не было контента блочки подстраиваются под контент */}

                    {workData.map((w, index) => {
                        return <Work key={index}
                            title={w.title}
                            src={w.src}
                            text={w.text}
                        />
                    })}

                   {/*  <Work title={"Social Network"}
                        src={socialImg}
                        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                    />
                    <Work title={"Timer"}
                        src={timerImg}
                        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
                    /> */}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

