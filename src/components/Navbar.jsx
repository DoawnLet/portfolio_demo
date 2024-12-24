import "./NavbarStyle.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  //tạo khả năng khi nhấn vào menu
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  //chuyển đổi color khi scroll thanh nav
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>PortFolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          // nút "X" đóng
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          // nút 3 dấu gạch mở
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}
