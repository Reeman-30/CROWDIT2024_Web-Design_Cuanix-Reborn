import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import Layout from "../components/Layout";

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </React.Suspense>
  );
}
