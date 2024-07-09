import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import { NotFound } from "../../pages/errors/not-found/NotFound";
import { MyPosts } from "../../pages/registered/my-posts/MyPosts";
import { Profile } from "../../pages/registered/profile/Profile";
import { Home } from "../../pages/shared/home/Home";
import { Login } from "../../pages/unregistered/login/Login";
import { Register } from "../../pages/unregistered/register/Register";

export const Body = () => {
  return (
    <div className="Main">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/my-posts">
          <MyPosts />
        </Route>
        <Route path="">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
