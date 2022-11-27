import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Image } from "@chakra-ui/react";
import Image1 from "../Assets/Image1.jpeg"
import Image2 from "../Assets/Image2.jpeg"
import Image3 from "../Assets/Image3.jpeg"
import Image4 from "../Assets/Image4.jpeg"


const imageArray = [
  Image1,
   Image2, Image3, Image4
]


const Crousel = () => {
  return (
    <Box w='90%' m='auto' mt='12'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {imageArray.map((elem, index)=>{
            return (
                <SwiperSlide key={index}>
                    <Image w='100%' h='500px' src={elem}/>
                </SwiperSlide>
            )

        })}
        
      
      </Swiper>
    </Box>
  )
}

export default Crousel