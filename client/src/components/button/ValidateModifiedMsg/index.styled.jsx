import styled from "styled-components";


const ValidateModifiedMsg = styled.button(() => ({
    width: "90px",
    height: "40px",
    display: "block",
    justifyContent: "center",
    background: "lightgreen",
    fontSize: "0.8em",
    fontWeight: "bold",
    margin: "20px auto",
    border: "none",
    borderRadius: "5px",
    transition: ".2s ease-in",
    outline: "none",
    cursor: "pointer",
    ":hover": {filter: "brightness(1.25)"}
}))

export default ValidateModifiedMsg;