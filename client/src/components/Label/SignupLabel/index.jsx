import StyledLabel from "./index.styled";

const SignupLabel = ({children,...props}) => {
    <StyledLabel {...props} >
        {children}
    </StyledLabel>
}

export default SignupLabel;