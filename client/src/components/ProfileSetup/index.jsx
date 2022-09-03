import ButtonStyled from "../button/index.styled";
import Input from "../Input";
import UserPic from "../UserCard/UserPic";
import ProfileSetupStyled from "./index.styled";

const ProfileSetpup = () => {
  return (
    <ProfileSetupStyled>
      <UserPic />
      <span>Profile de Username</span>
      <ButtonStyled>Changez de photos</ButtonStyled>
      <div>
        <Input type="text" placeholder="Nouveau pseudo"></Input>
        <ButtonStyled >Changez de Pseudo</ButtonStyled>
      </div>
      <div>
         <Input type="text" placeholder="Nouveau mot de passe" ></Input>
         <ButtonStyled>Changez de mot de passe</ButtonStyled>
      </div>
    </ProfileSetupStyled>
  );
};

export default ProfileSetpup;
