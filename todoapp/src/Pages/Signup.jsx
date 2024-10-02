import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  let [email, setEmail] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    let data = { email, username, password };
    axios
      .post(`https://todo-app-full-stack-f52j.onrender.com/todo/register`, data)
      .then((res) => {
        console.log("signup data", res.data.user);
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <>
      <h1 className="text-center mt-2">Signup</h1>
      <div className="d-flex justify-content-center">
        <form className="w-25 border border-dark p-5 mt-5">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
