import styled from "styled-components";
import theme from "../../theme";


const InputStyled = styled.input(({color}) => ({
    width: "230px",
    height: "20px",
    background: "white",
    justifyContent: "center",
    display: "flex",
    margin: "20px auto",
	padding: "10px",
	border: "none",
	outline: "none",
	borderRadius: "5px",
    ":hover": {
        border:"2px solid"
    },
    ":focus": {
        border: "2px solid red"
    } 
}))

export default InputStyled;