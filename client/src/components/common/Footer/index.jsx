import Copyright from "./Copyright";
import StyledFooter from "./index.style";
import FooterLogo from "./Logo";
import Logo from "../../../images/icon-left-font-monochrome-black.png"
import StyledList from "./List/index.styled";
import List from "./List";
import { useNavigate } from "react-router-dom";


const Footer = () => {
    let navigate = useNavigate();
    return(
        <StyledFooter>
        <FooterLogo src={Logo}  />
        <StyledList>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
        </StyledList>
        <Copyright/>
        </StyledFooter>
    )
}

export { Footer };