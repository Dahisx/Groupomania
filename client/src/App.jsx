import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

import Home from "./pages/home";
import LoginSignup from "./pages/LoginSignup";
import { useSelector } from "react-redux";

const App = () => {

  const isLogged = useSelector(state => state.user.logged);

  return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
         {isLogged && <Route path="/Home" element={<Home />} />}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
  );
};

export default App;
