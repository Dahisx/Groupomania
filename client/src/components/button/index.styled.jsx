import styled from "styled-components";
import theme from "../../theme";
import color from "../../theme/color";

const ButtonStyled = styled.button(() => ({
    width: "215px",
    height: "40px",
    display: "block",
    justifyContent: "center",
    color: "#FFF",
    background: color.red,
    fontSize: "1em",
    fontWeight: "bold",
    marginTop:"20px",
    margin: "20px auto",
    padding: "20px auto",
    border: "none",
    borderRadius: "5px",
    transition: ".2s ease-in",
    outline: "none",
    cursor: "pointer",
    ":hover": {filter: "brightness(1.75)"}
}))


export default ButtonStyled