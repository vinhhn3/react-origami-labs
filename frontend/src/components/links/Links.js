import React, { useContext } from "react";
import BirdFooter from "../../assets/blue-origami-bird-flipped.png";
import BirdNavbar from "../../assets/white-origami-bird.png";
import AuthContext from "../../context/authContext/AuthContext";
import LinkItem from "../linkItem/LinkItem";

const Links = ({ logo }) => {
  const authContext = useContext(AuthContext);
  const { isLoggedIn } = authContext;

  return (
    <ul>
      {logo === "navbar" && <img src={BirdNavbar} />}
      <LinkItem url="/" title="Home" />
      {isLoggedIn ? (
        <>
          <LinkItem url="/share" title="Share" />
          <LinkItem url="/profile" title="Profile" />
        </>
      ) : (
        <>
          <LinkItem url="/login" title="Login" />
          <LinkItem url="/register" title="Register" />
        </>
      )}
      {logo === "footer" && <img src={BirdFooter} />}
    </ul>
  );
};

export default Links;
