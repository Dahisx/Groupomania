import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div(() => ({
  backgroundColor: theme.color.primary,
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
}));

export default Container;
