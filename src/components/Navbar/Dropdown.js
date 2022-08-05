import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dropDown } from "../../utils/data";

const Dropdown = () => {
  const [drop, setDrop] = useState(false);
  return (
    <>
      <motion.ul
        initial={{ y: "-10%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onClick={() => setDrop(!drop)}
        className="dropdown-main"
      >
        {dropDown.map((item, index) => (
          <li key={index}>
            <Link to={item.path} onClick={() => setDrop(!drop)}>
              {item.title}
            </Link>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default Dropdown;
