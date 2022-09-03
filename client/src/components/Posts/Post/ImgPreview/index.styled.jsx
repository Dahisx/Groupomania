import styled from "styled-components";

const ImgPreviewStyled = styled.img(() => ({
    width: "100%",
    height: "100%",
    "@media (min-width: 768px)": {
        width: "50%",
        height: "100%",
    },
    "@media (min-width: 1024px)": {
        width: "30%",
        height: "100%",
    },
}))

export default ImgPreviewStyled;