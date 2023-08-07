import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import RightArrow from '../images/right.png' ; 
import LeftArrow from '../images/left.png' ; 
import { useEffect, useRef, useState } from "react";

import img1 from "../images/fireman.jpeg"
import img2 from "../images/waterman.jpg"
import img3 from "../images/fireman2.jpeg"

const Join = () => {
    const Pics = 
    [ {id:1 , 
      pic:img1} , 

      {id:2 , 
      pic:img2} ,

      {id:3 , 
      pic:img3} ]
       
    
    const swiperRef = useRef(null);

    return (
 <div id="Joinus" className="relative  w-full flex flex-row lg:flex-col justify-center items-center h-[400px] ">
       
        <div className="bg-sky pt-8 flex flex-col items-center justify-cenetr space-y-10 w-[90%] h-[100%] rounded-tl-[55px] rounded-br-[55px] ">

        <div className="flex flex-col items-center space-y-5  lg:flex-row">

                <div className="flex flex-col justify-center items-center space-y-3 px-4  ">
                <p className="font-bold text-2xl ">  Rejoignez-Nous ! </p>
                <p className=" text-sm font-medium "> <center> dans notre mission pour sauver notre pays du désastres en un clic ! </center> </p>
                </div>

                <button className="w-[80%] h-[50px] bg-blue rounded-full text-white font-semibold  "> Signaler un problème
                </button>

        </div>
       
 
        <div className="flex flex-row justify-center items-center w-[100%]">
                <div
                    onClick={() => {
                        swiperRef.current.swiper.slidePrev();
                    }}
                    className="cursor-pointer "
                    >
                    <img src={LeftArrow} className="w-[20px] h-[20px]" alt="" />
                </div>

      <div className="w-[60%]">
         <Swiper
                            ref={swiperRef}
                            spaceBetween={3}
                            breakpoints={{
                                640: {
                                slidesPerView: 1,
                                },
                                700: {
                                slidesPerView: 2,
                                },
                                1024: {
                                slidesPerView: 3,
                                },
                            }}
                            >
                            
                    <SwiperSlide>
                    {({ isActive, isNext, isPrev }) => (
                      <div
                        className="scale-100 lg:scale-75  p-2 lg:p-1"
                      >
                      <img  className=" rounded-lg w-[100%]" src={img1} alt="" />
                      </div>
                    )}
                    
                  </SwiperSlide>

                  <SwiperSlide>
                    {({ isActive, isNext, isPrev }) => (
                      <div
                        className="scale-100 lg:scale-75  p-2 lg:p-1"
                      >
                      <img  className="w-[100%]" src={img1} alt="" />
                      </div>
                    )}
                    
                  </SwiperSlide>
                         

     </Swiper>
     </div>

                <div
                    onClick={() => {
                        swiperRef.current.swiper.slideNext();
                    }}
                    className="cursor-pointer "
                    >
                    <img src={RightArrow} className="w-[20px] h-[20px]" alt="" />
                </div>
        </div>
       

        </div>
    </div> );
}
 
export default Join;