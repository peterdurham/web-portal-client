import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import jwt_decode from "jwt-decode";
import isEmpty from "../../utils/isEmpty"
import axios from "axios";
import PropTypes from "prop-types";
import setAuthToken from "../../utils/setAuthToken";

import { ContainerStyles } from '../../styles/Container'
import Card from "../../components/Card";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

function Register({ setAuth }) {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
    };
    const userData = {
      email,
      password,
    };

    try {
      await axios.post("/api/users/register", newUser);

      const loginResponse = await axios.post("/api/users/login", userData);
      const loginData = await loginResponse.data;

      const { token } = loginData;
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
        <RegisterStyles>
          <h2>Register: </h2>
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
            <Button type="primary">Register</Button>
          </form>
        </RegisterStyles>
      </Card>
    </ContainerStyles>
  );
}
Register.propTypes = {
  setAuth: PropTypes.func.isRequired,
  //   history: PropTypes.object.isRequired,
};

const RegisterStyles = styled.div`
padding: 24px;
width: 680px;
margin: 0 auto;

h2 { border-bottom: 1px solid #e8ebed; padding-bottom: 10px; margin-bottom: 30px; }
button { margin-top: 30px; }
`

export default Register;