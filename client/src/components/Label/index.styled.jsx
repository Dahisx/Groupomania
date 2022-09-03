import styled from "styled-components";

const LabelStyled = styled.label(({checked,color="#4E5166"}) => ({
    fontSize:"2.3em",
    display:"flex",
    justifyContent:"center",
    margin:"60px",
    fontWeight:"bold",
    cursor:"pointer",
    transition:".5 ease-in-out",
    color,
    padding: "10px",
    ...(checked && {transform: "scale(.6)"})
    
}))


export default LabelStyled;