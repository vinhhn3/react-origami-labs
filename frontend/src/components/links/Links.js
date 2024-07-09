import React, { useContext } from "react";
import BirdFooter from "../../assets/blue-origami-bird-flipped.png";
import BirdNavbar from "../../assets/white-origami-bird.png";
import PostContext from "../../context/postContext/PostContext";

const Links = ({ logo }) => {
  const postContext = useContext(PostContext);
  const { linkItems } = postContext;

  return (
    <ul>
      {logo === "navbar" && <img src={BirdNavbar} />}
      {/* {linkItems.map((item) => (
        <LinkItem key={item.id} url={item.url} title={item.title} />
      ))} */}
      {logo === "footer" && <img src={BirdFooter} />}
    </ul>
  );
};

export default Links;
