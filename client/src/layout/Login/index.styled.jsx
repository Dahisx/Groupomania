import styled from "styled-components";
import theme from "../../theme";

const DivStyled = styled.div(({checked}) => ({
    height:"460px",
    background:"#FFF",
    borderRadius:"60% / 10%",
    transform: "translateY(-180px)",
    transition:".8s ease-in-out",
    backgroundColor: theme.color.tertiary,
    ...(checked && {
        transform: "translateY(-500px)"
    })
}))

export default DivStyled;