import React, { useEffect, useRef, useState } from "react";
import "./Programs.css";
import CardFlip from "../../../constant/CardFlip/CardFlip";
import { programs } from "../../../utils/data";
import programsImg from "../../../assets/vision-section-bg.png";
// import MotionWrap from '../../../Wrapper/MotionWrap';
// import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Programs = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="programs">
      <img src={programsImg} alt="programs" className="img-blue" />
      <motion.div
        ref={carousel}
        className="programs-carousel"
        whileTap={{ cursor: "grabbing" }}
        
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: width }}
          className="cards-flip"
          
        >
          {programs.map((card, index) => (
            <CardFlip card={card} key={index} />
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="programs-title"
      >
        <h2>برامج</h2>
        <h2>تحقيق</h2>
        <h2>الرؤية</h2>
      </motion.div>
    </div>
  );
};

// export default MotionWrap(Programs, "app__about")
export default Programs;
