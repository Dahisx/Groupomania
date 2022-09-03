import styled from "styled-components";
import theme from "../../../../../theme";

const EditBtnStyled = styled.button(() => ({
  border: "none",
  background: theme.color.secondary,
  color: theme.color.tertiary,
  fontSize: "1.5rem",
  padding: "10px",
  outline: "none",
  transition: ".1s ease-in",

  ":focus": {
    outline: "none",
  },
  ":hover": {
    color: "red",
  },
  ":active": {
    color: "red",
  },
}));

export default EditBtnStyled;
