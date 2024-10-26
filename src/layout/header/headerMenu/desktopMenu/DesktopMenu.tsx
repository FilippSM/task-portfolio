import { Menu } from "../menu/Menu";
import {S} from "./../HeaderMenu_Styles"

export const DekstopMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={props.menuItems}/>
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

