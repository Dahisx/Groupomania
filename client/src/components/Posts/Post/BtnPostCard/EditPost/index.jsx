import EditBtnStyled from "./index.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"

const EditBtn = ({...props}) => {
    return(
        <EditBtnStyled>
            <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
        </EditBtnStyled>
    )
}

export default EditBtn