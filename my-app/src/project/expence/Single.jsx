import React from "react";

const Single = ({ tranc }) => {
  return (
    <li>
      <h3
        className={`${tranc.type}`}>{`${tranc?.title} -  ${tranc?.amount}`}</h3>
    </li>
  );
};

export default Single;
