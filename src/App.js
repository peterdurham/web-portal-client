import React, {useState, useEffect} from 'react'
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import isEmpty from "./utils/isEmpty"
import setAuthToken from "./utils/setAuthToken";

import Register from "./Register";
import Login from "./Login";
import Button from './components/Button'
import Header from './components/Header'
import Page from './components/Page'
import Card from './components/Card';
import Chip from './components/Chip';
import TextField from './components/TextField';
import Select from './components/Select';
import Navbar from './components/Navbar';
import MenuLinks from './components/MenuLinks';

import Overview from './scenes/Overview/index';
import Requests from './scenes/Requests/index';
import Sites from './scenes/Sites/index';
import AddSite from './scenes/Sites/Add/index'
import { ContainerStyles } from './styles/Container';

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
]

function App() {
  const [auth, setAuth] = useState({ isAuthenticated: false, user: {} });

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
  }, []);

  const logoutUser = async () => {
    localStorage.removeItem("jwtToken");
    setAuth({ isAuthenticated: false, user: {} });
    setAuthToken(false);
  };

  return (
    <Router className="App">
      <GlobalStyle />
      <nav>
                            {auth.isAuthenticated ? (
                                <li>
                                    <button onClick={logoutUser}>
                                        Logout
                                    </button>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to="/register">Register</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/login">Login</NavLink>
                                    </li>
                                </>
                            )}
                        </nav>
      <Navbar />
      <ContainerStyles>
        <MenuLinks />
      </ContainerStyles>
      <Routes>
        <Route path="/register" element={<Register setAuth={setAuth} />}></Route>
        <Route path="/login" element={<Login setAuth={setAuth} />}></Route>
        <Route exact path="/" element={<Overview />}></Route>
        <Route path="/overview" element={<Overview />}></Route>
        <Route path="/requests" element={<Requests />}></Route>
        <Route path="/sites" element={<Sites />}></Route>
        <Route path="/sites/new" element={<AddSite />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
