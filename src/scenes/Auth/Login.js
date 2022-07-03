import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import jwt_decode from "jwt-decode";
import isEmpty from "../../utils/isEmpty"
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import PropTypes from "prop-types";
import { ContainerStyles } from '../../styles/Container'
import Card from "../../components/Card";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

function Login({ setAuth }) {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post("/api/users/login", userData);
      const data = await response.data;

      const { token } = data;
      await localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);

      setAuth({
        isAuthenticated: !isEmpty(decoded),
        user: decoded,
      });
      setErrors({});
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (e) {
      setErrors(e.response.data);
    }
  };

  return (
    <ContainerStyles>
      <Card>
        <LoginStyles>
          <h2>Login:</h2>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <TextField value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
              {/* <input
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              /> */}
              {errors.email && <span className="red">{errors.email}</span>}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <TextField value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
              {/* <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              /> */}
              {errors.password && <span className="red">{errors.password}</span>}
            </div>
            <Button type="primary">Login</Button>
          </form>
        </LoginStyles>
      </Card>
    </ContainerStyles>
  );
}

Login.propTypes = {
  setAuth: PropTypes.func.isRequired,
  //   history: PropTypes.object.isRequired,
};

const LoginStyles = styled.div`
padding: 24px;
width: 680px;
margin: 0 auto;

h2 { border-bottom: 1px solid #e8ebed; padding-bottom: 10px; margin-bottom: 30px; }
button { margin-top: 30px; }
`

export default Login;