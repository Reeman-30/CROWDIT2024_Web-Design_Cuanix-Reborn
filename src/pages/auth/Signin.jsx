import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function Signin() {
  const [showPass, setShowPass] = useState(false);

  const handlePassVisibility = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center text-primary">Sign In</h2>
        <form className="d-flex flex-column w-50 m-auto">
          <div className="mb-3">
            <label for="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              autoComplete="off"
            />
          </div>

          <label htmlFor="password">Password</label>
          <div className="input-group mb-3">
            <input
              id="password"
              type={showPass ? "text" : "password"}
              class="form-control"
            />
            <span class="input-group-text" onClick={handlePassVisibility}>
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div>
            <p>
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-decoration-none">
                Sign Up
              </Link>
            </p>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
