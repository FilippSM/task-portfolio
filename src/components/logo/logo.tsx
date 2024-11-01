import { Icon } from "../icon/Icon";
import { animateScroll  as scroll} from "react-scroll";
import { scrollToTop} from './../../../node_modules/@types/react-scroll/modules/mixins/animate-scroll.d';

export const Logo = () => {
    return (
        <a onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId={"codeSvg"}/>
        </a>
    )
}