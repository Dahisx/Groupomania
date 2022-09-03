import ChangeImgStyled from "./index.styled";

const ChangeImg = ({ children, ...props }) => {
  return <ChangeImgStyled {...props}>{children}</ChangeImgStyled>;
};

export default ChangeImg;
