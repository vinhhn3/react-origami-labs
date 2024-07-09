import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePost from "../../pages/createPost/index";
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
          path="/share"
          element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>
          }
        />
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
