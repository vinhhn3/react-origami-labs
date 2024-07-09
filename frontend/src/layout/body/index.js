import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/index";

const Body = () => {
  return (
    <div className="Main">
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
};

export default Body;
