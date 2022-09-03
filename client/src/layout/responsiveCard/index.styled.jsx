import styled from "styled-components";

const BlockToFlex = styled.div(() => ({
    display: "block",
    
    "@media(min-width: 560px)": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
}))

export default BlockToFlex;