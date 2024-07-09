import React, { useContext } from "react";
import BirdFooter from "../../assets/blue-origami-bird-flipped.png";
import BirdNavbar from "../../assets/white-origami-bird.png";
import OrigamiContext from "../../context/origami/OrigamiContext";
import LinkItem from "./LinkItem";

const Links = ({ logo }) => {
  const origamiContext = useContext(OrigamiContext);
  const { linkItems } = origamiContext;

  return (
    <ul>
      {logo === "navbar" && <img src={BirdNavbar} />}
      {linkItems.map((item) => (
        <LinkItem key={item.id} url={item.url} title={item.title} />
      ))}
      {logo === "footer" && <img src={BirdFooter} />}
    </ul>
  );
};

export default Links;
