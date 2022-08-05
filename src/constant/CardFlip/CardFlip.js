import React from "react";
import "./CardFlip.css";
import { ReactComponent as ProLogoSVG } from "../../assets/proLogo.svg";
import Button from "../Button";
import { motion } from "framer-motion";

const CardFlip = ({ card }) => {
  return (
    <motion.div className="card-flip">
      <div className="front">
        <img src={card.image} alt="card" />
        <h2>{card.title}</h2>
      </div>
      <div className="back">
        <span className="svg-span">
          <ProLogoSVG fill={card.svgColor} />
        </span>
        <h2>{card.title}</h2>
        <p>{card.paragraph}</p>
        <div className="btn-program">
          <Button btnTitle="اكتشف" textColor="blue" />
        </div>
      </div>
    </motion.div>
  );
};

export default CardFlip;
