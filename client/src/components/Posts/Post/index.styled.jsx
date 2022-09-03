import styled from "styled-components";
import theme from "../../../theme";

const MsgCardContainer = styled.div(() => ({
  width: "95%",
  height: "fit-content",
  padding: "10px",
  borderRadius: "20px",
  marginBottom: "10px",
  background: theme.color.secondary
}));

export default MsgCardContainer;
