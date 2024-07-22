import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function Signup() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handlePassVisibility = () => {
    setShowPass(!showPass);
  };

  const handleConfirmPassVisibility = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center text-primary">Sign Up</h2>
        <form className="d-flex flex-column w-50 m-auto">
          <div className="mb-3">
            <label htmlFor="nama">Nama Lengkap</label>
            <input type="text" className="form-control" id="nama" />
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" />
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

          <label htmlFor="confirmPass">Confirm Password</label>
          <div className="input-group mb-3">
            <input
              id="confirmPass"
              type={showConfirmPass ? "text" : "password"}
              class="form-control"
            />
            <span
              class="input-group-text"
              onClick={handleConfirmPassVisibility}
            >
              {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div>
            <p>
              Sudah punya akun?{" "}
              <Link to={"/signin"} className="text-decoration-none">
                Sign In
              </Link>
            </p>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
