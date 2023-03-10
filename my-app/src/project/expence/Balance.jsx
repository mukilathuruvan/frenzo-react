import React from "react";

const Balance = ({ header, amount }) => {
  return (
    <>
      <h2>{header}</h2>
      <h3>₹{amount}</h3>
    </>
  );
};

export default Balance;
