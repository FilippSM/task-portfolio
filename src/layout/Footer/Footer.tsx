import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import {S} from "./Footer_Styles"
import React from "react";

const socialItemsData = [
    {
        iconId: "instagram",
    },
    {
        iconId: "telegram",
    },
    {
        iconId: "vk",
    },
    {
        iconId: "linked",
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Filipp</S.Name>
                <S.SocialList>
                    {socialItemsData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon height={"21px"} width={"21px"} viewBox={"0 0 21 21"} iconId={s.iconId} />
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}
                {/*     <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21 21"} iconId={"instagram"} />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21 21"} iconId={"telegram"} />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21 21"} iconId={"vk"} />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21 21"} iconId={"linked"} />
                    </SocialLink>
                </SocialItem>  */}
                </S.SocialList>
                <S.CopyRight>© 2024 Filipp Samsonau, All Rights Reserved.</S.CopyRight>
            </FlexWrapper>
        </S.Footer>

    );
};

