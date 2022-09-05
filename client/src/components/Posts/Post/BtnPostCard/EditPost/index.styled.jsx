import styled from "styled-components";
import theme from "../../../../../theme";

const EditBtnStyled = styled.button(({hasUserLiked}) => ({
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
  ...(hasUserLiked && {color:"red"})
}));

export default EditBtnStyled;
