import { Menu } from "../menu/Menu";
import {S} from "./../HeaderMenu_Styles"

export const DekstopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <Menu />
            {/* <ul>
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
        </S.DesktopMenu>
    );
};

