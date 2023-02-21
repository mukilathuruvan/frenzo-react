import React from "react";

export const Destruct = (props) => {
  const { name, year } = props;
  return (
    <div>
      Destruct - {name} - {year}
    </div>
  );
};
