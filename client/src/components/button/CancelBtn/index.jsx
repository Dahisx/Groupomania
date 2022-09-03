import CancelBtnStyled from "./index.styled";

const CancelBtn = ({children,...props}) => {
    return(
        <CancelBtnStyled {...props} >
            {children}
        </CancelBtnStyled>
    )
}

export default CancelBtn;