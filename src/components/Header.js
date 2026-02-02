import logo from "../logo/react_logo.png";

function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="React Logo" />
      <h1>React Quiz</h1>
    </header>
  );
}

export default Header;
