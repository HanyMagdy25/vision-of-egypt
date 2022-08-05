import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Button from "../../constant/Button";
import { useWindowInner } from "../../hooks/useWindowInner";

const scaleVariants = {
  whileInView: {
    // scale:[0,1],
    x: [-50, 0],
    opacity: [0, 1],
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const SwiperHome = ({ slide, image, text }) => {
  const isInnerWidth = useWindowInner();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isInnerWidth < 769) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isInnerWidth]);

  return (
    <div className="swip-div-custom">
      <img src={slide.image} alt="home" />
      {!isMobile ? (
        <>
          <motion.h1
            variant={scaleVariants}
            whileInView={scaleVariants.whileInView}
          >
            {slide.text}
          </motion.h1>
          <motion.div
            className="btn-swip-home"
            variant={scaleVariants}
            whileInView={scaleVariants.whileInView}
          >
            <Button btnTitle={slide.btnTitle} textColor="white" />
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            className="swip-div-title-and-btn"
            variant={scaleVariants}
            whileInView={scaleVariants.whileInView}
          >
            <motion.h1>{slide.text}</motion.h1>
            <motion.div className="btn-swip-home">
              <Button btnTitle={slide.btnTitle} textColor="white" />
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default SwiperHome;
