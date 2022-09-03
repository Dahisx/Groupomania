import StyledUserPic from "./index.styled";
import DefaultUserPic from "../../../images/default-userpic.jpg"

const UserPic = () => {
    return(
        <StyledUserPic src={DefaultUserPic} />
    )
}

export default UserPic;