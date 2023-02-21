const Header = () => {
  let componyName = "manfree";
  return <h1>First Component- {componyName}</h1>;
};

export default Header;

export const Footer = () => {
  return <h4>Footer Component - {10 + 30}</h4>;
};

export const MainContent = () => {
  return <h3>Main Content Component</h3>;
};
