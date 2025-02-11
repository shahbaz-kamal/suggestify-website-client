import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";

// import required modules
import { Pagination, Navigation ,Autoplay} from "swiper/modules";
import Slide from "./Slide";

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Auto-slide every 3 seconds
          disableOnInteraction: false, // Keep autoplay working after user interaction
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper h-[80vh]"
      >
        <SwiperSlide>
          <Slide
            imageURL={"https://i.ibb.co.com/zQPdvFC/banner2.webp"}
            title={"Discover the Best Device for Your Needs"}
            subTitle={
              "Unmatched performance, exceptional quality, and tailored recommendations just for you."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide

            imageURL={"https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            // imageURL={"https://i.ibb.co.com/DMKF2ZD/banner1.jpg"}
            title={"Your Questions, Answered"}
            subTitle={
              "Explore insights, share knowledge, and find solutions to all your queries."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imageURL={"https://i.ibb.co.com/GFwnLDR/banner3.webp"}
            title={"Top Gadget Picks Just for You"}
            subTitle={
              "Smart recommendations tailored to your needs—explore the best tech today!"
            }
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
