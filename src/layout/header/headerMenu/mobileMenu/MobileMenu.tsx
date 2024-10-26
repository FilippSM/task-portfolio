import React from "react";
import { Menu } from "../menu/Menu";
import {S} from "./../HeaderMenu_Styles"

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={false}>
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

