import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar bg-body-tertiary border-bottom fixed-top ">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <Link to="/">Album Lists</Link>
        </span>
        <div className="ml-auto">
          <Link to="/" className="mx-2">Dashboard</Link>
          <Link to="/list" className="mx-2">Lists</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
