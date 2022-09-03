import styled from "styled-components";
import theme from "../../theme";

const ContainerForm = styled.form(() => ({
    width: "300px",
    height: "500px",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "5px 20px 50px #000",
    background: theme.color.secondary,
    marginTop: "5em",
    marginBottom: "5em",
    border: "1px solid",

    "@media (min-width: 400px)": {
        width: "350px",
    },
}))


export default ContainerForm;

