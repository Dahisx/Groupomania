import styled from "styled-components";

const StyledLabel = styled.label(({ checked }) => ({
  color: "rgb(255, 255, 255)",
  fontSize: "2.3em",
  display: "flex",
  justifyContent: "center",
  margin: "60px",
  fontWeight: "bold",
  cursor: "pointer",
  padding: "10px",
  ...(checked && {
    transition: "all 0.5s ease-in-out 0s",
    transform: "scale(0.6)",
  }),
}));

export default StyledLabel;
