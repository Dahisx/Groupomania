import React from "react";


import { Header, Footer } from "../components/common";

import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import UserCard from "../components/UserCard";
import Container from "../layout/Container/index.styled";

function Home() {
  return (
    <Container>
      <Header />
      <Navbar />
      <UserCard />
      <Posts />
      <Footer />
    </Container>
  );
}

export default Home;
