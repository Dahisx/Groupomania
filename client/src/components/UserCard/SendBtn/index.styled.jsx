import styled from "styled-components";
import theme from "../../../theme";

const StyledSendBtn = styled.button(() => ({
  padding: "10px",
  color: "white",
  border: "none",
  background: theme.color.tertiary,
  width: "100px",
  fontSize: "1rem",
  fontStyle: "italic",
  fontWeight: "bold",
  borderRadius: "20px 0px 20px 20px",
  cursor: "pointer",
  margin: "10px",
  ":hover": {background: theme.color.primary},
}));

export default StyledSendBtn;
