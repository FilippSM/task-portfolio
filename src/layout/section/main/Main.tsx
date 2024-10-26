import photo from "./../../../assets/images/Photo.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import {S} from "./Main_Styles"
import React from "react";

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}> {/* фото и текст при уменьшении экрана центрируются  было space-between*/}
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I'm <span>Filipp Samsonau</span></S.Name>
                        <S.MainTitle>A web Developer.</S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="" />
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

