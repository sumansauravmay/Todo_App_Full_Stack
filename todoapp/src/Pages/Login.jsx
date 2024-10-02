import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    let data = { email, password };
    axios
      .post(`https://todo-app-full-stack-f52j.onrender.com/todo/login`, data)
      .then((res) => {
        console.log("login token", res.data);
        let token = res.data.token;
        if (token) {
          localStorage.setItem("token", JSON.stringify(token));
          alert("Login successfull!");
        } else {
          alert("Login failed!");
        }
      })
      .catch((err) => {
        console.log("err", err);
        alert("Loign Failed");
      });
  };

  return (
    <>
      <h1 className="text-center mt-2">Login</h1>
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
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default React.memo(Login);
