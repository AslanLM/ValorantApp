import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Layout.css";

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  
  const handleClicked=()=>{
    setClicked((prevClicked) => !prevClicked);
  };

  const handleClickedLinks=()=>{
    setClicked(false)
  }

  useEffect(() => {
    document.body.style.overflow = clicked ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [clicked]);


  return (
    <header id="header" className='header'>
      <div className="logo" >
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="2em"
            width="2em"
            viewBox="0 0 100 100"
          >
            <path d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z" fill="#000"  className={clicked ? "clicked" : ""}>
            </path>
          </svg>
        </Link>
      </div>

      <button id="menuButton"  className={clicked ? "clicked" : ""} onClick={handleClicked}>
        <div></div>
        <div></div>
      </button>

      <nav id="navbar" style={{ display: clicked ? 'flex' : 'none' }}>
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
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
