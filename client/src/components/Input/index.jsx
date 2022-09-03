import InputStyled from "./index.styled"

const Input = ({color="primary",...props}) => {
    return <InputStyled {...props} color={color}/>
}

export default Input;