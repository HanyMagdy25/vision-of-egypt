import React, { useState } from "react";
import "./Button.css"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { Link } from "react-router-dom";
const Button = ({btnTitle,textColor}) => {
    const [btnHover, setBtnHover] = useState(true)
  return (
    <>
      <Link to="/" className={btnHover? "learn-more" : "learn-more active"} onMouseEnter={()=> setBtnHover(false)} onMouseLeave={()=> setBtnHover(true)}>
        <span className={btnHover? `${"button-text-" + textColor}` :`${"button-text-" + textColor} active` }>{btnTitle}</span>
        <span className={btnHover? "circle" : "circle active"} >
          <span className={btnHover? "icon-arrow" : "icon-arrow active"} ><AiOutlineArrowLeft/></span>
        </span>
      </Link>
    </>
  );
};

export default Button;
