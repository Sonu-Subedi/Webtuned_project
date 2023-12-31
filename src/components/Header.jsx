import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <NavLink to="/" className="logo">
          <span className="logo__img-wrapper"></span>
        </NavLink>
        <Navbar />
      </div>
    </nav>
  );
};

export default Header;
