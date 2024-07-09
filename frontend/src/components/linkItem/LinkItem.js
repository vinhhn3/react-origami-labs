import React from "react";

const LinkItem = ({ url, title }) => {
  return (
    <li className="listItem">
      {/* <Link to={url}>{title}</Link> */}
      <a href="#">{title}</a>
    </li>
  );
};

export default LinkItem;
