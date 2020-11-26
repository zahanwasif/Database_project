import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError} </p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          <button onClick={handleLogin}> Sign in</button>
        </div>
        <div className="signup">
          <p>
            Don't have an account ?<Link to="/usertype"> Sign up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Login;
