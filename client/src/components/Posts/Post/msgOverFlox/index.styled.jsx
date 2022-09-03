import styled from "styled-components";

const StyledMsgOvevflow = styled.div(() => (({
    overflowWrap: "anywhere",
    display: "flex",
    flexDirection: "column",
})));

export default StyledMsgOvevflow;