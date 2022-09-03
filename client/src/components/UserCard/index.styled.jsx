import styled from "styled-components";
import theme from "../../theme";

const StyledUserCard = styled.div(() => ({
    alignItems: "center",
    background: theme.color.secondary,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: "20px",
    margin: "10px"
}))

export default StyledUserCard;

