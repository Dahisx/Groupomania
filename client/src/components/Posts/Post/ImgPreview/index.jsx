import ImgPreviewStyled from "./index.styled";

const ImgPreview = ({src, ...props}) => {
    return(
        <ImgPreviewStyled src={src} {...props} />
    )
}

export default ImgPreview;