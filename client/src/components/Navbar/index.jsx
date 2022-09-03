import StyledNavbarOptions from "./NavbarOptions/index.styled";
import StyledNavbarSection from "./NavbarSection/index.styled";
import { useNavigate } from "react-router-dom";
import { deleteToken } from "../../request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../store/userSlice";
import {useDispatch} from "react-redux";

const Navbar = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate('/');
  }

  return (
    <StyledNavbarOptions>
      <StyledNavbarSection onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon></StyledNavbarSection>
    </StyledNavbarOptions>
  );
};

export default Navbar;
