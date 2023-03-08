import React, { memo } from "react";

export const CompoB = memo(() => {
  console.log("Component - B");
  return <div>CompoB</div>;
});

export default memo(CompoB);

const Header = () => {
  return <div></div>;
};

export const MemoizedHeader = memo(Header);
