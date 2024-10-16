import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
            <Name>Filipp</Name>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"} />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"} />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"} />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"linked"} />
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <CopyRight>© 2024 Filipp Samsonau, All Rights Reserved.</CopyRight>
            </FlexWrapper>
        </StyledFooter>

    );
};

const StyledFooter = styled.footer`
    background-color: #f9ab36;
    min-height: 20vh;
`
const Name = styled.span`
    
`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`
const SocialItem = styled.li`
    
`
const SocialLink = styled.a`
    
`
const CopyRight = styled.small`
    
`