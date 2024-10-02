import React from "react";

const Signup = () => {
  return (
    <>
      <h1 class="text-center mt-2">Signup</h1>
      <div class="d-flex justify-content-center">
        <form class="w-25 border border-dark p-5 mt-5">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Username
            </label>
            <input type="text" class="form-control" id="exampleInputUsername" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
