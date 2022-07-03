import React, { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { Routes, Route, useNavigate } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import isEmpty from "./utils/isEmpty"
import setAuthToken from "./utils/setAuthToken";

import Register from "./scenes/Auth/Register";
import Login from "./scenes/Auth/Login";
import Navbar from './components/Navbar';
import MenuLinks from './components/MenuLinks';

import Overview from './scenes/Overview/index';
import Requests from './scenes/Requests/index';
import Sites from './scenes/Sites/index';
import AddSite from './scenes/Sites/Add/index'
import SiteDetails from './scenes/Sites/Details';
import { ContainerStyles } from './styles/Container';

function App() {
  const [auth, setAuth] = useState({ isAuthenticated: false, user: {} });
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.jwtToken);

      setAuth({
        ...auth,
        user: decoded,
        isAuthenticated: !isEmpty(decoded),
      });

      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        logoutUser();
        setAuthToken(false);
      }
    }
    navigate('/login')
  }, []);

  const logoutUser = async () => {
    localStorage.removeItem("jwtToken");
    setAuth({ isAuthenticated: false, user: {} });
    setAuthToken(false);
    navigate("/login")
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar auth={auth} logoutUser={logoutUser} />
      {auth.isAuthenticated && (
        <>
          <ContainerStyles>
            <MenuLinks />
          </ContainerStyles>
        </>
      )}

      <Routes>
        <Route path="/register" element={<Register setAuth={setAuth} />}></Route>
        <Route path="/login" element={<Login setAuth={setAuth} />}></Route>
        <Route exact path="/" element={<Overview />}></Route>
        <Route path="/overview" element={<Overview />}></Route>
        <Route path="/requests" element={<Requests />}></Route>
        <Route path="/sites" element={<Sites />}></Route>
        <Route path="/sites/new" element={<AddSite />}></Route>
        <Route path="/site/:id" element={<SiteDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
