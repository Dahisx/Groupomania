import React from "react";
import { Footer, Header } from "../components/common";
import ProfileSetpup from "../components/ProfileSetup";
import Container from "../layout/Container/index.styled";
import ContainerFlex from "../layout/Flex/index.styled";

function Profile() {
  return (
    <Container>
      <Header />
      <ContainerFlex>
        <ProfileSetpup />
      </ContainerFlex>
      <Footer />
    </Container>
  );
}

export default Profile;
