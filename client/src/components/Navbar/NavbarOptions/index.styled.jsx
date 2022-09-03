import styled from "styled-components";
import theme from "../../../theme";

const StyledNavbarOptions = styled.ul(() => ({
    display: "flex",
    background: theme.color.tertiary,
    justifyContent: "space-around",
    margin: "0",
    padding: "10px",
    flexDirection: "row-reverse",
    listStyle: "none",
    alignItem: "center",
    color: "white"
}))

export default StyledNavbarOptions;