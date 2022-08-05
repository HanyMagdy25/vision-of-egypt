import React from "react";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import Button from "../../../constant/Button";

const SwiperProjects = ({ data }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: "spring" }}
              className="carousel-projects"
            >
              <motion.img
                src={slide.image}
                alt="carousel-projects"
                className="carousel-projects-background"
              />
              <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.7, type: "spring" }}
                className="carousel-projects-content"
              >
                <h2>{slide.city}</h2>
                <p>{slide.paragraph}</p>
              </motion.div>
              <motion.div
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.7, type: "spring" }}
                className="btn-programs"
              >
                <Button btnTitle={slide.city} textColor="blue" />
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperProjects;
