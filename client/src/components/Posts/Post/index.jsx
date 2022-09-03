import BlockToFlex from "../../../layout/responsiveCard/index.styled";
import UserPic from "../../UserCard/UserPic";
import BtnPostCardCtnr from "./BtnPostCard/index.styled";
import CreateAtStyled from "./CreateAtMsg/index.styled";
import MsgCardContainer from "./index.styled";
import MsgContainerStyled from "./MsgContainer/index.styled";
import UserCardPostStyled from "./PostCard/index.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faImages, faXmark } from "@fortawesome/free-solid-svg-icons";
import EditBtnStyled from "./BtnPostCard/EditPost/index.styled";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  deletePost,
  dislikePost,
  likePost,
  modifyPost,
} from "../../../request";
import {
  addDislikeToPost,
  addLikeToPost,
  deletePostToList,
  modifyPostToList,
} from "../../../store/postSlice";
import StyledMsgOvevflow from "./msgOverFlox/index.styled";
import ValidateModifiedMsg from "../../button/ValidateModifiedMsg/index.styled";
import ModifyMsgBox from "./ModifyMsgBox";
import CancelBtn from "../../button/CancelBtn";
import InputDisplayNone from "../../Input/InputDisplayNone/index.styled";
import ImgPreview from "./ImgPreview";
import ChangeImg from "./ChangeImg";

const Post = ({ post }) => {
  const userId = useSelector((state) => state.user.userId);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const dispatch = useDispatch();
  const allowToModifyOrDelete = userId === post.userId || isAdmin;
  console.log(userId, post.userId, isAdmin);
  console.log("post", post.id, allowToModifyOrDelete);
  const [likes, setLikes] = useState(0);
  const [isModifing, setIsModifing] = useState(false);
  const [fileSelected, setFiledSelected] = useState(null);
  const [wantToDeleteImage, setWantToDeleteImage] = useState(false);
  const refInputMessage = useRef(null);
  const inputImg = useRef(null);

  const hasUserLiked = (post) => {
    const user = post.usersLiked.includes(userId);
    return !!user;
  };

  const handleDelete = async () => {
    const res = await deletePost(post._id);
    if (res.status === 200) {
      dispatch(deletePostToList(post._id));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      return;
    }
    e.target.value = null;
  };

  const handleLike = async () => {
    let res;
    const isUserLiked = hasUserLiked(post);
    try {
      if (isUserLiked) {
        setLikes(likes - 1);
        res = await dislikePost(post._id);
      } else {
        setLikes(likes + 1);
        res = await likePost(post._id);
      }

      if (res.status === 201 || res.status === 200) {
        console.log("like success");
        isUserLiked
          ? dispatch(addDislikeToPost({ id: post._id, userId }))
          : dispatch(addLikeToPost({ id: post._id, userId }));
      } else {
        console.log("like error");
        isUserLiked
          ? setLikes((prevValue) => prevValue + 1)
          : setLikes((prevValue) => prevValue - 1);
        res.status === 401
          ? alert("You need to login")
          : alert("Something went wrong");
      }
    } catch (error) {
      isUserLiked
        ? setLikes((prevValue) => prevValue + 1)
        : setLikes((prevValue) => prevValue - 1);
      console.log(error);
    }
  };

  const handleModify = () => {
    setIsModifing(true);
  };

  const handleSubmitMessage = async () => {
    const msgModified = refInputMessage.current.value;
    const fileSelectedToSent = fileSelected
      ? fileSelected
      : wantToDeleteImage
      ? null
      : post.imageUrl;
    const res = await modifyPost(post._id, msgModified, fileSelectedToSent);
    if (res.status === 200) {
      const hasImage = !!res.data.post.imageUrl;
      dispatch(
        modifyPostToList({
          id: post._id,
          message: msgModified,
          imageUrl: hasImage
            ? res.data.post.imageUrl
            : wantToDeleteImage
            ? null
            : post.imageUrl,
        })
      );
    }
    setWantToDeleteImage(false);
    setIsModifing(false);
    setFiledSelected(null);
  };

  const handleCancel = () => {
    setIsModifing(false);
    setFiledSelected(null);
  };

  useEffect(() => {
    setLikes(post.likes);
  }, [post.likes]);

  const handleChangeInputFile = (e) => {
    setFiledSelected(e.target.files[0]);
    setWantToDeleteImage(false);
  };

  const handleDeleteImage = () => {
    setWantToDeleteImage(true);
    setFiledSelected(null);
  };

  return (
    <MsgCardContainer>
      <BlockToFlex>
        <UserCardPostStyled>
          <span style={{ fontWeight: "bold" }}>{post.username}</span>
        </UserCardPostStyled>
        <CreateAtStyled>Message ecrit le {post.createdAt}</CreateAtStyled>
      </BlockToFlex>
      <>
        {isModifing &&
          !wantToDeleteImage &&
          (fileSelected || post.imageUrl) && (
            <FontAwesomeIcon
              icon={faXmark}
              color="red"
              onClick={handleDeleteImage}
            />
          )}
        {fileSelected && !wantToDeleteImage && (
          <ImgPreview
            onChange={handleFileChange}
            src={URL.createObjectURL(fileSelected)}
          />
        )}
        {post.imageUrl && !fileSelected && !wantToDeleteImage && (
          <ImgPreview src={post.imageUrl} alt="image" />
        )}
      </>
      <MsgContainerStyled>
        <StyledMsgOvevflow>
          {isModifing ? (
            <>
              <ModifyMsgBox defaultValue={post.message} ref={refInputMessage} />
              <ChangeImg>
                <FontAwesomeIcon
                  icon={faImages}
                  onClick={() => inputImg.current.click()}
                />
              </ChangeImg>
              <InputDisplayNone
                type="file"
                ref={inputImg}
                onChange={handleChangeInputFile}
              />
              <ValidateModifiedMsg onClick={handleSubmitMessage}>
                Submit
              </ValidateModifiedMsg>
              <CancelBtn onClick={handleCancel}>Cancel</CancelBtn>
            </>
          ) : (
            post.message
          )}
        </StyledMsgOvevflow>
      </MsgContainerStyled>
      <BtnPostCardCtnr>
        {allowToModifyOrDelete && (
          <div>
            <EditBtnStyled>
              <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={handleModify}
              ></FontAwesomeIcon>
            </EditBtnStyled>
            <EditBtnStyled onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </EditBtnStyled>
          </div>
        )}
        <div>
          <EditBtnStyled onClick={handleLike}>
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
            <span>{likes}</span>
          </EditBtnStyled>
        </div>
      </BtnPostCardCtnr>
    </MsgCardContainer>
  );
};

export default Post;
