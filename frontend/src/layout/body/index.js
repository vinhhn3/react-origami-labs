import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/index";
import Login from "../../pages/login/index";
import Profile from "../../pages/profile/index";
import Register from "../../pages/register/index";
import RequireAuth from "../../routes/RequiredAuth";

const Body = () => {
  return (
    <div className="Main">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default Body;
