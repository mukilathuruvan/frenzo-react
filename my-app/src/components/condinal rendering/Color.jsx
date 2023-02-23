import React from "react";

const Color = ({ name }) => {
  // using if-else
    // if (name) {
    //   return <h1>Color - {name}</h1>;
    // } else {
    //   return <h1>Color not specified</h1>;
    // }

  // using conditional operator
    return name ? <h1>Color - {name}</h1> : <h1>Color not specified</h1>;

  // using &&

  //   return <div>{name ?? <h1>Color - {name}</h1>}</div>;

  // return <div>Color</div>;
};

export default Color;
