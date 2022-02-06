import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, EffectFade,Navigation } from "swiper"

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect="fade"
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, EffectFade,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0535/3095/1834/files/Banner_Gifatstic_6_1296x.png?v=1638980790"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0535/3095/1834/files/Banner_Gifatstic_1_1296x.png?v=1638178260"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0535/3095/1834/files/Banner_Gifatstic_4_1296x.png?v=1638357904"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0535/3095/1834/files/Banner_Gifatstic_5_1296x.png?v=1638361003"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0535/3095/1834/files/Banner_Gifatstic_7_1296x.png?v=1639068446"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
