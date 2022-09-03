import LabelStyled from "./index.styled";

const Label = ({children,...props}) => {
    return(
        <LabelStyled {...props} >
            {children}
        </LabelStyled>
    )
}

export default Label;