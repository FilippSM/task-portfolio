import styled from "styled-components"
import { Logo } from "../../components/logo/logo"
import { Menu } from "../../components/menu/Menu"

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu />
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #90a194;
    display: flex;
    justify-content: space-between;
`