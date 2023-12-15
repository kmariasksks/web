import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "../login/login";
import "./RegistrationForm.css";

export const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [login, setLogin] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [flag, setFlag] = useState(false);

  const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");
  if (loggedInUserIndex) {
    return <Navigate to="/HomePage" />;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !retypePassword) {
      setFlag(true);
      alert("Fill every field!");
    } else {
      setFlag(false);

      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

      if (!emailRegex.test(email)) {
        setEmailError("Invalid email address");
        return;
      } else {
        setEmailError("");
      }

      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      if (existingUsers.some((user) => user.email === email)) {
        alert("This email is already taken. Choose another.");
        return;
      }

      const newUser = {
        name,
        email,
        password,
      };

      existingUsers.push(newUser);

      localStorage.setItem("users", JSON.stringify(existingUsers));

      console.log("Saved");
      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <section className="signup">
      {login ? (
        <form onSubmit={handleSubmit}>
          <h2 className="signup__title">Sign Up</h2>
          <div className="signup__form">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="signup__form">
            <label>Email</label>
            <input
              type="email"
              className={`form-control ${emailError && "error"}`}
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
                setEmailError("");
              }}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="signup__form">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="signup__form2">
            <label>Retype password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Retype password"
              onChange={(event) => setRetypePassword(event.target.value)}
            />
          </div>

          <button type="submit" className="signup__button">
            Sign Up
          </button>

          <p onClick={handleClick} className="signup__text">
            Already a member? <a className="signin__button"> Log in</a>
          </p>
        </form>
      ) : (
        <Login />
      )}
    </section>
  );
};

export default RegistrationForm;
