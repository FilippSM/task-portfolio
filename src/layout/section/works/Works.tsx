import styled from "styled-components"
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu"
import { SectionTitle } from './../../../components/SectionTitle';
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/images/Proj-1.png"
import timerImg from "./../../../assets/images/Proj-2.png"
import { Container } from "../../../components/Container";
import React, { useState } from "react";
import {S} from "./Works_Styles";

/* const tabsItems = ["All", "landing Page", "React", "spa"] */
const tabsItems: Array<{status: TabsStatusType, title: string}> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "landing Page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    }
]


//статус должен совпадать с типом проекта
const worksData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa"
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: "react"
    },
]

export const Works: React.FC = () => {
    const[currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filtredWorks = worksData

    if (currentFilterStatus === "landing") {
        filtredWorks = worksData.filter(work => work.type === "landing")
    }
    if (currentFilterStatus === "react") {
        filtredWorks = worksData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filtredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}> {/* align={"flex-start"} сколько бы не было контента блочки подстраиваются под контент */}

                    {filtredWorks.map((w, index) => {
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

