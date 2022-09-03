import StyledUserCard from "./index.styled";
import SendBtn from "./SendBtn";
import UserMsgInput from "./UserMsgInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import BlockToFlex from "../../layout/responsiveCard/index.styled";
import EditBtnStyled from "../Posts/Post/BtnPostCard/EditPost/index.styled";
import { createPost } from "../../request";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostToList } from "../../store/postSlice";
import InputNone from "../InputNone";
import ImgPreview from "../Posts/Post/ImgPreview";
import BtnContainer from "./BtnContainer";

const UserCard = () => {
  const inputImg = useRef(null);
  const inputRefUserMsg = useRef(null);
  const [userMsg, setUserMsg] = useState("");
  const [fileSelected, setFiledSelected] = useState(null);
  const username = useSelector((state) => state.user.username);

  const dispatch = useDispatch();

  console.log(inputImg);
  console.log(inputRefUserMsg);

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await createPost(userMsg, fileSelected);
    if (res.status === 201 || res.status === 200) {
      inputImg.current.value = null;
      inputRefUserMsg.current.value = null;
      setFiledSelected(null);
      dispatch(addPostToList(res.data.post));
    }
  };
  console.log(inputImg);
  return (
    <StyledUserCard>
      <span>Bienvenue {username}</span>
      <p>Disctuez avec vos collaborateurs</p>
      <UserMsgInput
        type="text"
        row="10"
        cols="45"
        placeholder="Ecrivez votre message."
        ref={inputRefUserMsg}
        onChange={(e) => setUserMsg(e.target.value)}
      />
      <BtnContainer>
        <SendBtn onClick={handleClick} />
        <EditBtnStyled>
          <InputNone
            type="file"
            ref={inputImg}
            onChange={(e) => setFiledSelected(e.target.files[0])}
          />
          {fileSelected && (
            <ImgPreview src={URL.createObjectURL(fileSelected)} />
          )}
          <FontAwesomeIcon
            icon={faImages}
            onClick={() => inputImg.current.click()}
          ></FontAwesomeIcon>
        </EditBtnStyled>
      </BtnContainer>
    </StyledUserCard>
  );
};

export default UserCard;
