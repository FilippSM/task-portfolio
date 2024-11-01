import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from './../../../components/Container';
import {S} from "../skills/Skills_Styles"
import React from "react";

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id={"testimony"}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"invertedCommas"} width={"42"} height={"32"} viewBox={"0 0 42 32"}/>
                    </S.IconWrapper>
                    <Slider />
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    position: relative; //скрытие текстуры от библиотеки
    min-height: 50vh;
    background-color: #aeb9ff;

    ${S.IconWrapper} {
        margin: 40px 0 72px;
    }
`