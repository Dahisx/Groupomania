import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";


import Container from "../layout/Container/index.styled";
import Label from "../components/Label";
import InputNone from "../components/InputNone";
import ContainerForm from "../components/Form/index.styled";
import { Footer, Header } from "../components/common";
import DivSignup from "../layout/Signup";

import Input from "../components/Input/index";
import FormButton from "../components/button";
import DivLogin from "../layout/Login";
import ContainerFlex from "../layout/Flex/index.styled";

import { signUp, login } from "../request";
import { useDispatch, useSelector } from "react-redux";
import { logged } from "../store/userSlice";
import ValidateModifiedMsg from "../components/button/ValidateModifiedMsg/index.styled";


function LoginSignup() {
  let navigate = useNavigate();
  const isLogged = useSelector((state) => state.user.logged);
  const dispatch = useDispatch();
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    SetUsername("");
    SetPassword("");
    SetEmail("");
    setChecked(!checked);
  };

  const setLogged = useCallback(({username,userId,isAdmin}) => {
    dispatch(logged({username,userId,isAdmin}));
  },[dispatch])

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await signUp({
        username,
        email,
        password,
      });
      if (res.status === 201 || res.status === 200) {
        navigate("/Home");
        const { isAdmin,username,_id:userId } = res.data.user;
        setLogged({isAdmin,username,userId});
      }
    }
    catch (err) {
      alert(err);
    }
  }
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({
        email,
        password,
      });
      if (res.status === 200 || res.status === 201) {
        const { isAdmin,username,userId } = res.data;
        setLogged({isAdmin,username,userId});
        navigate("/Home");
      }
    }
    catch (err) {
      alert(err);
    }
  };

  return (
    <Container>
      <Header />
      <ContainerFlex>
        <ContainerForm>
          <InputNone type="checkbox" aria-hidden="true" checked={!checked} />

          <DivSignup>
            <form>
              <Label
                aria-hidden="false"
                onClick={handleChecked}
                checked={checked}
              >
                Signup
              </Label>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => SetUsername(e.target.value)}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
                required
              />
            </form>
            <FormButton onClick={handleSignUp}>Signup</FormButton>
          </DivSignup>
          <DivLogin checked={checked}>
            <form onSubmit={handleLogin} >
              <Label
                color="white"
                aria-hidden="true"
                onClick={handleChecked}
                checked={!checked}
              >
                Login
              </Label>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              />
              <FormButton onClick={handleLogin}>Login</FormButton>
            </form>
          </DivLogin>
        </ContainerForm>
      </ContainerFlex>
      <Footer />
    </Container>
    
  );
}

export default React.memo(LoginSignup);
