import styled from 'styled-components';
import theme from '../../../theme';

const CancelBtnStyled = styled.button(() => ({
    width: "90px",
    height: "40px",
    display: "block",
    justifyContent: "center",
    color: "white",
    fontSize: "1em",
    marginTop:"20px",
    margin: "20px auto",
    border: "none",
    borderRadius: "5px",
    transition: ".2s ease-in",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "red",
}));

export default CancelBtnStyled;