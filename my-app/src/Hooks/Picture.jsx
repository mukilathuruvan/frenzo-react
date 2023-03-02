import React from "react";
import pic from "../assets/one.jpg";
import { BsInstagram } from "react-icons/bs";
const Picture = () => {
  return (
    <div>
      <img src={pic} alt="" width={"300px"} />
      <BsInstagram />
    </div>
  );
};

export default Picture;
