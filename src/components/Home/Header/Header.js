import React from "react";
import Navbar from "../../Navbar/Navbar";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { homeSwiperData } from "../../../utils/data";
import SwiperHome from "../SwiperHome";
// import { useWindowInner } from "../../../hooks/useWindowInner";

const Header = () => {
  
  return (
    <>
      <div className="home">
        <Navbar />
        <>
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper swiper-custom"
          >
            {homeSwiperData?.slice(0, 6)?.map((slide, index) => (
              <SwiperSlide key={index}>
                <SwiperHome slide={slide}  />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </>
  );
};

export default Header;
