import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import {S} from "./../HeaderMenu_Styles"

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    const [menuIsOpen, setmenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {setmenuIsOpen(!menuIsOpen)}

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuIsOpen}>
                <Menu menuItems={props.menuItems}/>
               {/*  <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href="">
                                {item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            
                            
                            </Link>
                        </ListItem>
                    }
                    )}
                </ul> */}
            </S.MobileMenuPopup >
        </S.MobileMenu>
    );
};

