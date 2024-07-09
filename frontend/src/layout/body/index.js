import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/index";
import Login from "../../pages/login/index";
import Register from "../../pages/register/index";

const Body = () => {
  return (
    <div className="Main">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Body;
