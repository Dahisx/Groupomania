import styled from "styled-components";

const StyledNavbarSection = styled.li(() => ({
    fontWeight: "bolder",
    cursor: "pointer",
    fontSize : "1.4em",
    "&:hover": { color: "red" },
}))

export default StyledNavbarSection;