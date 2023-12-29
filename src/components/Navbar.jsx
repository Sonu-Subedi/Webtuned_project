import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldFixNavbar = scrollY > 100;

      setIsNavbarFixed(shouldFixNavbar);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ul className={`navbar-list${isNavbarFixed ? " fixed" : ""}`}>
        <li className="list-item">
          <NavLink className="navbar-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="navbar-link" to="/gallery">
            Gallery
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="navbar-link" to="/aboutus">
            About Us
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="navbar-link" to="/contactus">
            Contact Us
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="navbar-link" to="/newarrivals">
            New Arrivals
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="navbar-link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
