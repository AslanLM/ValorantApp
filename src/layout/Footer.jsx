import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-copy">
      <h3>Valorant App 2023 &copy; By: <Link to='https://github.com/AslanLM/ValorantApp' target='blank'>Aslanlm</Link></h3>
    </div>
  </footer>
  )
}

export default Footer