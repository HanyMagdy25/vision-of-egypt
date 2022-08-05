import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import looo from "../../assets/logo.png";
import { navTitle } from "../../utils/data";
import { AiOutlineMenu, AiOutlineClose ,AiOutlineArrowDown} from "react-icons/ai";
import { IoIosArrowDown ,IoIosArrowUp } from "react-icons/io";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropNav, setDropNav] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo">
            <img src={looo} alt="edrak-logo" width="100%" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
            <span>{click ? <AiOutlineClose /> : <AiOutlineMenu />}</span>
          </div>

          <ul className={click ? "nav-menu active " : "nav-menu"}>
            {navTitle.map((item, index) => {
              if (item.title === "حول المملكة العربية السعودية") {
                return (
                  <li
                    className={!dropNav ? "nav-item" :"nav-item drop-active"}
                    key={index}
                    onMouseEnter={() => setDropNav(true)}
                    onMouseLeave={() => setDropNav(false)}
                  >
                    <NavLink
                      to={item.path}
                      className={"nav-links "}
                      onClick={() => {
                        handleClick();
                      }}
                    >
                      {item.title} {!dropNav? <IoIosArrowDown/> : <IoIosArrowUp/>}
                    </NavLink>
                    {dropNav && <Dropdown />}
                  </li>
                );
              }
              return (
                <li className="nav-item" key={index}>
                  <NavLink
                    to={item.path}
                    className={"nav-links "}
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
