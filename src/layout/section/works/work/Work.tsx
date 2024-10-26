import { Link } from "../../../../components/Link";
import { Button } from "../../../../components/Button";
import React from "react";
import {S} from "./../Works_Styles";


type WorksPropsType = {
    title: string
    text: string
    src: string
}

export const Work: React.FC<WorksPropsType> = (props: WorksPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt="" />
                <Button>view project</Button>   
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </S.Description>
        </S.Work>
    );
};

