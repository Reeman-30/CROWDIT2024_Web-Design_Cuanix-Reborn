import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-primary-subtle bg-gradient">
      <div class="container-fluid">
        <Link class="navbar-brand" to={"/"}>
          <span className="fs-3 px-4 fw-semibold">Cuanix Learning</span>
        </Link>
        <div
          class="d-flex flex-row-reverse px-2 collapse navbar-collapse"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to={"/about"}>
                About
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to={"/signin"}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
