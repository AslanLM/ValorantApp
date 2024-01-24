import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  const navbarStyle = {
    backgroundColor: isHome ? "#fff" : "#ff3040",
    fill: isHome ? "#fff" : "#ff3040",
  };

  const navbarColor ={
    color: isHome ? "#fff" : "#ff3040",
  }

  const [clicked, setClicked] = useState(false);
  const [menuButton, setMenuButton] = useState({ display: "none" });
  const [navbar, setNavbar] = useState({display: "flex"});

  const handleClicked = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  const handleClickedLinks = () => {
    setClicked(false);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setMenuButton({ display: "flex" });
      setNavbar({display: "none"})
      
    } else {
      setMenuButton({ display: "none" });
      setNavbar({display: "flex"});
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [clicked, setMenuButton, setNavbar]);

  return (
    <header id="header" className="header">
      <div className="logo">
        <Link to="/" onClick={handleClickedLinks}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="2em"
            width="2em"
            viewBox="0 0 100 100"
          >
            <path
              d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z"
              className={clicked ? "clicked" : ""}
              style={navbarStyle}
            ></path>
          </svg>
        </Link>
      </div>

      <nav className="navbar" style={{ ...navbar, ...navbarColor }}>
        <ul >
          <li>
            <NavLink to="/home" onClick={handleClickedLinks}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/agents" onClick={handleClickedLinks}>
              Agents
            </NavLink>
          </li>
          <li>
            <NavLink to="/maps" onClick={handleClickedLinks}>
              Maps
            </NavLink>
          </li>
          <li>
            <NavLink to="/weapons" onClick={handleClickedLinks}>
              Weapons
            </NavLink>
          </li>
          <li>
            <Link to="https://github.com/AslanLM/ValorantApp" target="_blank" onClick={handleClickedLinks}>
              Github
            </Link>
            <style>
                {`
                  .navbar a::before {
                    background-color: ${isHome ? "#fff" : "#ff3040"};
                  }
                `}
              </style>
          </li>
        </ul>
      </nav>

      <button
        id="menuButton"
        className={clicked ? "clicked" : ""}
        onClick={handleClicked}
        style={menuButton}
      >
        <div style={navbarStyle}></div>
        <div style={navbarStyle}></div>
      </button>

      <nav className="navbar-responsive" style={{ display: clicked ? "flex" : "none" }}>
        <ul>
          <li>
            <NavLink to="/home" onClick={handleClickedLinks}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/agents" onClick={handleClickedLinks}>
              Agents
            </NavLink>
          </li>
          <li>
            <NavLink to="/maps" onClick={handleClickedLinks}>
              Maps
            </NavLink>
          </li>
          <li>
            <NavLink to="/weapons" onClick={handleClickedLinks}>
              Weapons
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://github.com/AslanLM/ValorantApp"
              target="_blank"
              onClick={handleClickedLinks}
            >
              Github
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
